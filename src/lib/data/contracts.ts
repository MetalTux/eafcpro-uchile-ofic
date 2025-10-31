import { prisma } from '../db'
import { ContractSchema, ContractUpdateSchema } from '../validations/schemas'
import type { contracts } from '@/generated/prisma/client'

export async function getContracts() {
  return await prisma.contracts.findMany({
    include: {
      players: true
    },
    orderBy: { start_date: 'desc' }
  })
}

export async function getContractById(id: number) {
  return await prisma.contracts.findUnique({
    where: { id },
    include: {
      players: true
    }
  })
}

export async function getContractsByPlayerId(playerId: number) {
  return await prisma.contracts.findMany({
    where: { player_id: playerId },
    orderBy: { start_date: 'desc' }
  })
}

export async function getActiveContracts() {
  const today = new Date()
  return await prisma.contracts.findMany({
    where: {
      start_date: { lte: today },
      end_date: { gte: today }
    },
    include: {
      players: true
    },
    orderBy: { end_date: 'asc' }
  })
}

export async function createContract(data: Omit<contracts, 'id' | 'created_at' | 'updated_at'>) {
  const validatedData = ContractSchema.parse(data)
  return await prisma.contracts.create({
    data: validatedData
  })
}

export async function updateContract(id: number, data: Partial<contracts>) {
  const validatedData = ContractUpdateSchema.parse(data)
  return await prisma.contracts.update({
    where: { id },
    data: validatedData
  })
}

export async function deleteContract(id: number) {
  return await prisma.contracts.delete({
    where: { id }
  })
}