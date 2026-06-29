import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight,
  Home,
  Briefcase,
  Stethoscope,
  Cpu,
  HelpCircle
} from "lucide-react";
import { industries } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const iconMap: Record<string, any> = {
  home: Home,
  briefcase: Briefcase,
  stethoscope: Stethoscope,
  cpu: Cpu,
};

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.title} | Industries | SMD Group`,
    description: industry.shortDescription,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const Icon = iconMap[industry.icon] || Briefcase;

  return (
    <>
      {/* Hero Section */}
      <section className="luxury-page-header">
        <div className="container-page relative">
          <FadeIn>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Industries
            </Link>
          </FadeIn>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <FadeIn delay={0.1}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 p-2 backdrop-blur-sm border border-white/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="mt-6 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                  {industry.title}
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-6 text-lg text-white/80 leading-relaxed lg:text-xl">
                  {industry.description}
                </p>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.4} className="hidden lg:block">
              <div className="relative h-72 w-72 overflow-hidden rounded-[3rem] border-2 border-white/20 shadow-2xl">
                <img
                  src={industry.image}
                  alt={industry.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
            {/* Detailed Overview */}
            <div>
              <FadeIn>
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: industry.content }}
                />
              </FadeIn>

              {/* Features Grid */}
              <div className="mt-20">
                <FadeIn>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Tailored {industry.title} Capabilities
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    We offer a wide range of specialized services to meet the evolving 
                    demands of the {industry.title.toLowerCase()} sector.
                  </p>
                </FadeIn>
                <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2">
                  {industry.features.map((feature, idx) => (
                    <StaggerItem key={idx}>
                      <div className="luxury-card flex items-center gap-4 p-6 transition-all hover:bg-secondary/30">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-bold text-foreground">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">
              <FadeIn direction="left" delay={0.2}>
                <div className="luxury-card p-8 sm:p-10">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Sector Benefits
                  </h3>
                  <div className="mt-8 space-y-6">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-base text-muted-foreground leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <div className="luxury-cta-panel bg-accent p-8 text-white sm:p-10">
                  <h3 className="font-serif text-2xl font-bold">
                    Expert Consultation
                  </h3>
                  <p className="mt-4 text-base text-white/80">
                    Connect with our {industry.title.toLowerCase()} advisors to discuss 
                    how we can help your business reach new financial heights.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-bold text-accent shadow-lg transition-all hover:bg-white/90 hover:shadow-xl active:scale-95"
                  >
                    Get Started Today
                  </Link>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding section-surface-cream">
        <div className="container-narrow">
          <FadeIn className="text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-lg">
              <HelpCircle className="h-7 w-7" />
            </div>
            <h2 className="mt-8 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Industry Insights & FAQs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Addressing common questions in the {industry.title.toLowerCase()} sector.
            </p>
          </FadeIn>

          <FadeIn className="mt-16">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {industry.faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="luxury-card border-none bg-white px-6 transition-all data-[state=open]:shadow-2xl sm:px-8"
                >
                  <AccordionTrigger className="text-left font-serif text-xl font-bold text-foreground hover:no-underline py-8 [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Other Industries */}
      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <div className="flex items-end justify-between border-b border-border pb-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  Our Other Verticals
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Explore our specialized solutions for other sectors.
                </p>
              </div>
              <Link
                href="/industries"
                className="hidden items-center text-sm font-bold text-accent hover:underline sm:flex"
              >
                View All Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries
              .filter((i) => i.slug !== slug)
              .slice(0, 3)
              .map((other, idx) => {
                const OtherIcon = iconMap[other.icon] || Briefcase;
                return (
                  <FadeIn key={other.id} delay={idx * 0.1}>
                    <Link
                      href={`/industries/${other.slug}`}
                      className="group flex flex-col overflow-hidden luxury-card transition-all hover:border-accent/60 hover:shadow-xl"
                    >
                      <div className="relative aspect-[16/6] overflow-hidden">
                        <img
                          src={other.image}
                          alt={other.imageAlt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <OtherIcon className="h-10 w-10 text-white/90" />
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {other.title}
                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                          {other.shortDescription}
                        </p>
                        <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-accent">
                          Explore Verticals
                          <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
