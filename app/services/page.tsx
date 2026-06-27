import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    <div className="bg-background text-foreground">
      <PageHeader
        title="Our Services"
        description="Comprehensive financial solutions tailored to your unique needs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Services Grid with Visual Image Integration */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Calculator;
              return (
                <StaggerItem key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* Visual Card Cover Image Layer */}
                    <div className="relative aspect-[16/10] w-full bg-muted">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Floating Badge Container */}
                      <div className="absolute top-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-background/90 text-accent shadow-md backdrop-blur-sm transition-colors group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.shortDescription}
                      </p>
                      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-accent">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Our Services Layout */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Why Choose Our Services
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Excellence in Every Service We Provide
              </h2>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
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
                <div className="flex flex-col items-center text-center p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-sm font-bold text-accent">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned CTA Segment */}
      <section className="border-t border-border bg-background py-16 text-foreground sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Not Sure Which Service You Need?
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Schedule a free consultation and our experts will help you identify
                the best solutions for your financial needs.
              </p>
              <div className="pt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/client-intake"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-accent/40 bg-accent px-6 py-3.5 font-medium text-white shadow-sm transition-colors hover:bg-accent/90 sm:w-auto"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-transparent px-6 py-3.5 font-medium text-foreground transition-colors hover:bg-muted sm:w-auto"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}