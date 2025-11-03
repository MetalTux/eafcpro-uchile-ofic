// src/app/(public)/jugadores/[id]/components/PlayerHeader/PlayerBasicInfo.tsx
import { PlayerWithRelations } from '@/types/player'

interface PlayerBasicInfoProps {
  player: PlayerWithRelations
  colorPosicion: (position: string) => string
  calculateAge: (birthDate: Date | null) => number | null
}

export function PlayerBasicInfo({ player, colorPosicion, calculateAge }: PlayerBasicInfoProps) {
  return (
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-4xl font-heading font-bold text-gray-800 mb-2">{player.name}</h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
        <span className={`px-4 py-2 rounded-full text-white text-lg font-semibold ${colorPosicion(player.position)}`}>
          {player.position}
        </span>
        <span className="text-3xl font-bold text-primary-600">#{player.jersey_number || 'N/A'}</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="text-sm text-gray-600">Edad</div>
          <div className="text-lg font-semibold">{calculateAge(player.birth_date) || 'N/A'} años</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Nacionalidad</div>
          <div className="text-lg font-semibold">{player.nationality || 'N/A'}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Altura</div>
          <div className="text-lg font-semibold">{player.height_cm ? `${player.height_cm} cm` : 'N/A'}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Peso</div>
          <div className="text-lg font-semibold">{player.weight_kg ? `${player.weight_kg} kg` : 'N/A'}</div>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{player.bio || 'No hay biografía disponible.'}</p>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <span>Estado: <strong className={player.is_active ? "text-green-600" : "text-red-600"}>
          {player.is_active ? "Activo" : "Inactivo"}
        </strong></span>
      </div>
    </div>
  )
}