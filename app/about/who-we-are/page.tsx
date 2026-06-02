import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyValues, companyStats } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Discover the story behind SMD Group, our mission, vision, and the values that drive our commitment to your financial success.",
};

export default function WhoWeArePage() {
  return (
    <>
      <PageHeader
        title="Who We Are"
        description="Your trusted partner in financial excellence since 1998"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Who We Are", href: "/about/who-we-are" },
        ]}
      />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeIn>
                <span className="text-sm font-medium uppercase tracking-wider text-accent">
                  Our Story
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl lg:text-4xl">
                  <span className="text-balance">
                    Building Financial Success, One Client at a Time
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Founded in 1998, SMD Group began with a simple mission: to provide
                    exceptional financial advisory services that truly make a difference
                    in our clients&apos; lives. What started as a small tax practice has
                    grown into a comprehensive financial services firm serving clients
                    across the nation.
                  </p>
                  <p className="leading-relaxed">
                    Over the years, we have expanded our services to include accounting,
                    business development, CFO services, and specialized white glove
                    solutions for high-net-worth individuals. Through it all, our
                    commitment to personalized service and expert guidance has remained
                    unchanged.
                  </p>
                  <p className="leading-relaxed">
                    Today, our team of seasoned professionals brings together diverse
                    expertise in tax law, accounting, and business strategy. We are proud
                    to have helped hundreds of clients navigate complex financial
                    challenges and achieve their goals.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="left">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
                    <div className="text-center p-8">
                      <p className="font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">25+</p>
                      <p className="mt-2 text-muted-foreground">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card py-10 sm:py-12 md:py-16">
        <div className="container-page">
          <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
            {companyStats.map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <p className="font-serif text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <Eye className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  To be the most trusted financial advisory firm in the nation, known
                  for transforming complex financial challenges into opportunities for
                  growth and prosperity. We envision a world where every individual and
                  business has access to expert financial guidance that empowers them to
                  achieve their full potential.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  To provide exceptional, personalized financial services that empower
                  our clients to achieve their goals. We are committed to maintaining
                  the highest standards of integrity, expertise, and client service
                  while building lasting relationships based on trust and mutual respect.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container-page">
          <div className="text-center">
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Our Values
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                <span className="text-balance">
                  The Principles That Guide Us
                </span>
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-4">
            {companyValues.map((value, index) => (
              <StaggerItem key={index}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <div className="rounded-2xl bg-primary p-6 text-center sm:p-8 lg:p-12">
              <h2 className="font-serif text-xl font-bold text-primary-foreground sm:text-2xl lg:text-3xl">
                <span className="text-balance">Ready to Meet Our Team?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Get to know the experts who will be working with you to achieve your
                financial goals.
              </p>
              <Button asChild size="lg" variant="secondary" className="mt-8">
                <Link href="/about/our-team">
                  Meet the Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
