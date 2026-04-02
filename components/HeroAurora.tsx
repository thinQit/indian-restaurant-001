"use client";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { BlurText } from "@/components/ui/text/blur-text";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroAuroraProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  auroraColors?: string[];
}

export function HeroAurora({
  badge = "Saffron Palace",
  headline = "The Soul of Rajasthan",
  subheadline = "Authentic flavors, royal heritage.",
  primaryCta = { label: "Book a Table", href: "#reservations" },
  secondaryCta = { label: "View Menu", href: "#menu" },
  auroraColors = ["#ff7722", "#af8d11", "#ffb4a8", "#a78b7e", "#552000"],
}: HeroAuroraProps) {
  return (
    <AuroraBackground auroraColors={auroraColors} className="bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-24 md:py-36"
      >
        <span className="mb-2 inline-block rounded-full bg-card/70 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-[#af8d11]">
          {badge}
        </span>
        <BlurText
          text={headline}
          className="text-4xl md:text-6xl lg:text-7xl italic font-bold text-center tracking-tight text-[#e5e2e1] max-w-4xl"
        />
        <p className="mt-4 max-w-2xl text-center text-lg md:text-xl uppercase tracking-[0.18em] text-muted-foreground">
          {subheadline}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="px-8 py-6 text-lg rounded-xl text-[#552000] bg-[linear-gradient(135deg,#ffb4a8,#ff7722)] hover:opacity-90"
            asChild
          >
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-xl border-[#af8d11]/50 text-[#af8d11] hover:bg-muted"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default HeroAurora;
