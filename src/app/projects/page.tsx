import Link from "next/link";
import type { Metadata } from "next";
import { pageShell, projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product design work by Rana Ebrahim.",
};

export default function ProjectsPage() {
  return (
    <article className={`sc-page ${pageShell} pt-12 pb-20 md:pt-16 md:pb-28`}>
      <header className="sc-hero st-page-hero">
        <p className="sc-crumb st-reveal">
          <span>Projects</span>
        </p>
        <h1 className="st-page-title st-reveal st-reveal-d1">
          Selected work across e-commerce, fintech, and consumer products.
        </h1>
      </header>

      <section id="work" className={`${pageShell} pt-20 md:pt-28`}>
        <h2 className="st-sec-title mb-10 md:mb-12">
          <b>
            Selected
            <br />
            work
          </b>
        </h2>

        <ul className="st-work-list grid gap-6 md:gap-8">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <a
                className="st-work-item"
                href={project.external ? project.href : `/projects`}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
              >
                <div className="st-work-head">
                  <span className="st-work-name">
                    <span className="st-work-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.title}
                  </span>
                  <span className="st-work-desc">{project.description}</span>
                </div>
                <div className="st-work-cover">
                  <div
                    className="st-work-cover-inner p-6 md:p-8"
                    style={{ ["--cover-gradient" as string]: project.gradient }}
                  >
                    <span className="st-work-meta">
                      {project.category} · {project.year}
                      {project.external ? " · Visit ↗" : ""}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
