"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import appLogo from "@/assets/appimg.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image
                src={appLogo}
                alt="SMD Group logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              SMD Financial Group LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.title)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                    pathname === item.href ||
                      (item.children &&
                        item.children.some((child) => pathname === child.href))
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        activeDropdown === item.title && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full min-w-[220px] pt-2"
                    >
                      <div className="rounded-lg border border-border bg-card p-2 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block rounded-md px-4 py-2.5 text-sm transition-colors",
                              pathname === child.href
                                ? "bg-secondary text-foreground"
                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
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
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Button asChild>
              <Link href="/client-intake">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              {navigationItems.map((item) => (
                <div key={item.title} className="border-b border-border py-2 last:border-0">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.title ? null : item.title
                          )
                        }
                        className="flex w-full items-center justify-between py-2 text-base font-medium text-foreground"
                      >
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            activeDropdown === item.title && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 pl-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-base font-medium text-foreground"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/client-intake">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
