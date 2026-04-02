"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxFeatureSectionProps {
  headline: string;
  description: string;
  imageUrl: string;
  imageOnRight?: boolean;
  features?: { icon: string; title: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function ParallaxFeatureSection({
  headline = "A Legacy Carved in Stone and Spice",
  description = "From the golden sands of Jaisalmer to the marble halls of Udaipur, our kitchen breathes the air of royalty. Chef Vikram Singh brings three generations of culinary mastery, resurrecting lost recipes of the Rajputana courts.",
  imageUrl = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577351/site-images/team-people/12903244.jpg",
  imageOnRight = false,
  features = [
    {
      icon: "🫚",
      title: "Hand-ground spices",
      description: "Every spice is prepared in-house for depth, aroma, and authenticity.",
    },
    {
      icon: "🔥",
      title: "Tempered flame",
      description: "Each flame is controlled with precision to honor traditional methods.",
    },
    {
      icon: "👑",
      title: "Royal lineage recipes",
      description: "Lost Rajputana court dishes revived with care and culinary mastery.",
    },
  ],
  ctaLabel = "Our Story",
  ctaHref = "#our-story",
}: ParallaxFeatureSectionProps) {
  var ref = useRef<HTMLDivElement>(null);
  var { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  var imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  var textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  var imageCol = (
    <motion.div style={{ y: imageY }} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card">
      <img src={imageUrl} alt={headline} className="h-full w-full object-cover" />
    </motion.div>
  );

  var textCol = (
    <motion.div style={{ y: textY }} className="flex flex-col justify-center">
      <p className="text-xs tracking-[0.3em] uppercase text-[#ff7722] font-semibold mb-5">Our Heritage</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-bold tracking-tight text-foreground">{headline}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      {features && features.length > 0 && (
        <div className="mt-8 grid gap-4">
          {features.map(function (f, i) {
            return (
              <div key={i} className="flex gap-4">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {ctaLabel && ctaHref && (
        <div className="mt-8">
          <a
            href={ctaHref}
            className="inline-flex items-center rounded-lg px-6 py-3 font-medium text-[#552000] bg-[linear-gradient(135deg,#ffb4a8,#ff7722)] hover:opacity-90 transition-colors"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </motion.div>
  );

  return (
    <section ref={ref} className="py-20 md:py-28 overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className={"grid items-center gap-12 md:gap-16 md:grid-cols-2 " + (imageOnRight ? "" : "md:[direction:rtl] md:[&>*]:[direction:ltr]")}>
          {imageOnRight ? (
            <>
              {textCol}
              {imageCol}
            </>
          ) : (
            <>
              {imageCol}
              {textCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ParallaxFeatureSection;
