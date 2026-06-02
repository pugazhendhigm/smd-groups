"use client";

import Link from "next/link";
import { ArrowRight, Calculator, BookOpen, TrendingUp, ShieldCheck, Briefcase, Crown } from "lucide-react";
import { services } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calculator: Calculator,
  "book-open": BookOpen,
  "trending-up": TrendingUp,
  "shield-check": ShieldCheck,
  briefcase: Briefcase,
  crown: Crown,
};

export function ServicesSection() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn>
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Our Services
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
              <span className="text-balance">
                Comprehensive Financial Solutions
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From tax planning to business development, we offer a full range of
              services designed to meet your unique financial needs.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Calculator;
            return (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services/${service.id}`}
                  className="group block h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-medium text-accent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
