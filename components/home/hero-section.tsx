"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, BookOpen, TrendingUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { companyStats } from "@/lib/data";
import cpaImage from "@/assets/cpaimg.jpg";

const heroServices = [
  {
    label: "Tax Advisory",
    href: "/services/tax-advisory",
    icon: Calculator,
  },
  {
    label: "Accounting",
    href: "/services/accounting",
    icon: BookOpen,
  },
  {
    label: "Business Development",
    href: "/services/business-development",
    icon: TrendingUp,
  },
  {
    label: "CFO Services",
    href: "/services/cfo-services",
    icon: Briefcase,
  },
];

export function HeroSection() {
  return (
    <section className="home-hero relative overflow-hidden pt-[5.5rem] pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pb-24">
      <div className="container-page relative z-[1]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white sm:text-xs">
                Trusted Since 1998
              </span>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mt-5 font-serif text-3xl font-bold leading-[1.12] text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Strategic Wealth Guidance for Growth, Legacy &amp; Trust
              </h1>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Comprehensive tax advisory, accounting, and business development
                solutions for individuals and businesses ready to move forward with
                confidence.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-12 px-7">
                  <Link href="/client-intake">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-accent/40 px-7 text-accent hover:bg-accent/10 hover:text-accent"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="mt-10 grid grid-cols-2 gap-2.5 sm:gap-3">
                {heroServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-white/90 px-3 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md sm:rounded-2xl sm:px-4 sm:py-3.5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-left text-xs font-semibold leading-tight text-foreground sm:text-sm">
                        {service.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.18} direction="left">
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_48px_rgba(0,0,0,0.1)] sm:rounded-3xl">
                  <Image
                    src={cpaImage}
                    alt="CPA professional working at a desk"
                    width={cpaImage.width}
                    height={cpaImage.height}
                    className="h-auto w-full object-contain"
                    sizes="(min-width: 1024px) 480px, 90vw"
                    priority
                  />
                </div>

                <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-white/95 shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:mt-4">
                  <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
                    {companyStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="px-2 py-4 text-center sm:px-3 sm:py-5"
                      >
                        <p className="font-serif text-lg font-bold text-accent sm:text-xl lg:text-2xl">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-[0.55rem] font-medium uppercase leading-snug tracking-wide text-muted-foreground sm:text-[0.6rem]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
