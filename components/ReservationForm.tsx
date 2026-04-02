'use client'

import { useState } from 'react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ReservationForm() {
  const [sent, setSent] = useState(false)

  return (
    <AnimatedContent>
      <form
        className="space-y-4 rounded-xl bg-card p-6"
        onSubmit={(e) => {
          e.preventDefault()
          setSent(true)
        }}
      >
        <h3 className="font-serif text-3xl">Reserve Your Evening</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Input type="date" required />
          <Input type="time" required />
          <Input type="number" placeholder="Party Size" min={1} required />
          <Input placeholder="Full Name" required />
        </div>
        <Button className="bg-primary text-primary-foreground">Confirm Reservation</Button>
        {sent && <p className="text-sm text-primary">Your reservation request has been received. We will confirm shortly.</p>}
      </form>
    </AnimatedContent>
  )
}
