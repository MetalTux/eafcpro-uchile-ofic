// src/app/(public)/jugadores/[id]/components/PlayerStats/MainStats.tsx
import { PlayerStats } from '@/types/player'

interface MainStatsProps {
  estadisticas: PlayerStats
}

export function MainStats({ estadisticas }: MainStatsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Estadísticas Principales</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-primary-50 rounded-lg">
          <div className="text-3xl font-bold text-primary-600">{estadisticas.partidos}</div>
          <div className="text-gray-600">Partidos</div>
        </div>
        <div className="text-center p-4 bg-accent-50 rounded-lg">
          <div className="text-3xl font-bold text-accent-600">{estadisticas.goles}</div>
          <div className="text-gray-600">Goles</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">{estadisticas.asistencias}</div>
          <div className="text-gray-600">Asistencias</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">{estadisticas.rating}</div>
          <div className="text-gray-600">Rating</div>
        </div>
      </div>
    </div>
  )
}