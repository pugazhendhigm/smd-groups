"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import appLogo from "@/assets/appimg.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isNavActive = (href: string, children?: { href: string }[]) =>
    pathname === href ||
    (children?.some((child) => pathname === child.href) ?? false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-white/90 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300">
      <div className="container-page">
        <nav className="flex h-16 items-stretch justify-between gap-3 sm:h-[4.5rem] lg:h-20">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2.5 self-center transition-opacity hover:opacity-90 sm:gap-3"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-11 sm:w-11 lg:h-12 lg:w-12">
              <Image
                src={appLogo}
                alt="SMD Group logo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <span className="min-w-0 font-serif text-base font-semibold leading-tight text-foreground sm:text-lg lg:text-xl">
              <span className="sm:hidden">SMD Group</span>
              <span className="hidden sm:inline md:hidden">SMD Financial Group</span>
              <span className="hidden md:inline">SMD Financial Group LLC</span>
            </span>
          </Link>

          <div className="hidden h-full items-stretch gap-2 lg:flex xl:gap-3">
            {navigationItems.map((item) => {
              const active = isNavActive(item.href, item.children);
              return (
                <div
                  key={item.title}
                  className="group relative flex h-full items-center"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.title)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-full items-center px-3 text-sm font-medium transition-colors xl:px-4",
                      active
                        ? "text-accent"
                        : "text-foreground/75 group-hover:text-accent"
                    )}
                  >
                    <span className="flex items-center gap-1">
                      {item.title}
                      {item.children && (
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-transform",
                            activeDropdown === item.title && "rotate-180"
                          )}
                        />
                      )}
                    </span>
                  </Link>

                  <span
                    className={cn(
                      "pointer-events-none absolute inset-x-3 bottom-0 h-0.5 rounded-full transition-opacity xl:inset-x-4",
                      active
                        ? "bg-accent opacity-100"
                        : "bg-accent/70 opacity-0 group-hover:opacity-100"
                    )}
                  />

                  <AnimatePresence>
                    {item.children && activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full min-w-[220px] pt-2"
                      >
                        <div className="rounded-xl border border-border bg-white p-1.5 shadow-xl backdrop-blur-md">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                pathname === child.href
                                  ? "font-medium text-accent"
                                  : "text-foreground/75 hover:text-accent"
                              )}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="hidden items-center self-center lg:flex">
            <Button asChild size="sm" className="h-10 px-5">
              <Link href="/client-intake">Client Portal</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center self-center rounded-lg text-foreground/75 transition-colors hover:text-accent lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-white backdrop-blur-md lg:hidden"
          >
            <div className="container-page space-y-1 py-4">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-border/60 py-1 last:border-0"
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.title ? null : item.title
                          )
                        }
                        className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-foreground"
                      >
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            activeDropdown === item.title && "rotate-180"
                          )}
                        />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="space-y-0.5 pb-2 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2.5 text-sm font-medium text-foreground"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="mt-3 w-full">
                <Link href="/client-intake">Client Portal</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
