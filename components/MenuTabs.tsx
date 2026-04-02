'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { cn } from '@/lib/utils'

interface MenuTabsProps {
  categories?: string[]
  onChange?: (category: string) => void
}

export default function MenuTabs({
  categories = ['Tandoori', 'Biryani', 'Curries', 'Thali'],
  onChange = () => {},
}: Partial<MenuTabsProps>) {
  const [active, setActive] = useState(categories[0] || 'Tandoori')

  return (
    <AnimatedContent>
      <div role="tablist" aria-label="Menu categories" className="relative inline-flex rounded-xl bg-card p-1">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => {
              setActive(cat)
              onChange(cat)
            }}
            className={cn('relative z-10 rounded-lg px-5 py-2 text-sm', active === cat ? 'text-primary-foreground' : 'text-foreground/80')}
          >
            {active === cat && <motion.span layoutId="menu-tab-bg" className="absolute inset-0 -z-10 rounded-lg bg-primary" />}
            {cat}
          </button>
        ))}
      </div>
    </AnimatedContent>
  )
}
