'use client'

import { AnimatedContent } from '@/components/ui/effects/animated-content'

export default function AccentDivider() {
  return (
    <AnimatedContent>
      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent shadow-[0_0_30px_rgba(221,161,94,0.35)]" />
    </AnimatedContent>
  )
}
