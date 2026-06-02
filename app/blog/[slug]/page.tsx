import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { FadeIn } from "@/components/ui/motion";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary/50 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 lg:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container-narrow relative">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-6 flex items-center gap-4">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="mt-3 font-serif text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl lg:text-4xl">
              <span className="text-balance">{post.title}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-base font-bold text-muted-foreground sm:h-12 sm:w-12 sm:text-lg">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              <span className="flex items-center gap-1 text-sm text-muted-foreground sm:ml-auto">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <div className="grid gap-8 lg:grid-cols-[1fr_200px] lg:gap-12">
            {/* Article */}
            <FadeIn>
              <article
                className="prose prose-sm max-w-none sm:prose-base lg:prose-lg prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.2} direction="left">
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-8">
                  {/* Share */}
                  <div>
                    <p className="text-sm font-medium text-foreground">Share</p>
                    <div className="mt-3 flex flex-col gap-2">
                      {[
                        { icon: Linkedin, label: "LinkedIn" },
                        { icon: Twitter, label: "Twitter" },
                        { icon: Facebook, label: "Facebook" },
                      ].map((social) => (
                        <button
                          key={social.label}
                          className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
                        >
                          <social.icon className="h-4 w-4" />
                          {social.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="border-y border-border bg-card py-8 sm:py-10 md:py-12">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-muted-foreground sm:h-16 sm:w-16 sm:text-xl">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Written by</p>
                <p className="mt-1 font-serif text-lg font-semibold text-foreground">
                  {post.author}
                </p>
                <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Expert in {post.category.toLowerCase()} with years of experience
                  helping clients achieve their financial goals.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <div className="grid gap-4 sm:grid-cols-2">
            {prevPost && (
              <FadeIn>
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
                >
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </span>
                  <span className="mt-2 font-medium text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                    {prevPost.title}
                  </span>
                </Link>
              </FadeIn>
            )}
            {nextPost && (
              <FadeIn delay={0.1}>
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col items-end rounded-xl border border-border bg-card p-6 text-right transition-colors hover:border-accent/50 sm:col-start-2"
                >
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="mt-2 font-medium text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                    {nextPost.title}
                  </span>
                </Link>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-secondary/50">
          <div className="container-page">
            <FadeIn>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Related Articles
              </h2>
            </FadeIn>

            <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <FadeIn key={relatedPost.id} delay={index * 0.1}>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-md"
                  >
                    <div className="aspect-[16/10] bg-secondary">
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
                        <span className="text-4xl font-serif font-bold text-muted-foreground/30">
                          {relatedPost.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-sm font-medium text-accent">
                        {relatedPost.category}
                      </span>
                      <h3 className="mt-2 font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
