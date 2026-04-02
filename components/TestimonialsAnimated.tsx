"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedContent } from "@/components/ui/effects/animated-content";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export function TestimonialsAnimated({
  headline = "Voices from Our Table",
  subheadline = "Guests who tasted the soul of Rajasthan",
  testimonials = [
    {
      quote:
        "The most authentic flavors I've encountered outside of Rajasthan itself. The Laal Maas is a masterpiece of spice and soul.",
      name: "Elena Rodriguez",
      designation: "Guest",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577357/site-images/team-people/1181738.jpg",
    },
    {
      quote:
        "An immersive experience. From the moment you walk in, the atmosphere transports you to a bygone era of luxury and hospitality.",
      name: "James Arlington",
      designation: "Guest",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577370/site-images/team-people/10375912.jpg",
    },
    {
      quote:
        "Every dish feels like a personal invitation to the Chef's family table. Simply unparalleled in the city's fine dining scene.",
      name: "Priya Kapoor",
      designation: "Guest",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577325/site-images/team-people/10347164.jpg",
    },
  ],
  autoplay = true,
}: TestimonialsAnimatedProps) {
  var [current, setCurrent] = useState(0);

  useEffect(function () {
    if (!autoplay) return;
    var timer = setInterval(function () {
      setCurrent(function (c) {
        return (c + 1) % testimonials.length;
      });
    }, 5000);
    return function () {
      clearInterval(timer);
    };
  }, [autoplay, testimonials.length]);

  var t = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedContent animation="fadeUp">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl italic font-bold tracking-tight text-foreground">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
          </div>
        </AnimatedContent>
        <div className="mx-auto max-w-3xl bg-card rounded-2xl p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 h-16 w-16 overflow-hidden rounded-full ring-2 ring-[#af8d11]/60">
                <img src={t.src} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <blockquote className="text-lg md:text-xl italic text-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="mt-4">
                <p className="font-semibold text-[#ff7722]">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.designation}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map(function (_, i) {
              return (
                <button
                  key={i}
                  onClick={function () {
                    setCurrent(i);
                  }}
                  className={"h-2 rounded-full transition-all " + (i === current ? "w-8 bg-[#ff7722]" : "w-2 bg-muted-foreground/30")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsAnimated;
