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

      <ul className="about-career" style={{ marginTop: "4vh" }}>
        {projects.map((project) => (
          <li key={project.slug} className="simple-row">
            <a
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span className="simple-row-head">
                <span className="simple-row-title">{project.title}</span>
                <span className="about-years">{project.year}</span>
              </span>
              <span className="simple-row-desc" style={{ paddingLeft: 0 }}>
                {project.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
