"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full pt-5 pb-3 md:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary"
          className="flex max-w-[min(100%,42rem)] flex-wrap items-center gap-1.5 sm:gap-2"
        >
          {navItems.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                  active
                    ? "bg-foreground text-background"
                    : "bg-[#E8E8E8]/90 text-foreground hover:bg-[#DEDEDE]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {site.openToWork && (
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1.5 text-sm text-foreground backdrop-blur-sm">
              <span
                className="size-2 rounded-full bg-[#22C55E] shadow-[0_0_0_3px_rgba(34,197,94,0.18)]"
                aria-hidden
              />
              <span className="hidden sm:inline">Open to work</span>
              <span className="sm:hidden">Open</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
