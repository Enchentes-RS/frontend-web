import type * as React from 'react'

import { BadgeLocal } from './badge-local'
import { Card } from './card'

import type { Local } from '@/api/locals/types'
import { VolunteerActivism } from '@/icons/volunteer-activism'
import { cn } from '@/lib/utils'

interface CardLocalProps extends React.HTMLAttributes<HTMLDivElement> {
  local: Local
}

const CardLocal = ({ local, className }: CardLocalProps) => {
  return (
    <Card
      className={cn(
        'flex h-40 min-w-[278px] max-w-[278px] gap-1 p-4 pb-6',
        className,
      )}
    >
      <div className="flex size-10 items-center justify-center">
        <div className="flex size-8 items-center justify-center rounded-full bg-pink-600 text-white">
          <VolunteerActivism className="size-4" />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Card.Header className="space-y-1 p-0">
          <Card.Title className="text-xs font-semibold">
            {local.name}
          </Card.Title>
          <Card.Description className="text-2xs font-normal">
            {local.address}
          </Card.Description>
        </Card.Header>
        <Card.Footer className="flex w-full gap-4 p-0">
          <div className="space-y-2">
            <h3 className="text-xs font-medium text-zinc-600">Doações</h3>
            <BadgeLocal variant={local.donations} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-medium text-zinc-600">Voluntários</h3>
            <BadgeLocal variant={local.volunteers} />
          </div>
        </Card.Footer>
      </div>
    </Card>
  )
}

export { CardLocal }
