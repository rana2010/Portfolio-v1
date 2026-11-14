import { site } from "@/lib/site";

const footerLinks = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Behance", href: site.links.behance },
  { label: "Resume", href: site.links.resume },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${site.email}`}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
