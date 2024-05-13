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
        'border-gray-300 bg-green-50 px-3 py-0 sm:border-r sm:bg-white sm:py-6',
        className,
      )}
      {...props}
    >
      <ul className="grid grid-cols-3 items-start gap-2 sm:flex sm:flex-col sm:items-center sm:gap-4">
        <li className="hidden sm:block">
          <img
            src={menuLogo}
            alt="Logotipo do Mapa Solidário contento um pin sobre o mapa do Rio Grande do Sul que está nas cores verde, vermelho e amarelo com a inscrição 'Mapa Solidário' embaixo."
            className="h-auto w-[88px]"
          />
        </li>
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href} className="w-full pt-4 sm:py-4">
            <NavItem
              to={href}
              className="group flex flex-col items-center justify-center gap-1 text-gray-500 transition sm:gap-2"
            >
              <div className="flex h-8 w-16 items-center justify-center rounded-full transition group-data-[active=true]:bg-green-950 group-data-[active=true]:text-white">
                <Icon className="size-6" />
              </div>
              <span className="text-center text-sm font-medium leading-4 group-data-[active=true]:font-semibold group-data-[active=true]:text-green-950 sm:text-base">
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
