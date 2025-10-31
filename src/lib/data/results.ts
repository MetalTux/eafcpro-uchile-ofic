import { prisma } from '../db'
import { MatchResultSchema, MatchResultUpdateSchema } from '../validations/schemas'
import type { match_results } from '@/generated/prisma/client'

export async function getMatchResults() {
  return await prisma.match_results.findMany({
    include: {
      matches: true
    },
    orderBy: { matches: { match_date: 'desc' } }
  })
}

export async function getMatchResultById(id: number) {
  return await prisma.match_results.findUnique({
    where: { id },
    include: {
      matches: true
    }
  })
}

export async function getMatchResultByMatchId(matchId: number) {
  return await prisma.match_results.findUnique({
    where: { match_id: matchId },
    include: {
      matches: true
    }
  })
}

export async function getRecentResults(limit: number = 10) {
  return await prisma.match_results.findMany({
    where: {
      matches: {
        status: 'finished'
      }
    },
    include: {
      matches: true
    },
    orderBy: { matches: { match_date: 'desc' } },
    take: limit
  })
}

export async function createMatchResult(data: Omit<match_results, 'id' | 'created_at'>) {
  const validatedData = MatchResultSchema.parse(data)
  return await prisma.match_results.create({
    data: validatedData
  })
}

export async function updateMatchResult(id: number, data: Partial<match_results>) {
  const validatedData = MatchResultUpdateSchema.parse(data)
  return await prisma.match_results.update({
    where: { id },
    data: validatedData
  })
}

export async function upsertMatchResultByMatchId(matchId: number, data: Omit<match_results, 'id' | 'match_id' | 'created_at'>) {
  const validatedData = MatchResultUpdateSchema.parse(data)
  return await prisma.match_results.upsert({
    where: { match_id: matchId },
    create: {
      match_id: matchId,
      ...validatedData
    },
    update: validatedData
  })
}

export async function deleteMatchResult(id: number) {
  return await prisma.match_results.delete({
    where: { id }
  })
}

// Estadísticas de resultados
export async function getWinLossRecord() {
  const results = await prisma.match_results.findMany({
    include: {
      matches: true
    },
    where: {
      matches: {
        status: 'finished'
      }
    }
  })

  let wins = 0
  let losses = 0
  let draws = 0

  results.forEach(result => {
    if (result.home_score !== null && result.away_score !== null) {
      // Asumiendo que nuestro equipo es siempre el local (puedes ajustar esta lógica)
      if (result.home_score > result.away_score) {
        wins++
      } else if (result.home_score < result.away_score) {
        losses++
      } else {
        draws++
      }
    }
  })

  return { wins, losses, draws }
}