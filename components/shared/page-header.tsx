"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative bg-secondary/50 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 lg:pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container-page relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <FadeIn>
            <nav className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:mb-6">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-foreground">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          </FadeIn>
        )}

        <FadeIn delay={0.1}>
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">{title}</span>
          </h1>
        </FadeIn>

        {description && (
          <FadeIn delay={0.2}>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:mt-4 sm:text-lg">
              {description}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
