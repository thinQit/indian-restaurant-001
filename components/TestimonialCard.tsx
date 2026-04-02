'use client'

import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface TestimonialCardProps {
  quote?: string
  name?: string
  title?: string
  rating?: number
}

export default function TestimonialCard({
  quote = 'Unforgettable dining experience.',
  name = 'Guest Name',
  title = 'Guest',
  rating = 5,
}: Partial<TestimonialCardProps>) {
  return (
    <AnimatedContent>
      <Card className="rounded-xl bg-card p-6">
        <div className="mb-3 flex gap-1">{Array.from({ length: rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
        <p className="text-muted-foreground">“{quote}”</p>
        <div className="mt-4">
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </Card>
    </AnimatedContent>
  )
}
