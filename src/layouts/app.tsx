import { Outlet } from 'react-router-dom'

import { Menu } from '@/components/menu'

export const AppLayout = () => {
  return (
    <>
      <main className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_96px] sm:grid-cols-[112px_1fr] sm:grid-rows-1">
        <Menu className="order-2 sm:order-1" />
        <section className="order-1 sm:order-2">
          <Outlet />
        </section>
      </main>
    </>
  )
}
