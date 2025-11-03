// src/lib/data/players.ts
import { prisma } from '../db'
import { PlayerSchema, PlayerUpdateSchema } from '../validations/schemas'
import type { players } from '@/generated/prisma/client'
import type { PlayerWithRelations } from '@/types/player'
//import type { PlayerWithRelations } from '@/types/player'

export async function getPlayers() {
  return await prisma.players.findMany({
    where: { is_active: true },
    include: {
      contracts: true,
      player_season_stats: true,
    },
    orderBy: { name: 'asc' }
  })
}

export async function getPlayerById(id: number) {
  return await prisma.players.findUnique({
    where: { id },
    include: {
      contracts: {
        orderBy: { start_date: 'desc' }
      },
      player_match_stats: {
        include: {
          matches: true
        },
        orderBy: { matches: { match_date: 'desc' } }
      },
      player_season_stats: {
        orderBy: { season: 'desc' }
      }
    }
  })
}

export async function getActivePlayers() {
  return await prisma.players.findMany({
    where: { is_active: true },
    orderBy: { name: 'asc' }
  })
}

export async function getPlayersByPosition(position: string) {
  return await prisma.players.findMany({
    where: { 
      position: { contains: position, mode: 'insensitive' },
      is_active: true 
    },
    orderBy: { name: 'asc' }
  })
}

export async function createPlayer(data: Omit<players, 'id' | 'created_at' | 'updated_at'>) {
  const validatedData = PlayerSchema.parse(data)
  return await prisma.players.create({
    data: validatedData
  })
}

export async function updatePlayer(id: number, data: Partial<players>) {
  const validatedData = PlayerUpdateSchema.parse(data)
  return await prisma.players.update({
    where: { id },
    data: validatedData
  })
}

export async function deactivatePlayer(id: number) {
  return await prisma.players.update({
    where: { id },
    data: { is_active: false }
  })
}

export async function deletePlayer(id: number) {
  return await prisma.players.delete({
    where: { id }
  })
}