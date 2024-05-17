import type { z } from 'zod'

import type { registerFormSchema } from '@/schemas/register-form'

export type RegisterFormValues = z.infer<typeof registerFormSchema>
