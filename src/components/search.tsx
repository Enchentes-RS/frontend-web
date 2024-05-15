import * as React from 'react'

import { Button } from '@/components/button'
import { Filter, Search } from '@/icons'
import { cn } from '@/lib/utils'

export interface SearchFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onFilter: () => void
}

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ className, onFilter, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex h-14 max-w-[695px] items-center gap-2 rounded-full bg-white pl-6 pr-4 text-base shadow-md ring-offset-white transition placeholder:text-base placeholder:text-gray-500 focus-within:outline-none focus-within:ring-4 focus-within:ring-gray-950/30 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ',
          className,
        )}
      >
        <div className="relative flex h-full w-full items-center justify-between">
          <input
            type="text"
            className="h-full w-full appearance-none bg-transparent pr-8 text-base font-normal placeholder-gray-400 focus:outline-none"
            ref={ref}
            {...props}
          />
          <Search className="pointer-events-none absolute right-0 size-6 text-gray-700" />
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full"
          onClick={onFilter}
        >
          <Filter className="size-6 text-gray-700" />
        </Button>
      </div>
    )
  },
)
SearchField.displayName = 'SearchField'

export { SearchField }
