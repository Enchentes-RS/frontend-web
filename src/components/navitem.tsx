import type { LinkProps } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

export const NavItem = ({ className, ...props }: LinkProps) => {
  const { pathname } = useLocation()

  return (
    <Link
      className={cn(
        'group flex flex-col items-center justify-center gap-2',
        className,
      )}
      data-active={pathname === props.to}
      {...props}
    />
  )
}
