'use client'

import type { ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface ParallaxImageProps {
  children?: ReactNode
  strength?: number
}

export default function ParallaxImage({ children, strength = 70 }: Partial<ParallaxImageProps>) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, strength])

  return (
    <AnimatedContent>
      <motion.div style={{ y }}>{children}</motion.div>
    </AnimatedContent>
  )
}
