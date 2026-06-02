"use client";

import { companyStats } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {companyStats.map((stat, index) => (
            <StaggerItem key={index} className="text-center">
              <p className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
