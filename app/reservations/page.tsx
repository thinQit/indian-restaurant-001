export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import HeroVariant from "@/components/HeroVariant"
import ReservationForm from "@/components/ReservationForm"
import CTABanner from "@/components/CTABanner"

export default function ReservationsPage() {
  return (
    <main>
      <AnimatedContent><section><HeroVariant /></section></AnimatedContent>
      <AnimatedContent><section className="py-24"><ReservationForm /></section></AnimatedContent>
      <AnimatedContent>
        <section className="py-20">
          <CTABanner headline="Planning something special?" ctaLabel="Request Private Dining" ctaHref="/contact?topic=private-dining" />
        </section>
      </AnimatedContent>
    </main>
  )
}
