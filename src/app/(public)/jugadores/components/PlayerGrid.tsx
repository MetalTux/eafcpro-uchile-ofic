import { players } from '@/generated/prisma/client'
import PlayerCard from './PlayerCard'

interface PlayerGridProps {
  players: players[]
}

export default function PlayerGrid({ players }: PlayerGridProps) {
  if (players.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
          <div className="text-6xl mb-4">👤</div>
          <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">No hay jugadores</h3>
          <p className="text-gray-600 mb-4">No se encontraron jugadores con los filtros aplicados.</p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
            Ver todos los jugadores
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  )
}