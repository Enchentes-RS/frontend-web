import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-lg px-4 py-1.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2',
  {
    variants: {
      variant: {
        receiving: 'bg-green-200 text-green-900',
        not_receiving: 'bg-green-200 text-green-900',
        urgency: 'bg-red-200 text-red-700',
      },
    },
    defaultVariants: {
      variant: 'receiving',
    },
  },
)

const variantLabels = {
  receiving: 'Recebendo',
  not_receiving: 'Não recebendo',
  urgency: 'Urgente',
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const BadgeLocal = ({ className, variant, ...props }: BadgeProps) => {
  const label = variant ?? 'receiving'
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {variantLabels[label]}
    </div>
  )
}

export { BadgeLocal, badgeVariants }
