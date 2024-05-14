import type { z } from 'zod'

import type { donationStatusSchema } from '@/schemas/donation'

export type Donation = z.infer<typeof donationStatusSchema>
