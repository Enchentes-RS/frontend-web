import { useQuery } from '@tanstack/react-query'

import type { LocalsResponse } from './types'

import { api } from '@/lib/axios'

// const endpoints = {
//   locals: '/locals',
// }

const localsKeys = {
  all: ['locals'] as const,
  lists: () => [...localsKeys.all, 'list'] as const,
  list: (filters: string) => [...localsKeys.lists(), { filters }] as const,
  details: () => [...localsKeys.all, 'detail'] as const,
  detail: (id: number) => [...localsKeys.details(), id] as const,
}

const localsApi = {
  useLocalsQuery: () =>
    useQuery({
      queryKey: localsKeys.all,
      queryFn: async () => {
        const response = await api.get<{ data: LocalsResponse }>(
          'https://api.mapasolidario.com.br/locals',
        )
        // console.log(response.data)
        return response.data.data
      },
    }),
}

export const { useLocalsQuery } = localsApi
