import { Toast, ToastProvider } from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'
import { Error } from '@/icons/error'
import { cn } from '@/lib/utils'

export const Toaster = () => {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const showIcon = props.hasIcon && props.variant !== 'destructive'
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && (
                <div className="flex items-center gap-2.5">
                  {showIcon && (
                    <div className="text-green-700">
                      <Error className="size-5" />
                    </div>
                  )}
                  <Toast.Title className="text-lg font-bold">
                    {title}
                  </Toast.Title>
                </div>
              )}
              {description && (
                <Toast.Description
                  className={cn(
                    'text-base font-normal',
                    props.variant !== 'destructive' && 'opacity-60',
                  )}
                >
                  {description}
                </Toast.Description>
              )}
            </div>
            {action}
            <Toast.Close />
          </Toast>
        )
      })}
      <Toast.Viewport />
    </ToastProvider>
  )
}
