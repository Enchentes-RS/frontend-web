import type * as React from 'react'

import type { Local } from '@/api/locals/types'
import { Badge } from '@/components/ui/badge'
import { Card as CardUi } from '@/components/ui/card'
import { Volunteers } from '@/icons'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  local: Local
  isPopup?: boolean
}

const Card = ({ local, className, isPopup }: CardProps) => {
  return (
    <CardUi
      className={cn(
        'flex gap-1',
        isPopup
          ? 'h-auto w-56 border-none p-0 shadow-none'
          : 'h-40 min-w-[278px] max-w-[278px] p-4 pb-6',
        className,
      )}
    >
      <div className="flex size-10 items-center justify-center">
        <div className="flex size-8 items-center justify-center rounded-full bg-volunteer text-white">
          <Volunteers className="size-4" />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <CardUi.Header className="space-y-1 p-0">
          <CardUi.Title className="text-xs font-semibold">
            {local.name}
          </CardUi.Title>
          <CardUi.Description className="text-2xs font-normal">
            {local.address}
          </CardUi.Description>
        </CardUi.Header>
        {!isPopup && (
          <CardUi.Footer className="flex w-full gap-4 p-0">
            <div className="space-y-2">
              <h3 className="text-xs font-medium text-zinc-600">Doações</h3>
              <Badge variant={local.donations} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-medium text-zinc-600">Voluntários</h3>
              <Badge variant={local.volunteers} />
            </div>
          </CardUi.Footer>
        )}
      </div>
    </CardUi>
  )
}

export { Card }
