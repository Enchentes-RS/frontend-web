import { useLocalsQuery } from '@/api/locals'

export const MapPage = () => {
  const { data: locals } = useLocalsQuery()

  // eslint-disable-next-line no-console
  console.log(locals)

  return (
    <>
      <h1 className="text-3xl font-bold">Mapa</h1>
    </>
  )
}
