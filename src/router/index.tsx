import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/layouts/app'
import { InfoPage } from '@/pages/info'
import { MapPage } from '@/pages/map'
import { RegisterPage } from '@/pages/register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <MapPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/info', element: <InfoPage /> },
    ],
  },
])
