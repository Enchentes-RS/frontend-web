import { BadgeLocal } from './badge-local'
import { Card } from './card'

import type { Local } from '@/api/locals/types'
import { VolunteerActivism } from '@/icons/volunteer-activism'

interface CardLocalProps {
  local: Local
}

const CardLocal = ({ local }: CardLocalProps) => {
  return (
    <Card className="flex h-40 w-[278px] gap-1 p-4 pb-6 shadow-lg">
      <div className="flex h-10 w-10 items-center justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
          <VolunteerActivism className="h-4 w-4" />
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
