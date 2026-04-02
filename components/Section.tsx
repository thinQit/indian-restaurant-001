'use client'

import type { ReactNode } from 'react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  children?: ReactNode
  className?: string
  muted?: boolean
}

export default function Section({ id = '', children, className = '', muted = false }: Partial<SectionProps>) {
  return (
    <AnimatedContent>
      <section id={id} className={cn('py-20 md:py-28', muted ? 'bg-muted/30' : 'bg-transparent', className)}>
        {children}
      </section>
    </AnimatedContent>
  )
}
