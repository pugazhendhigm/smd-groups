import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { BlogSearch } from "@/components/blog/blog-search";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and articles on tax planning, accounting, business development, and financial strategies.",
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <>
      <PageHeader
        title="Blog"
        description="Insights and articles to help you navigate your financial journey"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      {/* Search and Filter */}
      <section className="border-b border-border py-6 sm:py-8">
        <div className="container-page">
          <BlogSearch categories={categories} />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-page">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden luxury-card transition-all hover:border-accent/60 hover:shadow-[0_24px_55px_rgba(92,58,11,0.14)]"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] bg-secondary">
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
                      <span className="text-4xl font-serif font-bold text-muted-foreground/30">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 gap-y-2 text-sm text-muted-foreground sm:gap-4">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-xl font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex min-w-0 items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-muted-foreground">
                          {post.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="truncate text-sm text-muted-foreground">
                          {post.author}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Pagination Placeholder */}
          <FadeIn>
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                      page === 1
                        ? "bg-accent text-black"
                        : "bg-card text-muted-foreground hover:bg-card/80"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
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
                  className="inline-flex w-full items-center justify-center rounded-lg border border-accent/40 bg-accent px-6 py-3 font-medium text-black shadow-[0_16px_30px_rgba(212,160,41,0.25)] transition-colors hover:bg-accent/90 sm:w-auto"
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
