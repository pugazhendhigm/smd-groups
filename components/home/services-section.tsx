"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Calculator, 
  BookOpen, 
  TrendingUp, 
  Briefcase, 
  Crown, 
  Check, 
  Sparkles,
  ShieldCheck,
  LineChart,
  UserCheck,
  Cpu,
  Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const iconMap = {
  "tax-advisory-home": Calculator,
  "accounting-home": BookOpen,
  "bookkeeping": BookOpen,
  "business-development-home": TrendingUp,
  "cfo-home": Briefcase,
  "white-glove-home": Crown,
};

const featuredHomeServices = [
  {
    id: "tax-advisory-home",
    title: "Tax Advisory Services",
    description: "Business and personal tax support built around compliance, planning, and filing.",
    points: ["Tax preparation & e-filing", "Audit support", "IRS & state filing"],
    href: "/services/tax-advisory",
    iconKey: "tax-advisory-home",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Tax documents, calculator, and financial planning notes on a desk",
    accent: "from-sky-500/20 to-cyan-400/20",
  },
  {
    id: "accounting-home",
    title: "Accounting Services",
    description: "Reliable accounting that strengthens accuracy and financial performance.",
    points: ["Bank reconciliations", "AR/AP management", "Payroll processing"],
    href: "/services/accounting",
    iconKey: "accounting-home",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Accounting workspace with spreadsheets, charts, and calculator",
    accent: "from-emerald-500/20 to-teal-400/20",
  },
  {
    id: "bookkeeping",
    title: "Monthly Bookkeeping",
    description: "Consistent bookkeeping and financial presentations for growing businesses.",
    points: ["Organized records", "Financial statements", "Monthly reporting"],
    href: "/services/accounting",
    iconKey: "bookkeeping",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Organized financial ledgers and monthly records workspace",
    accent: "from-teal-500/20 to-cyan-400/20",
  },
  {
    id: "business-development-home",
    title: "Business Development",
    description: "Growth support for registration, incorporation, and performance improvement.",
    points: ["US incorporation", "Executive coaching", "Nonprofit compliance"],
    href: "/services/business-development",
    iconKey: "business-development-home",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Business leaders collaborating on growth strategy in a modern office",
    accent: "from-indigo-500/20 to-violet-400/20",
  },
  {
    id: "cfo-home",
    title: "CFO Services",
    description: "Executive-level guidance to plan ahead and track business performance.",
    points: ["Financial roadmaps", "KPI reporting", "Expense monitoring"],
    href: "/services/cfo-services",
    iconKey: "cfo-home",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Executive finance team reviewing company performance dashboards",
    accent: "from-blue-500/20 to-slate-400/20",
  },
  {
    id: "white-glove-home",
    title: "White Glove Services",
    description: "High-touch, personalized service with proactive communication and direct support.",
    points: ["Custom plans", "Fast response times", "Advisor coordination"],
    href: "/services/white-glove",
    iconKey: "white-glove-home",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Premium client service setting with elegant business details",
    accent: "from-amber-400/20 to-yellow-300/20",
  },
];

const highValueDifferentiators = [
  {
    title: "Full-Service Financial Solutions",
    context: "Bookkeeping, payroll, and corporate tax strategy managed collectively under a single, unified workflow.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic Advisory Approach",
    context: "Proactive multi-state modeling designed to minimize liability long before year-end filing deadlines.",
    icon: LineChart,
  },
  {
    title: "Licensed CPA & Financial Professionals",
    context: "Direct oversight by registered Enrolled Agents and CPAs with deep banking and cross-border regulatory backgrounds.",
    icon: UserCheck,
  },
  {
    title: "Technology-Driven Processes",
    context: "Real-time visibility into operational data via clean, cloud-native QuickBooks and Xero architecture integrations.",
    icon: Cpu,
  },
  {
    title: "Personalized Client Experience",
    context: "Eliminating automated help desks. You collaborate directly with a dedicated lead financial advisor.",
    icon: Crown,
  },
  {
    title: "Long-Term Client Relationships",
    context: "A team scaled to support your corporate financial structure from initial launch up through successive seed rounds.",
    icon: Handshake,
  },
];

export function ServicesSection() {
  return (
    <div className="bg-slate-50/50 dark:bg-zinc-900/50">
      
      {/* 1. Core Services Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                Our Services
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Expertise Across Every Stage of Growth
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                From tax strategy to CFO leadership, we provide practical support tailored
                to individuals and scaling businesses.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {featuredHomeServices.map((service) => {
              const Icon = iconMap[service.iconKey as keyof typeof iconMap] || Briefcase;
              return (
                <StaggerItem key={service.id} className="flex">
                  <Link
                    href={service.href}
                    className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-zinc-900">
                      <div className={`absolute inset-0 z-10 bg-gradient-to-br ${service.accent} mix-blend-multiply transition-opacity group-hover:opacity-40`} />
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent opacity-100 dark:from-zinc-950" />
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md text-accent transition-colors dark:bg-zinc-900 group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-muted-foreground shadow-sm transition-all group-hover:bg-accent group-hover:text-white">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3 className="font-serif text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-zinc-800/60">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-2.5 text-xs text-slate-600 transition-colors dark:text-zinc-400 group-hover:text-foreground sm:text-sm"
                          >
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="truncate">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex justify-center sm:mt-12">
              <Button 
                asChild 
                variant="outline" 
                className="group h-12 border-accent/20 bg-white px-8 font-medium text-accent hover:bg-accent hover:text-white transition-all duration-200 dark:bg-zinc-950 dark:hover:bg-accent"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Structural Minimalist Section Separator */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr className="border-slate-200/80 dark:border-zinc-800/60" />
      </div>

      {/* 2. Redesigned Brand Differentiators Section */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 dark:bg-zinc-950">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-accent" />
                    Why Partner With Us
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.06}>
                  <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl lg:leading-[1.15] dark:text-zinc-50">
                    The strategic partner your growth demands.
                  </h2>
                </FadeIn>
                
                <FadeIn delay={0.12}>
                  <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                    We don't just log historic transactions. We serve as an operational anchor for high-net-worth individuals and scaling corporate entities who require absolute structural compliance and forward-looking financial clarity.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-3">
              <StaggerContainer className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
                {highValueDifferentiators.map((differentiator, index) => {
                  const DifferentiatorIcon = differentiator.icon;
                  return (
                    <StaggerItem key={index} className="group flex items-start gap-4">
                      {/* Interactive Modern Fluid Icon Container */}
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                        <DifferentiatorIcon className="h-3.5 w-3.5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100 group-hover:text-accent transition-colors duration-200">
                          {differentiator.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {differentiator.context}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* Structural Minimalist Section Separator */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr className="border-slate-200/80 dark:border-zinc-800/60" />
      </div>

      {/* 3. Centered, Mobile Responsive Final Bottom CTA Section */}
      <section className="bg-white py-12 sm:py-16 dark:bg-zinc-950">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Sparkles className="h-5 w-5" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.06}>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-50">
              Ready to Take Control of Your Finances?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.12}>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Schedule a free consultation with our experts today. Let us show you how we can help you achieve your financial goals.
            </p>
          </FadeIn>

          <FadeIn delay={0.18} className="mt-8">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                asChild 
                size="lg"
                className="w-full sm:w-auto px-8 bg-accent text-white shadow-md hover:bg-accent/90 group"
              >
                <Link href="/contact" className="inline-flex items-center justify-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto px-8 border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/80"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}