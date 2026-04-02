'use client'

import { MapPin, Phone, Navigation } from 'lucide-react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Button } from '@/components/ui/button'

export default function LocationMap() {
  return (
    <AnimatedContent>
      <section className="grid gap-6 md:grid-cols-2">
        <iframe
          title="Saffron Palace map"
          src="https://maps.google.com/maps?q=Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-[340px] w-full rounded-xl"
        />
        <div className="rounded-xl bg-card p-6">
          <h3 className="font-serif text-3xl">Visit Saffron Palace</h3>
          <p className="mt-3 text-muted-foreground"><MapPin className="mr-2 inline h-4 w-4" />245 Amber Fort Lane, Jaipur District</p>
          <p className="mt-2 text-muted-foreground">Daily: 5:00 PM – 11:30 PM</p>
          <div className="mt-6 flex gap-3">
            <Button><Phone className="mr-2 h-4 w-4" /> Call</Button>
            <Button variant="outline"><Navigation className="mr-2 h-4 w-4" /> Directions</Button>
          </div>
        </div>
      </section>
    </AnimatedContent>
  )
}
