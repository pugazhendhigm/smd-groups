import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamMemberCard } from "@/components/about/team-member-card";
import { teamMembers } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import subhashiniImage from "@/assets/subhashini.webp";
import kalyanasundaramImage from "@/assets/kalyanasundaram.webp";
import vaidyanathanImage from "@/assets/Vaidyanathan.webp";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the professionals at SMD Group who are dedicated to your financial success.",
};

const teamImages = {
  subhashini: subhashiniImage,
  kalyanasundaram: kalyanasundaramImage,
  vaidyanathan: vaidyanathanImage,
} as const;

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

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center">
            <FadeIn>
              <span className="luxury-label">Team</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl lg:text-4xl">
                <span className="text-balance">
                  Meet Our Three Core Team Members
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our team brings together deep expertise in taxation, audit,
                finance, business advisory, and banking.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 md:mt-16 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <StaggerItem key={member.id} className="h-full">
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={teamImages[member.image as keyof typeof teamImages]}
                  specialties={
                    "specialties" in member && Array.isArray(member.specialties)
                      ? member.specialties
                      : undefined
                  }
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding section-surface-cream">
        <div className="container-page">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeIn>
                <span className="luxury-label">Careers</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl lg:text-4xl">
                  <span className="text-balance">Join Our Growing Team</span>
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
              <div className="luxury-card p-5 sm:p-6 md:p-8">
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

      <section className="section-padding section-surface-dark">
        <div className="container-page">
          <FadeIn>
            <div className="luxury-cta-panel">
              <h2 className="font-serif text-xl font-bold text-accent sm:text-2xl lg:text-3xl">
                <span className="text-balance">Ready to Work With Us?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/72">
                Schedule a consultation to discuss how our team can help you achieve
                your financial goals.
              </p>
              <Button asChild size="lg" className="mt-8">
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
