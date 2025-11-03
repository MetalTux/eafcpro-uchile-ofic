// src/types/player.ts
import { players, contracts, player_match_stats, player_season_stats, matches, match_results } from '@/generated/prisma/client'

// Tipo para el jugador con todas sus relaciones
export type PlayerWithRelations = players & {
  contracts: contracts[]
  player_match_stats: (player_match_stats & {
    matches: (matches & {
      match_results: match_results | null
    }) | null
  })[]
  player_season_stats: player_season_stats[]
}

// Tipo para estadísticas calculadas
export interface PlayerStats {
  partidos: number
  goles: number
  asistencias: number
  rating: number
  minutosJugados: number
  tarjetasAmarillas: number
  tarjetasRojas: number
  promedioPases: number
  precisionPases: number
  promedioTiros: number
  precisionTiros: number
  promedioTackles: number
  exitosoTackles: number
  promedioIntercepciones: number
}

// Tipo para partido del historial
export interface MatchHistory {
  id: number
  fecha: string
  rival: string
  resultado: string
  goles: number
  asistencias: number
  rating: number
}