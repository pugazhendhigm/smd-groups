"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PageTheme() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.dataset.page = pathname === "/" ? "home" : "inner";
  }, [pathname]);

  return null;
}
