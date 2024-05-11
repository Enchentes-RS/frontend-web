import { cn } from '@/lib/utils'

const Header = ({ className, ...props }: React.ComponentProps<'header'>) => {
  return (
    <header
      className={cn(
        'flex h-16 items-center border-b bg-muted-foreground/5 px-8',
        className,
      )}
      {...props}
    >
      Header
    </header>
  )
}

export { Header }
