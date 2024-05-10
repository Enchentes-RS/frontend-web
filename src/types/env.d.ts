/* eslint-disable prettier/prettier */
import type { EnvSchema } from '@/env'

type EnvSchemaType = z.infer<typeof envSchema>

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchema { }
  }
}
