'use client'

import { Card } from '@/components/ui/card'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface MenuItemCardProps {
  name?: string
  description?: string
  price?: string
  spiceLevel?: string
  tags?: string[]
}

export default function MenuItemCard({
  name = 'Laal Maas',
  description = 'Slow-braised mutton in Mathania chili gravy, smoked ghee finish.',
  price = '₹1,250',
  spiceLevel = 'Hot',
  tags = ['Gluten Free', 'Chef Special'],
}: Partial<MenuItemCardProps>) {
  return (
    <AnimatedContent>
      <Card className="rounded-xl bg-card p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-2xl">{name}</h3>
          <span className="text-primary">{price}</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs text-primary">{spiceLevel}</span>
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{tag}</span>
          ))}
        </div>
      </Card>
    </AnimatedContent>
  )
}
