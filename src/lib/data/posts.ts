import { prisma } from '../db'
import { PostSchema, PostUpdateSchema } from '../validations/schemas'
import type { posts } from '@/generated/prisma/client'

export async function getPosts() {
  return await prisma.posts.findMany({
    include: {
      comments: true
    },
    orderBy: { created_at: 'desc' }
  })
}

export async function getPostById(id: number) {
  return await prisma.posts.findUnique({
    where: { id },
    include: {
      comments: {
        where: { is_approved: true },
        orderBy: { created_at: 'desc' }
      }
    }
  })
}

export async function getPostBySlug(slug: string) {
  return await prisma.posts.findUnique({
    where: { slug },
    include: {
      comments: {
        where: { is_approved: true },
        orderBy: { created_at: 'desc' }
      }
    }
  })
}

export async function getPublishedPosts() {
  return await prisma.posts.findMany({
    where: { 
      is_published: true,
      published_at: { lte: new Date() }
    },
    orderBy: { published_at: 'desc' }
  })
}

export async function getRecentPosts(limit: number = 5) {
  return await prisma.posts.findMany({
    where: { 
      is_published: true,
      published_at: { lte: new Date() }
    },
    orderBy: { published_at: 'desc' },
    take: limit
  })
}

export async function createPost(data: Omit<posts, 'id' | 'created_at' | 'updated_at'>) {
  const validatedData = PostSchema.parse(data)
  return await prisma.posts.create({
    data: validatedData
  })
}

export async function updatePost(id: number, data: Partial<posts>) {
  const validatedData = PostUpdateSchema.parse(data)
  return await prisma.posts.update({
    where: { id },
    data: validatedData
  })
}

export async function publishPost(id: number) {
  return await prisma.posts.update({
    where: { id },
    data: { 
      is_published: true,
      published_at: new Date()
    }
  })
}

export async function unpublishPost(id: number) {
  return await prisma.posts.update({
    where: { id },
    data: { is_published: false }
  })
}

export async function deletePost(id: number) {
  return await prisma.posts.delete({
    where: { id }
  })
}