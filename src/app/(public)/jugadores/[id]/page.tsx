// src/app/(public)/jugadores/[id]/page.tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPlayerById } from '@/lib/data/players'
import { PlayerWithRelations, PlayerStats, MatchHistory } from '@/types/player'
import { PlayerHeader } from './components/PlayerHeader/PlayerHeader'
import { PlayerStats as PlayerStatsComponent } from './components/PlayerStats/PlayerStats'
import { RecentMatches } from './components/RecentMatches/RecentMatches'
import { ContractInfo } from './components/ContractInfo/ContractInfo'
import { PlayerAttributes } from './components/PlayerAttributes/PlayerAttributes'
import { PlayerActions } from './components/PlayerActions/PlayerActions'

// Utilidades
const colorPosicion = (posicion: string): string => {
  const pos = posicion.toLowerCase()
  return pos.includes('portero') ? "bg-yellow-500" :
         pos.includes('defensa') ? "bg-blue-500" :
         pos.includes('centrocampista') || pos.includes('mediocampista') ? "bg-green-500" : "bg-red-500"
}

const calculateAge = (birthDate: Date | null): number | null => {
  if (!birthDate) return null
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

const formatCurrency = (amount: number | null, currency: string = 'EUR'): string => {
  if (!amount) return 'No especificado'
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(Number(amount))
}

const calculatePlayerStats = (player: PlayerWithRelations): PlayerStats => {
  const matchStats = player.player_match_stats
  
  if (matchStats.length === 0) {
    return {
      partidos: 0,
      goles: 0,
      asistencias: 0,
      rating: 0,
      minutosJugados: 0,
      tarjetasAmarillas: 0,
      tarjetasRojas: 0,
      promedioPases: 0,
      precisionPases: 0,
      promedioTiros: 0,
      precisionTiros: 0,
      promedioTackles: 0,
      exitosoTackles: 0,
      promedioIntercepciones: 0,
    }
  }

  const totalMatches = matchStats.length
  const totalGoals = matchStats.reduce((sum, stat) => sum + (stat.goals || 0), 0)
  const totalAssists = matchStats.reduce((sum, stat) => sum + (stat.assists || 0), 0)
  const totalMinutes = matchStats.reduce((sum, stat) => sum + (stat.minutes_played || 0), 0)
  const totalYellowCards = matchStats.reduce((sum, stat) => sum + (stat.yellow_cards || 0), 0)
  const totalRedCards = matchStats.reduce((sum, stat) => sum + (stat.red_cards || 0), 0)
  const totalShots = matchStats.reduce((sum, stat) => sum + (stat.shots || 0), 0)
  const totalShotsOnTarget = matchStats.reduce((sum, stat) => sum + (stat.shots_on_target || 0), 0)
  const totalPasses = matchStats.reduce((sum, stat) => sum + (stat.passes || 0), 0)
  const totalTackles = matchStats.reduce((sum, stat) => sum + (stat.tackles || 0), 0)
  const totalInterceptions = matchStats.reduce((sum, stat) => sum + (stat.interceptions || 0), 0)
  
  const avgRating = matchStats.reduce((sum, stat) => sum + (stat.pro_clubs_rating?.toNumber() || 0), 0) / totalMatches
  const avgPassAccuracy = matchStats.reduce((sum, stat) => sum + (stat.pass_accuracy?.toNumber() || 0), 0) / totalMatches

  return {
    partidos: totalMatches,
    goles: totalGoals,
    asistencias: totalAssists,
    rating: Number(avgRating.toFixed(1)),
    minutosJugados: totalMinutes,
    tarjetasAmarillas: totalYellowCards,
    tarjetasRojas: totalRedCards,
    promedioPases: Number((totalPasses / totalMatches).toFixed(1)),
    precisionPases: Number(avgPassAccuracy.toFixed(1)),
    promedioTiros: Number((totalShots / totalMatches).toFixed(1)),
    precisionTiros: totalShots > 0 ? Number(((totalShotsOnTarget / totalShots) * 100).toFixed(1)) : 0,
    promedioTackles: Number((totalTackles / totalMatches).toFixed(1)),
    exitosoTackles: 80, // Valor por defecto hasta que tengamos más datos
    promedioIntercepciones: Number((totalInterceptions / totalMatches).toFixed(1)),
  }
}

interface PageProps {
  params: { id: string }
}

export default async function JugadorPerfilPage({ params }: PageProps) {
  const playerId = parseInt(params.id)
  
  if (isNaN(playerId)) {
    notFound()
  }

  const player = await getPlayerById(playerId)

  if (!player) {
    notFound()
  }

  const estadisticas = calculatePlayerStats(player)
  const contratoActual = player.contracts[0]
  const historialPartidos: MatchHistory[] = player.player_match_stats.slice(0, 4).map(stat => ({
    id: stat.id,
    fecha: stat.matches?.match_date ? new Date(stat.matches.match_date).toLocaleDateString('es-ES') : 'Fecha no disponible',
    rival: `${stat.matches?.home_team || 'Equipo'} vs ${stat.matches?.away_team || 'Rival'}`,
    resultado: `${stat.matches?.match_results?.home_score || 0}-${stat.matches?.match_results?.away_score || 0}`,
    goles: stat.goals || 0,
    asistencias: stat.assists || 0,
    rating: stat.pro_clubs_rating || 0,
  }))

  return (
    <div className="min-h-screen bg-primary-500 py-8">
      <div className="container mx-auto px-4">
        {/* Navegación */}
        <nav className="mb-6">
          <Link 
            href="/jugadores" 
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al plantel
          </Link>
        </nav>

        <PlayerHeader 
          player={player}
          estadisticas={estadisticas}
          colorPosicion={colorPosicion}
          calculateAge={calculateAge}
        />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Columna izquierda */}
          <div className="xl:col-span-2 space-y-8">
            <PlayerStatsComponent estadisticas={estadisticas} />
            <RecentMatches historialPartidos={historialPartidos} />
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            <ContractInfo 
              contratoActual={contratoActual}
              formatCurrency={formatCurrency}
            />
            <PlayerAttributes />
            <PlayerActions />
          </div>
        </div>
      </div>
    </div>
  )
}