import type * as React from 'react'

import { NavItem } from './navitem'

import menuLogo from '@/assets/menu-logo.svg'
import { AddLocation, Info, Map } from '@/icons'
import { cn } from '@/lib/utils'

const links = [
  {
    href: '/',
    label: 'Mapa',
    icon: Map,
  },
  {
    href: '/register',
    label: 'Cadastrar Local',
    icon: AddLocation,
  },
  {
    href: '/info',
    label: 'Informações',
    icon: Info,
  },
]

const Menu = ({ className, ...props }: React.ComponentProps<'nav'>) => {
  return (
    <nav
      className={cn(
        'border-gray-300 bg-green-50 px-3 md:border-r md:bg-white md:py-6',
        className,
      )}
      {...props}
    >
      <ul className="grid grid-cols-3 items-center justify-center gap-2 md:flex md:flex-col md:gap-4">
        <li className="hidden md:block">
          <img
            src={menuLogo}
            alt="Logotipo do Mapa Solidário contento um pin sobre o mapa do Rio Grande do Sul que está nas cores verde, vermelho e amarelo com a inscrição 'Mapa Solidário' embaixo."
            className="h-auto w-[88px]"
          />
        </li>
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href} className="py-4">
            <NavItem to={href} className="text-gray-500 transition">
              <div className="flex h-8 w-16 items-center justify-center rounded-full transition group-data-[active=true]:bg-green-950 group-data-[active=true]:text-white">
                <Icon className="size-6" />
              </div>
              <span className="text-center text-sm font-medium group-data-[active=true]:font-semibold group-data-[active=true]:text-green-950 md:text-base">
                {label}
              </span>
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Menu }
