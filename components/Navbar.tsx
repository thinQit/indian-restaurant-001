'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  brand?: string
  links?: { label: string; href: string }[]
  className?: string
}

export default function Navbar({
  brand = 'Saffron Palace',
  links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Chef Story', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  className = '',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <AnimatedContent>
      <header className={cn('sticky top-0 z-50', className)}>
        <div className="rounded-b-xl border border-border/40 bg-black/50 px-4 py-3 backdrop-blur-xl md:px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" className="font-serif text-xl tracking-wide text-foreground">
              {brand}
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="group relative text-sm text-foreground/85">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <CalendarDays className="mr-2 h-4 w-4" /> Reserve
              </Button>
            </div>
            <button onClick={() => setOpen((v) => !v)} className="md:hidden" aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 md:hidden">
              <div className="space-y-3 rounded-xl bg-card p-4">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm" onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Button className="w-full bg-primary text-primary-foreground">Reserve Table</Button>
              </div>
            </motion.div>
          )}
        </div>
      </header>
    </AnimatedContent>
  )
}
