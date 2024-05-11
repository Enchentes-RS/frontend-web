import { Outlet } from 'react-router-dom'

import logo from '@/assets/logo.png'

export const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <section className="hidden h-full items-center justify-center border-r-2 border-foreground/5 bg-muted p-10 lg:flex">
        <img
          className="size-48"
          src={logo}
          alt="Mapa Solidário"
          width="345"
          height="329"
        />
      </section>
      <section className="flex items-center justify-center p-10">
        <Outlet />
      </section>
    </div>
  )
}
