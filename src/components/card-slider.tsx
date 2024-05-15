import { useKeenSlider } from 'keen-slider/react'

import { CardLocal } from './card-local'

import 'keen-slider/keen-slider.min.css'

import type { LocalsResponse } from '@/api/locals/types'

interface CardLocalProps {
  locals: LocalsResponse
}

const CardSlider = ({ locals }: CardLocalProps) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 12,
    },
    breakpoints: {
      '(max-width: 768px)': {
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
      className="keen-slider ml-4 flex h-48 max-w-[1142px] overflow-hidden xl:ml-0"
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
