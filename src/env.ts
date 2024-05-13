import type { z } from 'zod'

import { envSchema } from '@/schemas/env'

const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error('Invalid environment variables.', parsedEnv.error.format())
  throw new Error('Invalid environment variables.')
}

export const env = parsedEnv.data

export type Env = z.infer<typeof envSchema>
