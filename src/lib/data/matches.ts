import { prisma } from '../db'
import { MatchSchema, MatchUpdateSchema } from '../validations/schemas'
import type { matches } from '@/generated/prisma/client'

export async function getMatches() {
  return await prisma.matches.findMany({
    include: {
      match_results: true,
      player_match_stats: {
        include: {
          players: true
        }
      }
    },
    orderBy: { match_date: 'desc' }
  })
}

export async function getMatchById(id: number) {
  return await prisma.matches.findUnique({
    where: { id },
    include: {
      match_results: true,
      player_match_stats: {
        include: {
          players: true
        }
      },
      comments: {
        where: { is_approved: true }
      }
    }
  })
}

export async function getUpcomingMatches() {
  return await prisma.matches.findMany({
    where: {
      match_date: { gte: new Date() },
      status: 'scheduled'
    },
    include: {
      match_results: true
    },
    orderBy: { match_date: 'asc' },
    take: 10
  })
}

export async function getRecentMatches() {
  return await prisma.matches.findMany({
    where: {
      match_date: { lte: new Date() },
      status: 'finished'
    },
    include: {
      match_results: true
    },
    orderBy: { match_date: 'desc' },
    take: 10
  })
}

export async function getMatchesByCompetition(competition: string) {
  return await prisma.matches.findMany({
    where: { 
      competition: { contains: competition, mode: 'insensitive' }
    },
    include: {
      match_results: true
    },
    orderBy: { match_date: 'desc' }
  })
}

export async function createMatch(data: Omit<matches, 'id' | 'created_at' | 'updated_at'>) {
  const validatedData = MatchSchema.parse(data)
  return await prisma.matches.create({
    data: validatedData
  })
}

export async function updateMatch(id: number, data: Partial<matches>) {
  const validatedData = MatchUpdateSchema.parse(data)
  return await prisma.matches.update({
    where: { id },
    data: validatedData
  })
}

export async function updateMatchStatus(id: number, status: 'scheduled' | 'live' | 'finished' | 'cancelled') {
  return await prisma.matches.update({
    where: { id },
    data: { status }
  })
}

export async function deleteMatch(id: number) {
  return await prisma.matches.delete({
    where: { id }
  })
}