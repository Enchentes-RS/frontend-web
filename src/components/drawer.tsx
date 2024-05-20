import { Drawer as DrawerUi } from '@/components/ui/drawer'
import {
  ArrowBack,
  BabyDiaper,
  Bed,
  Food,
  GeriatricDiaper,
  HygieneItems,
  Medicine,
  People,
  Pet,
  Shelter,
  TrashBags,
  Volunteers,
} from '@/icons'

interface ItemsProps {
  title: string
  description: string
  icon: string
  needs: {
    type: string
    text: string
  }[]
}

interface DrawerProps {
  children?: React.ReactNode
  item: ItemsProps
  open?: boolean
  onOpenDrawer?: (open: boolean) => void
}

export const Drawer = ({
  children,
  item,
  open,
  onOpenDrawer,
  ...props
}: DrawerProps) => {
  const iconMap = {
    pet: <Pet className="size-6" />,
    trashBags: <TrashBags className="size-6" />,
    medicines: <Medicine className="size-6" />,
    hygieneItems: <HygieneItems className="size-6" />,
    geriatricDiaper: <GeriatricDiaper className="size-6" />,
    babyDiaper: <BabyDiaper className="size-6" />,
    bed: <Bed className="size-6" />,
    food: <Food className="size-6" />,
    people: <People className="size-6" />,
    volunteers: <Volunteers className="size-8" />,
    shelter: <Shelter className="size-8" />,
  }

  return (
    <DrawerUi
      direction="right"
      open={open}
      onOpenChange={onOpenDrawer}
      {...props}
    >
      <DrawerUi.Trigger>{children}</DrawerUi.Trigger>
      <DrawerUi.Content className="px-8 py-4">
        <DrawerUi.Header className="flex items-center">
          <DrawerUi.Close>
            <ArrowBack className="size-6" />
          </DrawerUi.Close>
          <DrawerUi.Title className="text-2xl font-normal text-gray-900">
            Detalhes do local
          </DrawerUi.Title>
        </DrawerUi.Header>
        <div className="my-8 flex gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-volunteer text-white">
            {iconMap[item.icon as keyof typeof iconMap]}
          </div>
          <div>
            <div className="text-2xl font-semibold text-gray-900">
              {item.title}
            </div>
            <p className="text-gray-900">{item.description}</p>
          </div>
        </div>
        <ul className="flex flex-col gap-6">
          <li className="font-semibold text-gray-900">Estão precisando de:</li>
          {item.needs.map((need, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="text-green-900">
                {iconMap[need.type as keyof typeof iconMap]}
              </div>
              <span>{need.text}</span>
            </li>
          ))}
        </ul>
      </DrawerUi.Content>
    </DrawerUi>
  )
}
