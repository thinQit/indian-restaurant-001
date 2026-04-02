'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import LightboxModal from '@/components/LightboxModal'

interface GalleryMasonryProps {
  images?: string[]
}

export default function GalleryMasonry({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577086/site-images/restaurant/10148453.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577054/site-images/restaurant/10207592.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577102/site-images/restaurant/12387873.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577071/site-images/restaurant/10135116.jpg',
  ],
}: Partial<GalleryMasonryProps>) {
  const [index, setIndex] = useState<number | null>(null)

  return (
    <AnimatedContent>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.map((src, i) => (
          <button key={src + i} className={i % 3 === 0 ? 'md:col-span-2' : ''} onClick={() => setIndex(i)}>
            <Image src={src} alt="Saffron Palace gallery" width={1200} height={900} unoptimized className="h-full w-full rounded-xl object-cover" />
          </button>
        ))}
      </div>
      <LightboxModal images={images} initialIndex={index ?? 0} open={index !== null} onClose={() => setIndex(null)} />
    </AnimatedContent>
  )
}
