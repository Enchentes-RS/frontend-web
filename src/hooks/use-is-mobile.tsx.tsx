import { useEffect, useState } from 'react'

export const useIsMobile = () => {
  const SMALL_SCREEN = 640
  const [isMobile, setIsMobile] = useState(window.innerWidth <= SMALL_SCREEN)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= SMALL_SCREEN)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}
