import { z } from 'zod'

export const donationStatusSchema = z.enum([
  'receiving',
  'not_receiving',
  'urgency',
  'no_information',
  'under_control',
  'by_scale',
])
