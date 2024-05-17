// import { useLocalsQuery } from '@/api/locals'
import { Drawer } from '@/components/drawer'
import locals from '@/data/locals.json'
import {
  Shelter,
  ArrowBack,
  Pet,
  TrashBags,
  Medicines,
  HygieneItems,
  GeriatricDiaper,
  BabyDiaper,
  Bed,
  Food,
  Volunteer,
} from '@/icons'

const items = [
  {
    title: 'Estádio Olímpico Monumental',
    description: 'Bairro Medianeira; entrada pela Azenha',
    icon: <Shelter />,
    needs: [
      {
        type: 'Volunteer',
        text: 'Voluntários',
      },
      {
        type: 'Food',
        text: 'Alimentos prontos e não perecíveis',
      },
      {
        type: 'Food',
        text: 'Talheres descartáveis',
      },
      {
        type: 'Bed',
        text: 'Colchões e cobertores',
      },
      {
        type: 'BabyDiaper',
        text: 'Fralda de bebês',
      },
      {
        type: 'GeriatricDiaper',
        text: 'Fralda de geriátrica',
      },
      {
        type: 'HygieneItems',
        text: 'Itens de higiene',
      },
      {
        type: 'Medicines',
        text: 'Medicamentos',
      },
      {
        type: 'TrashBags',
        text: 'Sacos de lixo',
      },
    ],
  },
]

const iconMap = {
  Pet: <Pet />,
  TrashBags: <TrashBags />,
  Medicines: <Medicines />,
  HygieneItems: <HygieneItems />,
  GeriatricDiaper: <GeriatricDiaper />,
  BabyDiaper: <BabyDiaper />,
  Bed: <Bed />,
  Food: <Food />,
  Volunteer: <Volunteer />,
}

export const MapPage = () => {
  // eslint-disable-next-line no-console
  console.log(locals)

  return (
    <>
      <h1 className="text-3xl font-bold">Mapa</h1>
      <Drawer direction="right">
        <Drawer.Trigger>Abrir</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header className="flex">
            <Drawer.Close>
              <span>
                <ArrowBack />
              </span>
            </Drawer.Close>
            <Drawer.Title className="font-normal text-[#49454F]">
              Detalhes do local
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Footer>
            <Drawer.Description>
              {items.map((item, index) => (
                <div key={index} className="align-items-center mb-4 flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[125px] bg-[#FE375B]">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-[#1D1B20]">
                      {item.title}
                    </h1>
                    <p className="text-[#49454F]">{item.description}</p>
                    <div className="mt-2 font-bold text-[#49454F]">
                      Estão precisando de:
                      <ul className="mt-4 list-inside list-disc flex-col">
                        {item.needs.map((need, index) => (
                          <li
                            key={index}
                            className="mb-4 flex items-center font-normal"
                          >
                            {iconMap[need.type]}{' '}
                            <span className="ml-4">{need.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Drawer.Description>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </>
  )
}
