import { prisma } from '../db'
import { PlayerMatchStatsSchema, PlayerSeasonStatsSchema, PlayerMatchStatsUpdateSchema, PlayerSeasonStatsUpdateSchema } from '../validations/schemas'
import type { player_match_stats, player_season_stats } from '@/generated/prisma/client'

// ===== ESTADÍSTICAS POR PARTIDO =====

export async function getPlayerMatchStats() {
  return await prisma.player_match_stats.findMany({
    include: {
      players: true,
      matches: true
    },
    orderBy: { matches: { match_date: 'desc' } }
  })
}

export async function getPlayerMatchStatsById(id: number) {
  return await prisma.player_match_stats.findUnique({
    where: { id },
    include: {
      players: true,
      matches: true
    }
  })
}

export async function getPlayerMatchStatsByPlayerId(playerId: number) {
  return await prisma.player_match_stats.findMany({
    where: { player_id: playerId },
    include: {
      matches: true
    },
    orderBy: { matches: { match_date: 'desc' } }
  })
}

export async function getPlayerMatchStatsByMatchId(matchId: number) {
  return await prisma.player_match_stats.findMany({
    where: { match_id: matchId },
    include: {
      players: true
    }
  })
}

export async function createPlayerMatchStats(data: Omit<player_match_stats, 'id' | 'created_at'>) {
  const validatedData = PlayerMatchStatsSchema.parse(data)
  return await prisma.player_match_stats.create({
    data: validatedData
  })
}

export async function updatePlayerMatchStats(id: number, data: Partial<player_match_stats>) {
  const validatedData = PlayerMatchStatsUpdateSchema.parse(data)
  return await prisma.player_match_stats.update({
    where: { id },
    data: validatedData
  })
}

export async function deletePlayerMatchStats(id: number) {
  return await prisma.player_match_stats.delete({
    where: { id }
  })
}

// ===== ESTADÍSTICAS POR TEMPORADA =====

export async function getPlayerSeasonStats() {
  return await prisma.player_season_stats.findMany({
    include: {
      players: true
    },
    orderBy: { season: 'desc' }
  })
}

export async function getPlayerSeasonStatsById(id: number) {
  return await prisma.player_season_stats.findUnique({
    where: { id },
    include: {
      players: true
    }
  })
}

export async function getPlayerSeasonStatsByPlayerId(playerId: number) {
  return await prisma.player_season_stats.findMany({
    where: { player_id: playerId },
    orderBy: { season: 'desc' }
  })
}

export async function getPlayerSeasonStatsBySeason(season: string) {
  return await prisma.player_season_stats.findMany({
    where: { season },
    include: {
      players: true
    },
    orderBy: { goals: 'desc' }
  })
}

export async function createPlayerSeasonStats(data: Omit<player_season_stats, 'id' | 'created_at'>) {
  const validatedData = PlayerSeasonStatsSchema.parse(data)
  return await prisma.player_season_stats.create({
    data: validatedData
  })
}

export async function updatePlayerSeasonStats(id: number, data: Partial<player_season_stats>) {
  const validatedData = PlayerSeasonStatsUpdateSchema.parse(data)
  return await prisma.player_season_stats.update({
    where: { id },
    data: validatedData
  })
}

export async function deletePlayerSeasonStats(id: number) {
  return await prisma.player_season_stats.delete({
    where: { id }
  })
}

// ===== ESTADÍSTICAS AGREGADAS =====

export async function getTopScorers(season?: string) {
  const whereClause = season ? { season } : {}
  
  return await prisma.player_season_stats.findMany({
    where: whereClause,
    include: {
      players: true
    },
    orderBy: { goals: 'desc' },
    take: 10
  })
}

export async function getTopAssists(season?: string) {
  const whereClause = season ? { season } : {}
  
  return await prisma.player_season_stats.findMany({
    where: whereClause,
    include: {
      players: true
    },
    orderBy: { assists: 'desc' },
    take: 10
  })
}

export async function getPlayerCareerStats(playerId: number) {
  return await prisma.player_season_stats.aggregate({
    where: { player_id: playerId },
    _sum: {
      matches_played: true,
      goals: true,
      assists: true,
      yellow_cards: true,
      red_cards: true
    },
    _avg: {
      avg_rating: true,
      avg_minutes: true
    }
  })
}