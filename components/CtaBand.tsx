'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Button } from '@/components/ui/button'

export default function CtaBand() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1200], [0, -30])

  return (
    <AnimatedContent>
      <section className="relative overflow-hidden rounded-2xl bg-card px-6 py-14">
        <motion.div style={{ y }} className="absolute inset-0 opacity-30 [background-image:linear-gradient(120deg,rgba(221,161,94,0.22),transparent_40%,rgba(114,47,55,0.25))]" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h3 className="max-w-xl font-serif text-4xl">Reserve a royal evening at Saffron Palace.</h3>
          <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">Reserve Now</Button>
        </div>
      </section>
    </AnimatedContent>
  )
}
