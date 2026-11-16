import { pageShell, site } from "@/lib/site";

export function SiteFooter() {
  const letters = site.name.split("");

  return (
    <footer className={`st-footer ${pageShell} pt-20 md:pt-28`}>
      <div className="st-footer-row">
        <nav aria-label="Elsewhere">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={site.links.behance}
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={site.links.resume}>Resume</a>
        </nav>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <div className="st-mark" aria-hidden="true">
        {letters.map((letter, index) => (
          <span key={`${letter}-${index}`} style={{ ["--i" as string]: index }}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </footer>
  );
}
