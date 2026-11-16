import type { Metadata } from "next";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product design work by Rana Ebrahim.",
};

export default function ProjectsPage() {
  return (
    <article className="sc-page">
      <header className="sc-hero st-page-hero">
        <p className="sc-crumb st-reveal">
          <span>Projects</span>
        </p>
        <h1 className="st-page-title st-reveal st-reveal-d1">
          Selected work across e-commerce, fintech, and consumer products.
        </h1>
      </header>

      <ul className="st-work-list">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <article className="st-work-item">
              <div className="st-work-head">
                <h2 className="st-work-name">
                  <span className="st-work-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.title}
                </h2>
                <p className="st-work-desc">{project.description}</p>
              </div>
              <div className="st-work-cover">
                <div
                  className="st-work-cover-inner"
                  style={{ ["--cover-gradient" as string]: project.gradient }}
                >
                  <span className="st-work-meta">
                    {project.category} · {project.year}
                    {project.external ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" · View project ↗"}
                      </a>
                    ) : null}
                  </span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </article>
  );
}
