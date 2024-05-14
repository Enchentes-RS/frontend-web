import { z } from 'zod'

export const volunteerStatusSchema = z.enum([
  'receiving',
  'not_receiving',
  'urgency',
  'no_information',
  'under_control',
  'by_scale',
])
