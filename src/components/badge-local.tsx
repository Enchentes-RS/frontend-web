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
        no_information: 'bg-white text-zinc-700',
        under_control: 'bg-green-200 text-green-700',
        by_scale: 'bg-blue-200 text-blue-700',
      },
    },
    defaultVariants: {
      variant: 'no_information',
    },
  },
)

const variantLabels = {
  receiving: 'Recebendo',
  not_receiving: 'Não recebendo',
  urgency: 'Urgente',
  no_information: 'Sem informações',
  under_control: 'Sob controle',
  by_scale: 'Por escala',
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const BadgeLocal = ({ className, variant, ...props }: BadgeProps) => {
  const label = variant ?? 'no_information'
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {variantLabels[label]}
    </div>
  )
}

export { BadgeLocal, badgeVariants }
