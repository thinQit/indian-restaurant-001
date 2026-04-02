export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import HeroVariant from "@/components/HeroVariant"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <main>
      <AnimatedContent><section><HeroVariant /></section></AnimatedContent>
      <AnimatedContent>
        <section className="py-24">
          <ContactForm headline="Send a message" subheadline="For parties of 7+ or private dining, include your preferred date, time window, and any dietary notes." />
        </section>
      </AnimatedContent>
    </main>
  )
}
