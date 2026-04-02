'use client'

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { motion } from 'framer-motion'
import TestimonialCard from '@/components/TestimonialCard'

export default function TestimonialMarquee() {
  const items = [
    { quote: 'The most refined Rajasthani menu outside Jaipur.', name: 'Anika Sharma', title: 'Food Critic', rating: 5 },
    { quote: 'Every bite felt ceremonial and soulful.', name: 'Rohan Mehta', title: 'Guest', rating: 5 },
    { quote: 'Incredible biryani, warm staff, majestic setting.', name: 'Leena Kapoor', title: 'Guest', rating: 5 },
  ]

  return (
    <AnimatedContent>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...items, ...items].map((item, i) => (
            <div key={item.name + i} className="min-w-[320px]">
              <TestimonialCard {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedContent>
  )
}
