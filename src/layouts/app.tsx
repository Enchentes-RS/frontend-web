import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col px-8 pb-12 pt-6">
        <Outlet />
      </main>
    </>
  )
}
