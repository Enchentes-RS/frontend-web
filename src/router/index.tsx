import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/layouts/app'
import { AuthLayout } from '@/layouts/auth'
import { HomePage } from '@/pages/home'
import { SignInPage } from '@/pages/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignInPage /> }],
  },
])
