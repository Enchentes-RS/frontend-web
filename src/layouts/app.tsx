import { Outlet } from 'react-router-dom'

import { Menu } from '@/components/menu'

export const AppLayout = () => {
  return (
    <main className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_96px] xs:grid-cols-[112px_1fr] xs:grid-rows-1">
      <Menu className="order-2 xs:order-1" />
      <section className="order-1 xs:order-2">
        <Outlet />
      </section>
    </main>
  )
}
