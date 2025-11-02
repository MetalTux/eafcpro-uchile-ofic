// src/app/(public)/jugadores/components/PlayerCard.tsx
import { players } from '@/generated/prisma/client'
import Link from 'next/link'

interface PlayerCardProps {
  player: players
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const calculateAge = (birthDate: Date | null) => {
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

  const getPositionColor = (position: string) => {
    const positionLower = position.toLowerCase()
    if (positionLower.includes('portero')) return 'bg-yellow-500'
    if (positionLower.includes('defensa')) return 'bg-blue-500'
    if (positionLower.includes('centrocampista') || positionLower.includes('mediocampista')) return 'bg-green-500'
    if (positionLower.includes('delantero')) return 'bg-red-500'
    return 'bg-gray-500'
  }

  // Estadísticas de ejemplo (luego vendrán de la BD)
  const estadisticasEjemplo = {
    partidos: 15,
    goles: Math.floor(1 * 15),
    asistencias: Math.floor(2 * 10),
    rating: (3 * 2 + 7).toFixed(1)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
      {/* Header con color según posición */}
      <div className={`h-2 ${getPositionColor(player.position)}`}></div>
      
      {/* Contenido de la tarjeta */}
      <div className="p-6">
        {/* Avatar e información básica */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {player.jersey_number || '?'}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-heading font-bold text-gray-800">{player.name}</h3>
            <p className="text-primary-600 font-semibold">{player.position}</p>
            <p className="text-gray-500 text-sm">#{player.jersey_number || 'N/A'}</p>
          </div>
        </div>

        {/* Información adicional */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Edad:</span>
            <span className="font-semibold">{calculateAge(player.birth_date) || 'N/A'} años</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Nacionalidad:</span>
            <span className="font-semibold">{player.nationality || 'N/A'}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Partidos:</span>
            <span className="font-semibold">{estadisticasEjemplo.partidos}</span>
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{estadisticasEjemplo.goles}</div>
            <div className="text-xs text-gray-600">Goles</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{estadisticasEjemplo.asistencias}</div>
            <div className="text-xs text-gray-600">Asist.</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary-600">{estadisticasEjemplo.rating}</div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-2">
          <Link 
            href={`/jugadores/${player.id}`}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Ver Perfil
          </Link>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-lg transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}