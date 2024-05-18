import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/lib/utils'

const Root = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Root.displayName = 'Drawer'

const Trigger = DrawerPrimitive.Trigger

const Portal = DrawerPrimitive.Portal

const Close = DrawerPrimitive.Close

const Overlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/10', className)}
    {...props}
  />
))
Overlay.displayName = DrawerPrimitive.Overlay.displayName

const Content = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <Portal>
    <Overlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-y-0 right-0 z-50 flex w-full max-w-[482px] flex-col border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950',
        className,
      )}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </Portal>
))
Content.displayName = 'DrawerContent'

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'align-items-center mt-6 flex justify-start gap-4',
      className,
    )}
    {...props}
  />
)
Header.displayName = 'DrawerHeader'

const Footer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-2 p-4', className)} {...props} />
)
Footer.displayName = 'DrawerFooter'

const Title = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
))
Title.displayName = DrawerPrimitive.Title.displayName

const Description = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('text-sm text-gray-500 dark:text-gray-400', className)}
    {...props}
  />
))
Description.displayName = DrawerPrimitive.Description.displayName

export const Drawer = Object.assign(Root, {
  Trigger,
  Content,
  Header,
  Footer,
  Title,
  Description,
  Close,
})
