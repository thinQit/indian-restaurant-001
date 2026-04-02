export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import HeroVariant from "@/components/HeroVariant"
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery"
import CTABanner from "@/components/CTABanner"

export default function GalleryPage() {
  return (
    <main>
      <AnimatedContent><section><HeroVariant /></section></AnimatedContent>
      <AnimatedContent><section className="py-24"><HorizontalScrollGallery /></section></AnimatedContent>
      <AnimatedContent><section className="py-20"><CTABanner headline="See it in person—taste it for real." ctaLabel="Reserve" ctaHref="/reservations" /></section></AnimatedContent>
    </main>
  )
}
