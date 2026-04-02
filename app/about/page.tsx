export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import HeroVariant from "@/components/HeroVariant"
import ParallaxFeatureSection from "@/components/ParallaxFeatureSection"
import CTABanner from "@/components/CTABanner"

export default function AboutPage() {
  return (
    <main>
      <AnimatedContent><section><HeroVariant /></section></AnimatedContent>
      <AnimatedContent><section className="py-24"><ParallaxFeatureSection /></section></AnimatedContent>
      <AnimatedContent><section className="py-20"><CTABanner headline="Come taste Rajasthan—tonight." ctaLabel="Reserve" ctaHref="/reservations" /></section></AnimatedContent>
    </main>
  )
}
