// src/app/(public)/jugadores/[id]/components/PlayerHeader/PlayerHeader.tsx
import { PlayerWithRelations, PlayerStats } from '@/types/player'
import { PlayerBasicInfo } from './PlayerBasicInfo'

interface PlayerHeaderProps {
  player: PlayerWithRelations
  estadisticas: PlayerStats
  colorPosicion: (position: string) => string
  calculateAge: (birthDate: Date | null) => number | null
}

export function PlayerHeader({ player, estadisticas, colorPosicion, calculateAge }: PlayerHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div className={`h-2 ${colorPosicion(player.position)}`}></div>
      <div className="p-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Avatar y número */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-6xl">
              {player.jersey_number || '?'}
            </div>
          </div>

          <PlayerBasicInfo 
            player={player} 
            colorPosicion={colorPosicion}
            calculateAge={calculateAge}
          />

          {/* Rating destacado */}
          <div className="flex-shrink-0">
            <div className="text-center bg-primary-50 rounded-2xl p-6">
              <div className="text-5xl font-bold text-primary-600 mb-2">{estadisticas.rating}</div>
              <div className="text-gray-600 font-semibold">Rating Promedio</div>
              <div className="text-sm text-gray-500 mt-2">Basado en {estadisticas.partidos} partidos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}