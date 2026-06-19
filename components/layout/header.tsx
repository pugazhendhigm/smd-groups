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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-accent/20 bg-[#0f0d0a]/88 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container-page">
        <nav className="flex h-16 items-center justify-between gap-3 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-2.5">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg sm:h-10 sm:w-10">
              <Image
                src={appLogo}
                alt="SMD Group logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span
              className={cn(
                "min-w-0 font-serif text-sm font-semibold leading-tight sm:text-base md:text-lg lg:text-xl",
                pathname === "/" ? "text-white" : "text-accent"
              )}
            >
              <span className="sm:hidden">SMD Group</span>
              <span className="hidden sm:inline md:hidden">SMD Financial Group</span>
              <span className="hidden md:inline">SMD Financial Group LLC</span>
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
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-[0.22em] transition-colors",
                    pathname === item.href ||
                      (item.children &&
                        item.children.some((child) => pathname === child.href))
                      ? "text-accent"
                      : "text-white/72 hover:text-accent"
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
                      <div className="rounded-2xl border border-accent/20 bg-[#15120e]/95 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block rounded-md px-4 py-2.5 text-sm transition-colors",
                              pathname === child.href
                                ? "bg-accent/12 text-accent"
                                : "text-white/72 hover:bg-accent/10 hover:text-accent"
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
            <Button asChild>
              <Link href="/client-intake">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-accent/10 hover:text-accent"
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
            className="overflow-hidden border-t border-accent/20 bg-[#120f0c]/96 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page py-4 sm:py-5">
              {navigationItems.map((item) => (
                <div key={item.title} className="border-b border-white/10 py-2 last:border-0">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.title ? null : item.title
                          )
                        }
                        className="flex w-full items-center justify-between py-2 text-base font-medium text-white"
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
                                  className="block py-2 text-sm text-white/72 transition-colors hover:text-accent"
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
                      className="block py-2 text-base font-medium text-white"
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
