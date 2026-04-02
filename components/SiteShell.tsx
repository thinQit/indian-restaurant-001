'use client'

import type { ReactNode } from 'react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { cn } from '@/lib/utils'

interface SiteShellProps {
  children: ReactNode
  className?: string
}

export default function SiteShell({ children, className = '' }: Partial<SiteShellProps>) {
  return (
    <div className={cn('relative min-h-screen bg-background text-foreground', className)}>
      {/* Remove duplicate <ScrollProgressBar /> (global bar is in layout.tsx) */}
      <div className="pointer-events-none fixed inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(221,161,94,0.25)_1px,transparent_0)] [background-size:22px_22px]" />
      <AnimatedContent>
        <div className="mx-auto w-full max-w-7xl px-4 pb-20 md:px-6 lg:px-8">{children}</div>
      </AnimatedContent>
    </div>
  )
}
