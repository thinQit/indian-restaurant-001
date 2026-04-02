"use client";
import React from "react";
import { CountUp } from "@/components/ui/text/count-up";
import { AnimatedContent } from "@/components/ui/effects/animated-content";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsRibbonProps {
  stats: Stat[];
  headline?: string;
}

export function StatsRibbon({
  headline = "By the Numbers",
  stats = [
    { value: 3, label: "Generations of Culinary Mastery" },
    { value: 40, suffix: "+", label: "Royal Recipes Revived" },
    { value: 12000, suffix: "+", label: "Guests Served Annually" },
    { value: 100, suffix: "%", label: "Hand-ground Spice Blends" },
  ],
}: StatsRibbonProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedContent animation="fadeUp">
          <h2 className="mb-12 text-center text-3xl md:text-4xl italic font-bold tracking-tight text-foreground">{headline}</h2>
        </AnimatedContent>
        <div className={"grid gap-8 text-center " + (stats.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-4")}>
          {stats.map(function (stat, i) {
            return (
              <AnimatedContent key={i} animation="fadeUp" delay={i * 0.15}>
                <div className="flex flex-col items-center bg-card rounded-xl py-8 px-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#af8d11]">
                    <CountUp target={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} duration={2.5} />
                  </span>
                  <span className="mt-2 text-sm md:text-base font-medium text-muted-foreground">{stat.label}</span>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsRibbon;
