'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface ScrollRevealProps {
  children?: ReactNode
}

export default function ScrollReveal({ children }: Partial<ScrollRevealProps>) {
  return (
    <AnimatedContent>
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </AnimatedContent>
  )
}
