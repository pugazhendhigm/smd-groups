"use client";

import { useTransition, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

interface ResourceSearchProps {
  categories: string[];
}

export function ResourceSearch({ categories }: ResourceSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  const currentSearch = searchParams.get("search") || "";
  const currentCategory = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState(currentSearch);

  useEffect(() => {
    setSearchQuery(currentSearch);
  }, [currentSearch]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    startTransition(() => {
      router.push(`/resources?${params.toString()}`, { scroll: false });
    });
  };

  const handleCategory = (category: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    startTransition(() => {
      router.push(`/resources?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search insights, guides, and articles..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
        />
        {searchQuery && (
          <button 
            onClick={() => handleSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hidden sm:block">Filter by:</span>
        <button
          onClick={() => handleCategory(null)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
            currentCategory === null
              ? "bg-accent text-white shadow-lg shadow-accent/20"
              : "border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-accent"
          }`}
        >
          All Topics
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              currentCategory === category
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-accent"
            }`}
          >
            {category}
          </button>
        ))}
        {isPending && (
          <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        )}
      </div>
    </div>
  );
}

