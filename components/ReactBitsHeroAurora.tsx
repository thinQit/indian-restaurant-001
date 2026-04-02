'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Button } from '@/components/ui/button'

interface ReactBitsHeroAuroraProps {
  imageSrc?: string
}

export default function ReactBitsHeroAurora({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577070/site-images/restaurant/10636732.jpg',
}: Partial<ReactBitsHeroAuroraProps>) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 80])

  return (
    <AnimatedContent>
      <section className="relative min-h-[88vh] overflow-hidden rounded-2xl" id="hero">
        <AuroraBackground className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <motion.div style={{ y }} className="absolute -right-10 bottom-0 w-[58%] max-md:relative max-md:w-full">
          <Image src={imageSrc} alt="Saffron Palace signature dish" width={1600} height={900} unoptimized className="h-[70vh] w-full rounded-tl-3xl object-cover opacity-90" />
        </motion.div>
        <div className="relative z-10 p-8 md:p-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">The Midnight Spice Gallery</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-tight md:text-7xl">Saffron Palace</h1>
          <p className="mt-5 max-w-xl text-muted-foreground">Authentic Indian cuisine elevated with royal Rajasthani heritage, fire-kissed tandoor artistry, and a cinematic fine-dining atmosphere.</p>
          <div className="mt-8 flex gap-4">
            <Button className="bg-primary text-primary-foreground">Book a Table</Button>
            <Button variant="outline">Explore Menu</Button>
          </div>
        </div>
      </section>
    </AnimatedContent>
  )
}
