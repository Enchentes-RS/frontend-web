import type { z } from 'zod'

import type { volunteerStatusSchema } from '@/schemas/volunteer'

export type Donation = z.infer<typeof volunteerStatusSchema>
