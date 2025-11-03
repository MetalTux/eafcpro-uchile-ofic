// src/app/(public)/jugadores/[id]/components/RecentMatches/RecentMatches.tsx
import { MatchHistory } from '@/types/player'

interface RecentMatchesProps {
  historialPartidos: MatchHistory[]
}

export function RecentMatches({ historialPartidos }: RecentMatchesProps) {
  if (historialPartidos.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">Últimos Partidos</h2>
      <div className="space-y-4">
        {historialPartidos.map((partido) => (
          <div key={partido.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sm text-gray-500">{partido.fecha}</span>
                <span className="text-lg font-semibold text-gray-800">{partido.rival}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-600">Resultado: <strong>{partido.resultado}</strong></span>
                <span className="text-green-600">Goles: <strong>{partido.goles}</strong></span>
                <span className="text-blue-600">Asistencias: <strong>{partido.asistencias}</strong></span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">{partido.rating}</div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}