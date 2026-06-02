import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the experienced professionals at SMD Group who are dedicated to your financial success.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        description="Meet the experts dedicated to your financial success"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Team", href: "/about/our-team" },
        ]}
      />

      {/* Leadership Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Leadership
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                <span className="text-balance">
                  Experienced Professionals at Your Service
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our team brings together decades of combined experience in tax,
                accounting, and business advisory services.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card">
                  {/* Photo Placeholder */}
                  <div className="aspect-[4/3] bg-secondary">
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card text-4xl font-serif font-bold text-muted-foreground">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                    
                    {/* Social Links */}
                    <div className="mt-6 flex gap-3">
                      <a
                        href={member.linkedin}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeIn>
                <span className="text-sm font-medium uppercase tracking-wider text-accent">
                  Careers
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                  <span className="text-balance">
                    Join Our Growing Team
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-4 text-muted-foreground">
                  We are always looking for talented professionals who share our
                  commitment to excellence and client service. If you are passionate
                  about making a difference in people&apos;s financial lives, we would love
                  to hear from you.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Button asChild className="mt-8">
                  <Link href="/contact">
                    Contact Us About Opportunities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="left">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  What We Offer
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Competitive compensation and benefits",
                    "Professional development opportunities",
                    "Collaborative and supportive work environment",
                    "Work-life balance flexibility",
                    "Opportunity to make a real impact",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-primary p-8 text-center lg:p-12">
              <h2 className="font-serif text-2xl font-bold text-primary-foreground lg:text-3xl">
                <span className="text-balance">Ready to Work With Us?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Schedule a consultation to discuss how our team can help you achieve
                your financial goals.
              </p>
              <Button asChild size="lg" variant="secondary" className="mt-8">
                <Link href="/client-intake">
                  Get Started Today
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
