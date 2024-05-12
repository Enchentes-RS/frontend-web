import type * as React from 'react'

import { cn } from '@/lib/utils'

const links = [
  {
    href: '/',
    label: 'Mapa',
  },
  {
    href: '/register',
    label: 'Cadastrar Local',
  },
  {
    href: '/info',
    label: 'Informações',
  },
]

const Menu = ({ className, ...props }: React.ComponentProps<'nav'>) => {
  return (
    <nav className={cn('bg-muted', className)} {...props}>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Menu }
