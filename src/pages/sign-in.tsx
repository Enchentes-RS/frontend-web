import logo from '@/assets/logo.png'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'

export const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto grid w-full gap-8 xs:w-80">
        <div className="grid gap-2 text-center">
          <div className="mx-auto mb-8 block lg:hidden">
            <img
              className="h-auto w-full max-w-32"
              src={logo}
              alt="Mapa Solidário"
            />
          </div>
          <h1 className="text-3xl font-bold">Entrar</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Digite seu email para entrar com sua conta
          </p>
        </div>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="eu@exemplo.com.br"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}
