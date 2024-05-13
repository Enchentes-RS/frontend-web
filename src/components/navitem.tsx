import type { LinkProps } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'

export const NavItem = (props: LinkProps) => {
  const { pathname } = useLocation()

  return <Link data-active={pathname === props.to} {...props} />
}
