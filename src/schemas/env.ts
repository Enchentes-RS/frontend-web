import { z } from 'zod'

export const envSchema = z.object({
  VITE_API_URL: z.string(),
  MODE: z.enum(['production', 'development', 'test']),
})
