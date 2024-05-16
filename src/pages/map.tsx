// import { useLocalsQuery } from '@/api/locals'
import { Drawer } from '@/components/drawer'
import locals from '@/data/locals.json'
import { ArrowBack } from '@/icons/arrow-back'
import { Shelter } from '@/icons/shelter'

export const MapPage = () => {
  // const { data: locals } = useLocalsQuery()

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
              <div className="allign-items-center flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[125px] bg-[#FE375B]">
                  <Shelter />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-[#1D1B20]">
                    Estádio Olímpico Monumental
                  </h1>
                  <p className="text-[#49454F]">
                    Bairro Medianeira; entrada pela Azenha
                  </p>
                </div>
              </div>
              <div className="m-4 font-bold text-[#49454F]">
                Estão precisando de:
                <ul className="list-inside list-disc">
                  <li>Almoxarifado</li>
                </ul>
              </div>
            </Drawer.Description>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </>
  )
}
