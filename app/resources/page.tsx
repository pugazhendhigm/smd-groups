import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { resourcePosts } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { ResourceSearch } from "@/components/resources/resource-search";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Resources | Insights & Guides | SMD Group",
  description: "Insights and articles on tax updates, business insights, and financial guides to help you navigate your journey.",
};

interface ResourcesPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
}

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const { search, category } = await searchParams;
  const categories = [...new Set(resourcePosts.map((post) => post.category))];

  let filteredPosts = resourcePosts;

  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category);
  }

  if (search) {
    const query = search.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
    );
  }

  return (
    <>
      <PageHeader
        title="Resources"
        description="Expert insights and articles to help you navigate your financial and business journey"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
        ]}
      />

      {/* Search and Filter */}
      <section className="border-b border-border py-8 sm:py-10">
        <div className="container-page">
          <ResourceSearch categories={categories} />
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding min-h-[400px]">
        <div className="container-page">
          {filteredPosts.length > 0 ? (
            <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <Link
                    href={`/resources/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden luxury-card transition-all hover:border-accent/60 hover:shadow-[0_24px_55px_rgba(196,30,58,0.14)]"
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] bg-secondary relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
                        <span className="text-5xl font-serif font-bold text-muted-foreground/20 transition-transform duration-500 group-hover:scale-110">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-accent/60" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-accent/60" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="mt-4 font-serif text-xl font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>

                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-bold text-accent border border-accent/10">
                            {post.author.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <span className="text-xs font-bold text-foreground">
                            {post.author}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-accent/30 mb-6">
                  <Search className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">No articles matched your search</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Try adjusting your keywords or selecting a different category to find what you're looking for.
                </p>
                <Link 
                  href="/resources" 
                  className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent/90"
                >
                  Reset All Filters
                </Link>
              </div>
            </FadeIn>
          )}

          {/* Pagination Placeholder */}
          {filteredPosts.length > 0 && !search && !category && (
            <FadeIn>
              <div className="mt-16 flex justify-center">
                <div className="flex items-center gap-3">
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold transition-all ${
                        page === 1
                          ? "bg-accent text-white shadow-lg shadow-accent/20"
                          : "bg-white text-muted-foreground border border-border hover:border-accent/40 hover:text-accent"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding section-surface-cream">
        <div className="container-page">
          <FadeIn>
            <div className="mx-auto max-w-2xl luxury-card p-6 text-center sm:p-8">
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                <span className="text-balance">
                  Stay Updated with Our Latest Insights
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Subscribe to our newsletter for the latest articles on tax planning,
                accounting best practices, and business strategies.
              </p>
              <form className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:max-w-sm md:w-80"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-accent/40 bg-accent px-6 py-3 font-medium text-white shadow-[0_16px_30px_rgba(196,30,58,0.25)] transition-colors hover:bg-accent/90 sm:w-auto"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
