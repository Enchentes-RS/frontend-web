import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <section className="flex h-full flex-col justify-between border-r-2 border-foreground/5 bg-muted p-10">
        <header className="flex items-center gap-3 text-foreground">
          <span className="text-xl font-semibold">Mapa Solidário</span>
        </header>
        <footer className="text-xs text-muted-foreground">
          Mapa Solidário - {new Date().getFullYear()}
        </footer>
      </section>
      <section className="flex items-center justify-center p-10">
        <Outlet />
      </section>
    </div>
  )
}
