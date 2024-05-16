import { Helmet } from 'react-helmet-async'

export const InfoPage = () => {
  return (
    <article className=" p-10 xs:m-auto xs:max-w-[600px]">
      <Helmet title="Informações" />

      <h1 className="mb-2 text-3xl font-bold">Informações</h1>
      <p className="text-grey-500 mb-6 text-lg">
        Lista de informações importantes
      </p>
    </article>
  )
}
