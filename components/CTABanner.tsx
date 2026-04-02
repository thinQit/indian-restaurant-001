"use client";

import { Button } from "@/components/ui/button";

interface CTABannerProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function CTABanner({
  headline = "Crafting Memories",
  description = "Join our private circle for exclusive invitations to chef's tastings and seasonal galas.",
  ctaLabel = "Book a Table",
  ctaHref = "#reservations",
  secondaryCtaLabel = "Contact",
  secondaryCtaHref = "#contact",
}: CTABannerProps) {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center rounded-2xl bg-card py-12">
        <h2 className="text-3xl md:text-4xl italic font-bold text-foreground">{headline}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 rounded-lg text-[#552000] bg-[linear-gradient(135deg,#ffb4a8,#ff7722)] hover:opacity-90" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#af8d11]/50 text-[#af8d11] hover:bg-muted px-8 rounded-lg"
            asChild
          >
            <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
