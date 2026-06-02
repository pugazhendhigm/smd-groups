import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ServiceFAQ } from "@/components/services/service-faq";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.id}` },
        ]}
      />

      {/* Service Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeIn>
                <span className="text-sm font-medium uppercase tracking-wider text-accent">
                  Overview
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground">
                  <span className="text-balance">
                    What We Offer
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Button asChild className="mt-8">
                  <Link href="/client-intake">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </FadeIn>
            </div>

            {/* Features List */}
            <FadeIn delay={0.2} direction="left">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Key Features
                </h3>
                <ul className="mt-6 space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Benefits
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                <span className="text-balance">
                  Why Choose This Service
                </span>
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <span className="text-sm font-bold text-accent">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Our Process
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                <span className="text-balance">
                  How We Work With You
                </span>
              </h2>
            </FadeIn>
          </div>

          <div className="mt-12">
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="relative">
                    {/* Connector Line */}
                    {index < service.process.length - 1 && (
                      <div className="absolute left-8 top-10 hidden h-[calc(100%+2rem)] w-px bg-border lg:block" />
                    )}
                    
                    <div className="relative rounded-xl border border-border bg-card p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        {step.step}
                      </div>
                      <h3 className="mt-4 font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                FAQ
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                <span className="text-balance">
                  Frequently Asked Questions
                </span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-12 max-w-3xl">
              <ServiceFAQ faqs={service.faqs} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-primary p-8 text-center lg:p-12">
              <h2 className="font-serif text-2xl font-bold text-primary-foreground lg:text-3xl">
                <span className="text-balance">Ready to Get Started?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Schedule a consultation to discuss how our {service.title.toLowerCase()} can
                help you achieve your goals.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/client-intake">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
