"use client";

import { companyStats } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function StatsSection() {
  return (
    <section className="luxury-stat-bar relative -mt-px">
      <div className="container-page">
        <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
          {companyStats.map((stat, index) => (
            <StaggerItem key={index} className="rounded-[1.4rem] border border-accent/10 bg-white/4 px-4 py-5 text-center backdrop-blur-sm">
              <p className="font-serif text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/60 sm:mt-2 sm:text-sm">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
