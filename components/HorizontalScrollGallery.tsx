"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface GalleryItem {
  imageUrl: string;
  title: string;
  description?: string;
  href?: string;
}

interface HorizontalScrollGalleryProps {
  headline?: string;
  items: GalleryItem[];
}

export function HorizontalScrollGallery({
  headline = "The Royal Menu",
  items = [
    {
      imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577054/site-images/restaurant/10207592.jpg",
      title: "Tandoori",
      description: "Clay oven specialties, infused with hickory smoke and heritage spices.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577097/site-images/restaurant/11775401.jpg",
      title: "Biryani",
      description: "Long-grain basmati layered with succulent meats and secret spice blends.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577071/site-images/restaurant/10918163.jpg",
      title: "Curries",
      description: "Velvety textures and complex aromatics from the heart of the palace.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577067/site-images/restaurant/11689798.jpg",
      title: "Thali",
      description: "A panoramic feast of seasonal delicacies, served with royal hospitality.",
    },
  ],
}: HorizontalScrollGalleryProps) {
  var containerRef = useRef<HTMLDivElement>(null);
  var { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  var x = useTransform(scrollYProgress, [0, 1], ["1%", "-" + (items.length * 25 - 25) + "%"]);

  return (
    <section ref={containerRef} style={{ height: items.length * 60 + "vh" }} className="relative bg-muted/50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl md:text-5xl italic font-bold tracking-tight text-foreground">{headline}</h2>
          <div className="h-1 w-24 bg-[#af8d11] mx-auto mb-8" />
          <motion.div style={{ x: x }} className="flex gap-6">
            {items.map(function (item, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="min-w-[350px] md:min-w-[450px] lg:min-w-[550px] shrink-0"
                >
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-card">
                    <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-[#e5e2e1]">
                      <h3 className="text-xl md:text-2xl italic font-bold text-[#af8d11]">{item.title}</h3>
                      {item.description && <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalScrollGallery;
