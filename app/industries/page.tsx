import { Metadata } from "next";
import Link from "next/link";
import { 
  Home, 
  Briefcase, 
  Stethoscope, 
  Cpu, 
  ArrowRight,
  Building2,
  Users,
  ShieldCheck,
  Zap
} from "lucide-react";
import { industries } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Specialized financial expertise for real estate, healthcare, technology, and professional services.",
};

const iconMap: Record<string, any> = {
  home: Home,
  briefcase: Briefcase,
  stethoscope: Stethoscope,
  cpu: Cpu,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        description="Specialized financial expertise tailored to the unique challenges of your industry"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="right">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Expertise That Understands Your <span className="text-accent">Business Context</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We don't believe in one-size-fits-all accounting. Each industry has its own 
                regulatory landscape, tax opportunities, and operational hurdles. Our team 
                brings deep domain knowledge to help you navigate your specific market with confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full border border-accent/10 bg-accent/5 px-4 py-2 text-sm font-medium text-accent">
                  <ShieldCheck className="h-4 w-4" />
                  Regulatory Compliance
                </div>
                <div className="flex items-center gap-2 rounded-full border border-accent/10 bg-accent/5 px-4 py-2 text-sm font-medium text-accent">
                  <Zap className="h-4 w-4" />
                  Tax Optimization
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Building2, label: "Specialized Knowledge", desc: "Deep sector expertise" },
                  { icon: Users, label: "Strategic Partners", desc: "Collaborative approach" },
                  { icon: ShieldCheck, label: "Risk Mitigation", desc: "Proactive compliance" },
                  { icon: Zap, label: "Innovative Tools", desc: "Modern tech stack" },
                ].map((item, idx) => (
                  <div key={idx} className="luxury-card p-5 text-center sm:p-7">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 font-serif text-base font-bold text-foreground">{item.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Industry Grid */}
          <StaggerContainer className="mt-20 grid gap-6 sm:grid-cols-2 lg:gap-10">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <StaggerItem key={industry.id}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group flex flex-col overflow-hidden luxury-card transition-all hover:border-accent/60 hover:shadow-[0_24px_55px_rgba(196,30,58,0.14)]"
                  >
                    <div className="relative aspect-[16/8] overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 p-2 backdrop-blur-sm shadow-lg">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-white shadow-sm">
                          {industry.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                        {industry.shortDescription}
                      </p>
                      <div className="mt-6 flex items-center text-sm font-bold text-accent">
                        View Sector Solutions
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <div className="luxury-cta-panel">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to Optimize Your <span className="text-white">Industry Financials?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                Schedule a consultation with our industry experts to discuss how we can 
                tailor our services to your specific business needs and growth goals.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-lg bg-white px-8 text-sm font-bold text-accent shadow-xl transition-all hover:bg-white/90 hover:shadow-2xl active:scale-95"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
