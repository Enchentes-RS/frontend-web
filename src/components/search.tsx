import { useRef, useState } from 'react'

import type { Local } from '@/api/locals/types'
import { Button } from '@/components/ui/button'
import { useOnClickOutside } from '@/hooks/use-click-outside'
import { Filter, Search } from '@/icons'
import { cn } from '@/lib/utils'

export interface SearchFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  locals: Local[]
  onSelectLocal?: (local: Local) => void
  onFilter?: () => void
}

const SearchField = ({
  className,
  locals = [],
  onSelectLocal,
  onFilter,
  ...props
}: SearchFieldProps) => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Local[]>(locals)
  const [open, setOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearch(value)

    if (value) {
      const normalizedValue = value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
      const filtered = locals.filter((local) =>
        local.name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .includes(normalizedValue),
      )
      setResults(filtered)
    } else {
      setResults(locals)
    }
  }

  const handleOpenDropdown = () => {
    setOpen(true)
  }

  const handleSelectLocal = (local: Local) => {
    onSelectLocal?.(local)
    setSearch('')
    setResults(locals)
    setOpen(false)
  }

  useOnClickOutside(ref, () => {
    setSearch('')
    setResults(locals)
    setOpen(false)
  })

  return (
    <>
      <div
        className={cn(
          'flex h-14 w-full max-w-[695px] items-center gap-2 rounded-[28px] bg-white pl-6 pr-4 shadow transition-all duration-100',
          (search || open) && 'rounded-b-none',
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="relative flex h-full w-full items-center justify-between">
          <input
            type="text"
            placeholder="Procurar locais"
            className="h-full w-full appearance-none bg-transparent pr-8 text-base font-normal placeholder-gray-400 focus:outline-none"
            value={search}
            onChange={handleSearch}
            onFocus={handleOpenDropdown}
          />
          <Search className="pointer-events-none absolute right-0 size-6 text-gray-700" />
        </div>
        {onFilter && (
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={onFilter}
          >
            <Filter className="size-6 text-gray-700" />
          </Button>
        )}
      </div>
      {(search || open) && (
        <div
          className={cn(
            'relative max-w-[695px] rounded-b-[28px] border-t border-gray-400 bg-white py-2 pb-4 pr-1 text-base shadow',
            'overflow-hidden transition-all data-[state=closed]:animate-search-up data-[state=open]:animate-search-down',
          )}
          data-state={open ? 'open' : 'closed'}
        >
          {results.length > 0 ? (
            <ul className="max-h-[50dvh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400">
              {results.map((local) => (
                <li
                  key={local._id}
                  className="flex cursor-pointer flex-col px-6 py-2 transition hover:bg-gray-100"
                  onClick={() => handleSelectLocal(local)}
                >
                  <span className="text-sm font-semibold text-gray-800">
                    {local.name}
                  </span>
                  <span className="text-xs text-gray-600">{local.address}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-2 text-sm font-semibold">
              Nada foi encontrado
            </div>
          )}
        </div>
      )}
    </>
  )
}

SearchField.displayName = 'SearchField'

export { SearchField }
