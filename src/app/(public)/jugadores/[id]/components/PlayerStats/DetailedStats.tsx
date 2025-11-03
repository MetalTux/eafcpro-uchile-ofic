// src/app/(public)/jugadores/[id]/components/PlayerStats/DetailedStats.tsx
import { PlayerStats } from '@/types/player'

interface DetailedStatsProps {
  estadisticas: PlayerStats
}

export function DetailedStats({ estadisticas }: DetailedStatsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Estadísticas Detalladas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Ataque</h3>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-600">Goles por partido</span>
            <span className="font-semibold">
              {estadisticas.partidos > 0 ? (estadisticas.goles / estadisticas.partidos).toFixed(2) : '0.00'}
            </span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-600">Asistencias por partido</span>
            <span className="font-semibold">
              {estadisticas.partidos > 0 ? (estadisticas.asistencias / estadisticas.partidos).toFixed(2) : '0.00'}
            </span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-600">Tiros por partido</span>
            <span className="font-semibold">{estadisticas.promedioTiros}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-600">Precisión de tiros</span>
            <span className="font-semibold">{estadisticas.precisionTiros}%</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Posesión</h3>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-600">Pases por partido</span>
            <span className="font-semibold">{estadisticas.promedioPases}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-600">Precisión de pases</span>
            <span className="font-semibold">{estadisticas.precisionPases}%</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-600">Tackles por partido</span>
            <span className="font-semibold">{estadisticas.promedioTackles}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-600">Intercepciones por partido</span>
            <span className="font-semibold">{estadisticas.promedioIntercepciones}</span>
          </div>
        </div>
      </div>
    </div>
  )
}