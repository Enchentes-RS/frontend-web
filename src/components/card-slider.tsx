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
      perView: 4,
      spacing: 12,
    },
    breakpoints: {
      '(max-width: 1280px)': {
        slides: {
          perView: 3,
          spacing: 8,
        },
      },
      '(max-width: 980px)': {
        slides: {
          perView: 'auto',
          spacing: 8,
        },
      },
      '(max-width: 500px)': {
        slides: {
          origin: 'center',
          perView: 'auto',
          spacing: 6,
        },
      },
    },
  })
  return (
    <div
      ref={sliderRef}
      className={cn(
        'keen-slider flex h-48 max-w-[1142px] overflow-hidden',
        className,
      )}
      {...props}
    >
      {locals.map((local) => (
        <CardLocal
          key={local._id}
          local={local}
          className="keen-slider__slide"
        />
      ))}
    </div>
  )
}

export { CardSlider }
