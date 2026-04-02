export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import HeroVariant from "@/components/HeroVariant"
import MenuTabs from "@/components/MenuTabs"
import CtaBand from "@/components/CtaBand"

export default function MenuPage() {
  return (
    <main>
      <AnimatedContent>
        <section><HeroVariant /></section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24"><MenuTabs /></section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-20"><CtaBand /></section>
      </AnimatedContent>
    </main>
  )
}
