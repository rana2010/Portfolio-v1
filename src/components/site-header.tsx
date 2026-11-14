"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="st-header">
      <nav className="st-nav" aria-label="Primary">
        {navItems.map((item) => {
          const active = item.exact
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
          const shortLabel =
            item.href === "/" ? "Rana" : item.label;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="st-pill"
              aria-current={active ? "page" : undefined}
              aria-label={item.label}
            >
              <span className="st-pill-full">{item.label}</span>
              <span className="st-pill-short">{shortLabel}</span>
            </Link>
          );
        })}
      </nav>

      <div className="st-side">
        <div className="st-lang st-pill" aria-label="Language">
          <span className="st-lang-thumb" aria-hidden />
          <a href="/" aria-current="true">
            EN
          </a>
          <a href="/" aria-disabled="true" tabIndex={-1} title="Coming soon">
            AR
          </a>
        </div>
        {site.openToWork && (
          <span className="st-pill st-status" aria-label="Open to work">
            <span className="st-dot" aria-hidden />
            <span className="st-status-full">Open to work</span>
            <span className="st-status-short">Open</span>
          </span>
        )}
      </div>
    </header>
  );
}
