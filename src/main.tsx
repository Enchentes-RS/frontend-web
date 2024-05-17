import '@/styles/globals.css'

import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { Toaster } from './components/ui/toaster'

import { queryClient } from '@/lib/react-query'
import { router } from '@/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Mapa Solidário"
        defaultTitle="Mapa Solidário"
        htmlAttributes={{ lang: 'pt-BR' }}
      />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
    <Toaster />
  </React.StrictMode>,
)
