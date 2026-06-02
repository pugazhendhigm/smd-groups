"use client";

import { companyStats } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card py-10 sm:py-12 md:py-16">
      <div className="container-page">
        <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
          {companyStats.map((stat, index) => (
            <StaggerItem key={index} className="text-center">
              <p className="font-serif text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
