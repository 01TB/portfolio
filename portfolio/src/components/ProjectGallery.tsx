'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  images: string[]
  alt: string
  sizes: string
  labels: { previous: string; next: string; goTo: string }
}

export default function ProjectGallery({ images, alt, sizes, labels }: Props) {
  const [index, setIndex] = useState(0)
  const count = images.length
  const go = (next: number) => setIndex((next + count) % count)

  return (
    <div className="group/gallery relative h-full w-full">
      <Image
        key={images[index]}
        src={images[index]}
        alt={count > 1 ? `${alt} (${index + 1}/${count})` : alt}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition hover:bg-white focus-visible:opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100"
            aria-label={labels.previous}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition hover:bg-white focus-visible:opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100"
            aria-label={labels.next}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-900/50 px-2 py-1.5 backdrop-blur">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                aria-label={`${labels.goTo} ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
