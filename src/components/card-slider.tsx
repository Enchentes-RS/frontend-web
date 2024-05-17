import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import type { Local } from '@/api/locals/types'
import { Card } from '@/components/card'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  locals: Local[]
}

const CardSlider = ({ locals, className, ...props }: CardProps) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 16,
    },
  })

  return (
    <div
      ref={sliderRef}
      className={cn('keen-slider flex h-48', className)}
      {...props}
    >
      {locals.map((local) => (
        <Card
          key={local._id}
          local={local}
          className="keen-slider__slide first:ml-4 last:mr-4 sm:first:ml-24"
        />
      ))}
    </div>
  )
}

export { CardSlider }
