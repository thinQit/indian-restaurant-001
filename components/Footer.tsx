'use client'

import Link from 'next/link'
import { Instagram, Facebook, MapPin, Clock3 } from 'lucide-react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

export default function Footer() {
  return (
    <AnimatedContent>
      <footer className="mt-20 rounded-t-2xl bg-card px-6 py-12 text-card-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl">Saffron Palace</h3>
            <p className="mt-3 text-sm text-muted-foreground">A royal Rajasthani dining experience in a cinematic midnight setting.</p>
          </div>
          <div>
            <h4 className="font-semibold">Address</h4>
            <p className="mt-2 text-sm text-muted-foreground"><MapPin className="mr-2 inline h-4 w-4" />245 Amber Fort Lane, Jaipur District</p>
          </div>
          <div>
            <h4 className="font-semibold">Hours</h4>
            <p className="mt-2 text-sm text-muted-foreground"><Clock3 className="mr-2 inline h-4 w-4" />Daily: 5:00 PM – 11:30 PM</p>
          </div>
          <div>
            <h4 className="font-semibold">Explore</h4>
            <div className="mt-2 space-y-2 text-sm text-muted-foreground">
              <Link href="#menu" className="block">Menu</Link>
              <Link href="#reservation" className="block">Reservations</Link>
              <div className="flex gap-3 pt-2">
                <Instagram className="h-4 w-4" />
                <Facebook className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </AnimatedContent>
  )
}
