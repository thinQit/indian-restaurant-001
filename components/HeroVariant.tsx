'use client'

import type { ReactNode } from 'react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { cn } from '@/lib/utils'

interface HeroVariantProps {
  title?: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export default function HeroVariant({
  title = 'Our Story',
  subtitle = 'Crafted in tradition, plated with modern elegance.',
  children,
  className = '',
}: Partial<HeroVariantProps>) {
  return (
    <AnimatedContent>
      <section className={cn('relative overflow-hidden rounded-2xl bg-card px-6 py-20 md:px-10', className)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(221,161,94,0.15),transparent_45%)]" />
        <div className="relative">
          <h2 className="font-serif text-4xl md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </section>
    </AnimatedContent>
  )
}
