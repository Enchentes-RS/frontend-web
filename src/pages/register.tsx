import { Helmet } from 'react-helmet-async'

import { RegisterForm } from '@/components/register-form'

export const RegisterPage = () => {
  return (
    <>
      <Helmet title="Cadastrar Local" />
      <div className="mx-auto flex w-full flex-col gap-8 px-4 pb-5 pt-12 sm:max-w-xl md:px-0">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Cadastrar Local</h1>
          <p className="text-base font-normal text-zinc-600">
            Especifique abaixo o tipo do seu local
          </p>
          <p className="text-sm font-normal text-red-500">
            * Indica pergunta obrigatória
          </p>
        </header>
        <RegisterForm />
      </div>
    </>
  )
}
