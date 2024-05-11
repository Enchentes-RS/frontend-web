import { Outlet } from 'react-router-dom'

import logo from '@/assets/logo.png'

export const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <section className="hidden h-full items-center justify-center border-r-2 border-foreground/5 bg-muted p-10 lg:flex">
        <img
          className="h-auto w-full max-w-56"
          src={logo}
          alt="Mapa Solidário"
        />
      </section>
      <section className="flex h-screen items-center justify-center p-4 sm:p-10">
        <Outlet />
      </section>
    </div>
  )
}
