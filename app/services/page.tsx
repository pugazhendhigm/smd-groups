import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, BookOpen, TrendingUp, ShieldCheck, Briefcase, Crown } from "lucide-react";
import { services } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive financial services including tax advisory, accounting, business development, CFO services, and more.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calculator: Calculator,
  "book-open": BookOpen,
  "trending-up": TrendingUp,
  "shield-check": ShieldCheck,
  briefcase: Briefcase,
  crown: Crown,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive financial solutions tailored to your unique needs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Calculator;
              return (
                <StaggerItem key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
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

      {/* Why Our Services */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Why Choose Our Services
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                <span className="text-balance">
                  Excellence in Every Service We Provide
                </span>
              </h2>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Expert Professionals",
                description: "Our team includes CPAs, tax attorneys, and business consultants with decades of experience.",
              },
              {
                title: "Personalized Approach",
                description: "Every solution is tailored to your specific situation and goals, not one-size-fits-all.",
              },
              {
                title: "Comprehensive Support",
                description: "From initial consultation to ongoing management, we are with you every step of the way.",
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-primary p-8 text-center lg:p-12">
              <h2 className="font-serif text-2xl font-bold text-primary-foreground lg:text-3xl">
                <span className="text-balance">Not Sure Which Service You Need?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Schedule a free consultation and our experts will help you identify
                the best solutions for your financial needs.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/client-intake"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
