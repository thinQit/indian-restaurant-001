export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import HeroVariant from "@/components/HeroVariant"
import TestimonialMarquee from "@/components/TestimonialMarquee"

export default function ReviewsPage() {
  return (
    <main>
      <AnimatedContent><section><HeroVariant /></section></AnimatedContent>
      <AnimatedContent><section className="py-24"><TestimonialMarquee /></section></AnimatedContent>
    </main>
  )
}
