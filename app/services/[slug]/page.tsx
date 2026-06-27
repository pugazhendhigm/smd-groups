import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
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
    <div className="bg-background text-foreground">
      <PageHeader
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.id}` },
        ]}
      />

      {/* Overview Section with Live Data Image */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="space-y-6 lg:col-span-7">
              <FadeIn>
                <span className="text-sm font-medium uppercase tracking-wider text-accent">
                  Overview
                </span>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  What We Offer
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {service.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="pt-2">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/client-intake">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.2} direction="left">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-xl sm:aspect-[16/10] lg:aspect-square">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Features & Benefits Modern Layout */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Key Features Card */}
            <div className="rounded-3xl border border-border bg-background p-6 shadow-sm sm:p-8 lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Capabilities</span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-foreground">Key Features</h3>
              
              <ul className="mt-8 space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Grid */}
            <div className="space-y-6 lg:col-span-7">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Benefits</span>
                <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Why Choose This Service</h3>
              </div>

              <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
                        {index + 1}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {benefit}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <span className="text-sm font-medium uppercase tracking-wider text-accent">Our Process</span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How We Work With You
            </h2>
          </div>

          <div className="mt-12 sm:mt-16">
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="relative h-full">
                    
                    {/* Visual Desktop Progress Connectors */}
                    {index < service.process.length - 1 && (
                      <div className="absolute right-0 top-12 hidden h-px w-full bg-border lg:block z-0 translate-x-1/2" />
                    )}
                    
                    <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-6 shadow-sm">
                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base font-bold text-white">
                          {step.step}
                        </div>
                        <h3 className="mt-5 font-serif text-lg font-bold tracking-tight text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            
            <div className="space-y-4 lg:col-span-4 lg:sticky lg:top-24 lg:h-fit">
              <span className="text-sm font-medium uppercase tracking-wider text-accent">FAQ</span>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="lg:col-span-8">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border border-border bg-background p-2 sm:p-4 shadow-sm">
                  <ServiceFAQ faqs={service.faqs} />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section - Redesigned with White/Default Background */}
      <section className="border-t border-border bg-background py-16 text-foreground sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Schedule a consultation to discuss how our {service.title.toLowerCase()} can help you achieve your goals.
            </p>
            
            <div className="pt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/client-intake">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-border sm:w-auto"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}