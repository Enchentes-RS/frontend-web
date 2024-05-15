import { useKeenSlider } from 'keen-slider/react'

import { CardLocal } from './card-local'

import 'keen-slider/keen-slider.min.css'

import type { Local } from '@/api/locals/types'
import { cn } from '@/lib/utils'

interface CardLocalProps extends React.HTMLAttributes<HTMLDivElement> {
  locals: Local[]
}

const CardSlider = ({ locals, className, ...props }: CardLocalProps) => {
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
        <CardLocal
          key={local._id}
          local={local}
          className="keen-slider__slide first:ml-4 last:mr-4 sm:first:ml-24"
        />
      ))}
    </div>
  )
}

export { CardSlider }
