import type { z } from 'zod'

import { envSchema } from '@/schemas/env'

export const env = envSchema.parse(import.meta.env)

export type Env = z.infer<typeof envSchema>
