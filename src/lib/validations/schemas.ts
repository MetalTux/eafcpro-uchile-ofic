import { z } from 'zod'

// Esquema para Jugadores
export const PlayerSchema = z.object({
  name: z.string().min(1, "Nombre es requerido"),
  position: z.string().min(1, "Posición es requerida"),
  jersey_number: z.number().int().min(1).max(99).optional().nullable(),
  nationality: z.string().optional().nullable(),
  birth_date: z.date().optional().nullable(),
  height_cm: z.number().int().min(150).max(220).optional().nullable(),
  weight_kg: z.number().int().min(50).max(120).optional().nullable(),
  photo_url: z.string().url().optional().nullable(),
  bio: z.string().optional().nullable(),
  is_active: z.boolean().optional().default(true),
})

// Esquema para Partidos
export const MatchSchema = z.object({
  home_team: z.string().min(1, "Equipo local es requerido"),
  away_team: z.string().min(1, "Equipo visitante es requerido"),
  match_date: z.date(),
  venue: z.string().optional().nullable(),
  competition: z.string().optional().nullable(),
  match_day: z.number().int().optional().nullable(),
  status: z.enum(['scheduled', 'live', 'finished', 'cancelled']).default('scheduled'),
})

// Esquema para Resultados de Partidos
export const MatchResultSchema = z.object({
  match_id: z.number().int(),
  home_score: z.number().int().optional().nullable(),
  away_score: z.number().int().optional().nullable(),
  half_time_home_score: z.number().int().optional().nullable(),
  half_time_away_score: z.number().int().optional().nullable(),
  match_report: z.string().optional().nullable(),
  attendance: z.number().int().optional().nullable(),
})

// Esquema para Contratos
export const ContractSchema = z.object({
  player_id: z.number().int(),
  salary: z.number().positive().optional().nullable(),
  currency: z.string().length(3).default('EUR'),
  start_date: z.date(),
  end_date: z.date(),
  contract_type: z.string().optional().nullable(),
  clauses: z.string().optional().nullable(),
})

// Esquema para Estadísticas de Jugador por Partido
export const PlayerMatchStatsSchema = z.object({
  player_id: z.number().int(),
  match_id: z.number().int(),
  minutes_played: z.number().int().min(0).default(0),
  goals: z.number().int().min(0).default(0),
  assists: z.number().int().min(0).default(0),
  yellow_cards: z.number().int().min(0).default(0),
  red_cards: z.number().int().min(0).default(0),
  shots: z.number().int().min(0).default(0),
  shots_on_target: z.number().int().min(0).default(0),
  passes: z.number().int().min(0).default(0),
  pass_accuracy: z.number().min(0).max(100).default(0),
  tackles: z.number().int().min(0).default(0),
  interceptions: z.number().int().min(0).default(0),
  saves: z.number().int().min(0).default(0),
  pro_clubs_rating: z.number().min(0).max(10).default(0),
})

// Esquema para Estadísticas de Jugador por Temporada
export const PlayerSeasonStatsSchema = z.object({
  player_id: z.number().int(),
  season: z.string().length(9), // Formato: 2023-2024
  matches_played: z.number().int().min(0).default(0),
  goals: z.number().int().min(0).default(0),
  assists: z.number().int().min(0).default(0),
  yellow_cards: z.number().int().min(0).default(0),
  red_cards: z.number().int().min(0).default(0),
  avg_rating: z.number().min(0).max(10).default(0),
  avg_minutes: z.number().min(0).default(0),
})

// Esquema para Comentarios
export const CommentSchema = z.object({
  post_id: z.number().int().optional().nullable(),
  match_id: z.number().int().optional().nullable(),
  user_name: z.string().min(1, "Nombre de usuario es requerido"),
  user_email: z.string().email().optional().nullable(),
  content: z.string().min(1, "Contenido es requerido"),
  is_approved: z.boolean().default(false),
})

// Esquema para Publicaciones (Blog)
export const PostSchema = z.object({
  title: z.string().min(1, "Título es requerido"),
  slug: z.string().min(1, "Slug es requerido"),
  excerpt: z.string().optional().nullable(),
  content: z.string().min(1, "Contenido es requerido"),
  cover_image: z.string().url().optional().nullable(),
  author_id: z.number().int().optional().nullable(),
  is_published: z.boolean().default(false),
  published_at: z.date().optional().nullable(),
})

// Esquema para Usuarios
export const UserSchema = z.object({
  name: z.string().min(1).optional().nullable(),
  email: z.string().email(),
  image: z.string().url().optional().nullable(),
  role: z.enum(['user', 'admin']).default('user'),
})

// Esquemas para actualizaciones (parciales)
export const PlayerUpdateSchema = PlayerSchema.partial()
export const MatchUpdateSchema = MatchSchema.partial()
export const ContractUpdateSchema = ContractSchema.partial()
export const MatchResultUpdateSchema = MatchResultSchema.partial()
export const PlayerMatchStatsUpdateSchema = PlayerMatchStatsSchema.partial()
export const PlayerSeasonStatsUpdateSchema = PlayerSeasonStatsSchema.partial()
export const CommentUpdateSchema = CommentSchema.partial()
export const PostUpdateSchema = PostSchema.partial()
export const UserUpdateSchema = UserSchema.partial()