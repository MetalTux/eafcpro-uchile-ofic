import { prisma } from '../db'
import { CommentSchema, CommentUpdateSchema } from '../validations/schemas'
import type { comments } from '@/generated/prisma/client'

export async function getComments() {
  return await prisma.comments.findMany({
    include: {
      posts: true,
      matches: true
    },
    orderBy: { created_at: 'desc' }
  })
}

export async function getCommentById(id: number) {
  return await prisma.comments.findUnique({
    where: { id },
    include: {
      posts: true,
      matches: true
    }
  })
}

export async function getCommentsByPostId(postId: number) {
  return await prisma.comments.findMany({
    where: { 
      post_id: postId,
      is_approved: true 
    },
    orderBy: { created_at: 'desc' }
  })
}

export async function getCommentsByMatchId(matchId: number) {
  return await prisma.comments.findMany({
    where: { 
      match_id: matchId,
      is_approved: true 
    },
    orderBy: { created_at: 'desc' }
  })
}

export async function getUnapprovedComments() {
  return await prisma.comments.findMany({
    where: { is_approved: false },
    orderBy: { created_at: 'desc' }
  })
}

export async function createComment(data: Omit<comments, 'id' | 'created_at'>) {
  const validatedData = CommentSchema.parse(data)
  return await prisma.comments.create({
    data: validatedData
  })
}

export async function updateComment(id: number, data: Partial<comments>) {
  const validatedData = CommentUpdateSchema.parse(data)
  return await prisma.comments.update({
    where: { id },
    data: validatedData
  })
}

export async function approveComment(id: number) {
  return await prisma.comments.update({
    where: { id },
    data: { is_approved: true }
  })
}

export async function deleteComment(id: number) {
  return await prisma.comments.delete({
    where: { id }
  })
}

export async function getCommentCounts() {
  const [total, approved, pending] = await Promise.all([
    prisma.comments.count(),
    prisma.comments.count({ where: { is_approved: true } }),
    prisma.comments.count({ where: { is_approved: false } })
  ])

  return { total, approved, pending }
}