// src/app/(public)/jugadores/[id]/components/PlayerStats/PlayerStats.tsx
import { PlayerStats as PlayerStatsType } from '@/types/player'
import { MainStats } from './MainStats'
import { DetailedStats } from './DetailedStats'

interface PlayerStatsProps {
  estadisticas: PlayerStatsType
}

export function PlayerStats({ estadisticas }: PlayerStatsProps) {
  return (
    <div className="space-y-8">
      <MainStats estadisticas={estadisticas} />
      <DetailedStats estadisticas={estadisticas} />
    </div>
  )
}