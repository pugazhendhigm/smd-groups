"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, BookOpen, TrendingUp, Briefcase, ShieldCheck } from "lucide-react";
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

const pillars = [
  {
    title: "Tax Strategy",
    description: "Plan ahead. Reduce surprises. Maximize opportunities.",
    icon: Calculator,
  },
  {
    title: "Business Advisory",
    description: "Turn financial information into business decisions.",
    icon: TrendingUp,
  },
  {
    title: "CFO Solutions",
    description: "Gain executive-level insight without hiring a full-time CFO.",
    icon: Briefcase,
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background mt-7 pt-16 pb-8 sm:pt-20 sm:pb-12 lg:flex lg:items-center lg:pt-24 lg:pb-16">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(196,30,58,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,30,58,0.015)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_65%_50%_at_50%_0%,#000_75%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container-page relative z-10 w-full px-4 sm:px-6 lg:px-8">
        
        {/* UPPER GRID: Splits text and image elements on desktop */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* LEFT SUB-COLUMN: Core Copy and CTAs */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center">
            <FadeIn>
              <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent sm:text-xs">
                  Trusted Advisor Since 1998
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mt-4 font-serif text-3xl font-bold leading-[1.12] text-foreground sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Strategic Financial Solutions for Businesses, Individuals &amp; Organizations
              </h1>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                SMD Financial Group provides proactive tax planning, accounting, CFO advisory, and business solutions designed to help you make smarter financial decisions
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-12 rounded-xl px-7 text-sm font-semibold shadow-md shadow-accent/15 transition-all duration-300 hover:-translate-y-0.5">
                  <Link href="/client-intake" className="flex items-center gap-2">
                    Schedule a Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-border bg-card/40 px-7 text-sm font-semibold text-accent backdrop-blur-sm hover:bg-accent/10 hover:text-accent transition-all duration-300"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SUB-COLUMN: Media Showcase & Company Stats Counter */}
          <div className="w-full lg:col-span-5 relative mt-6 lg:mt-0">
            <FadeIn delay={0.18} direction="left">
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-tl-2xl border-t border-l border-accent/20 pointer-events-none hidden sm:block" />
                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-br-2xl border-b border-r border-accent/20 pointer-events-none hidden sm:block" />

                <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_48px_rgba(0,0,0,0.06)] sm:rounded-3xl">
                  <Image
                    src={cpaImage}
                    alt="CPA professional working at a desk"
                    width={cpaImage.width}
                    height={cpaImage.height}
                    className="h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                    sizes="(min-width: 1024px) 480px, 90vw"
                    priority
                  />
                </div>

                <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-white/95 shadow-[0_16px_40px_rgba(0,0,0,0.05)] dark:bg-card/95 backdrop-blur-md sm:mt-4">
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

        {/* LOWER ROW: Full screen container width cards with optimized tight margins */}
        <div className="mt-10 w-full border-t border-border/60 pt-8">
          <FadeIn delay={0.24}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 w-full">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={pillar.title} 
                    className="group flex w-full flex-col gap-3 rounded-xl border border-border/70 bg-card p-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all duration-300 dark:bg-card/70 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_12px_40px_rgba(196,30,58,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/5 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="font-serif text-base font-bold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}