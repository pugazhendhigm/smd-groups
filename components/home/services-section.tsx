"use client";

import Link from "next/link";
import { ArrowRight, Calculator, BookOpen, TrendingUp, Briefcase, Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const featuredHomeServices = [
  {
    id: "tax-advisory-home",
    title: "Tax Advisory Services",
    description:
      "Business and personal tax support built around compliance, planning, and filing.",
    points: ["Tax preparation & e-filing", "Audit support", "IRS & state filing"],
    href: "/services/tax-advisory",
    icon: Calculator,
  },
  {
    id: "accounting-home",
    title: "Accounting Services",
    description:
      "Reliable accounting that strengthens accuracy and financial performance.",
    points: ["Bank reconciliations", "AR/AP management", "Payroll processing"],
    href: "/services/accounting",
    icon: BookOpen,
  },
  {
    id: "bookkeeping",
    title: "Monthly Bookkeeping",
    description:
      "Consistent bookkeeping and financial presentations for growing businesses.",
    points: ["Organized records", "Financial statements", "Monthly reporting"],
    href: "/services/accounting",
    icon: BookOpen,
  },
  {
    id: "business-development-home",
    title: "Business Development",
    description:
      "Growth support for registration, incorporation, and performance improvement.",
    points: ["US incorporation", "Executive coaching", "Nonprofit compliance"],
    href: "/services/business-development",
    icon: TrendingUp,
  },
  {
    id: "cfo-home",
    title: "CFO Services",
    description:
      "Executive-level guidance to plan ahead and track business performance.",
    points: ["Financial roadmaps", "KPI reporting", "Expense monitoring"],
    href: "/services/cfo-services",
    icon: Briefcase,
  },
  {
    id: "white-glove-home",
    title: "White Glove Services",
    description:
      "High-touch, personalized service with proactive communication and direct support.",
    points: ["Custom plans", "Fast response times", "Advisor coordination"],
    href: "/services/white-glove",
    icon: Crown,
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Our Services
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Expertise Across Every Stage of Growth
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="mt-4 text-muted-foreground">
              From tax strategy to CFO leadership, we provide practical support tailored
              to individuals and businesses.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {featuredHomeServices.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(196,30,58,0.1)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-foreground sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-border/70 pt-5">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex justify-center sm:mt-12">
            <Button asChild variant="outline" className="h-11 border-accent/30 px-6 text-accent hover:bg-accent/10">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
