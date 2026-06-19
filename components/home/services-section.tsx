"use client";

import Link from "next/link";
import { ArrowRight, Calculator, BookOpen, TrendingUp, Briefcase, Crown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const featuredHomeServices = [
  {
    id: "bookkeeping",
    title: "Monthly Bookkeeping and Financial Presentations",
    description:
      "Consistent bookkeeping support and financial statement presentations that keep your business informed and prepared.",
    points: [
      "Monthly bookkeeping and organized financial records",
      "Financial statement presentations for better visibility",
      "Support tailored for growing businesses",
    ],
    href: "/services/accounting",
    icon: BookOpen,
  },
  {
    id: "startup",
    title: "Start-Up Packages",
    description:
      "Designed for new businesses with up to $1 million in annual revenue, with practical support from launch through early growth.",
    points: [
      "Start-up packages for new businesses",
      "Built for businesses up to $1 million in annual revenue",
      "Structured guidance for a stronger foundation",
    ],
    href: "/services/business-development",
    icon: TrendingUp,
  },
  {
    id: "tax-advisory-home",
    title: "Tax Advisory Services",
    description:
      "Business and personal tax support built around compliance, planning, filing, and communication with tax authorities.",
    points: [
      "Income tax preparation and e-filing of Forms 1040, 1065, 1120, 1120S, and 990",
      "Personal tax consulting, planning, and audit support",
      "IRS, state authority, and sales tax filing support",
    ],
    href: "/services/tax-advisory",
    icon: Calculator,
  },
  {
    id: "accounting-home",
    title: "Accounting Services",
    description:
      "Reliable accounting support that strengthens the accuracy, timing, and performance of your financial operations.",
    points: [
      "Monthly bank statement and financial reconciliations",
      "Accounts receivable and payable management",
      "Payroll processing and on-time financial operations",
    ],
    href: "/services/accounting",
    icon: BookOpen,
  },
  {
    id: "business-development-home",
    title: "Business Development Solutions",
    description:
      "Growth-oriented support for registration, incorporation, performance improvement, leadership, and nonprofit compliance.",
    points: [
      "Business registration and incorporation in the US",
      "QPIP improvement plans and executive coaching",
      "501(c)(3) compliance guidance for nonprofits",
    ],
    href: "/services/business-development",
    icon: TrendingUp,
  },
  {
    id: "cfo-home",
    title: "CFO Services",
    description:
      "Executive-level financial guidance to help your business plan ahead, track performance, and grow more confidently.",
    points: [
      "Roadmaps and projections for smarter decisions",
      "Income and expense monitoring to stay on track",
      "Clear reports with key performance metrics",
    ],
    href: "/services/cfo-services",
    icon: Briefcase,
  },
  {
    id: "white-glove-home",
    title: "White Glove Services",
    description:
      "High-touch, personalized service with proactive communication, confidentiality, and direct support when it matters most.",
    points: [
      "Every plan is designed specifically for you",
      "Direct access, proactive updates, and fast response times",
      "Coordination with attorneys, bankers, and other advisors",
    ],
    href: "/services/white-glove",
    icon: Crown,
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding section-surface-cream">
      <div className="container-page">
        <div className="text-center">
          <FadeIn>
            <span className="luxury-label">
              Our Services
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl lg:text-4xl">
              <span className="text-balance">
                Our Valued Services
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              SMD Financial Group provides practical, professional support across
              tax, accounting, business growth, CFO guidance, and personalized
              white glove services.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:mt-16 lg:grid-cols-3">
          {featuredHomeServices.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <Link
                  href={service.href}
                  className="group block h-full luxury-card p-5 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_24px_55px_rgba(92,58,11,0.14)] sm:p-6 md:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/12 transition-colors group-hover:bg-accent/18">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
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
