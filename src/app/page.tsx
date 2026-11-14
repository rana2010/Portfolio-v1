import Link from "next/link";
import { expertise, projects, site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="st-home">
      <section className="st-pad">
        <h1 className="st-big st-reveal" aria-label="Product Designer">
          <span>Product</span>
          <span>Designer</span>
        </h1>

        <div className="st-subrow st-reveal st-reveal-d1">
          <a className="st-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="st-tagline">
            Designing products
            <br />
            people trust
          </p>
        </div>

        <div className="st-lede-row">
          <p className="st-lede st-reveal st-reveal-d2">
            {site.name} is an Egyptian <em>designer</em> with a soft spot for{" "}
            <em>clear flows</em>, thoughtful details, and a growing obsession
            with <em>building things in code</em>.
          </p>

          <div className="st-expertise st-reveal st-reveal-d3">
            <span className="st-label">Expertise</span>
            <ul>
              {expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="st-sec st-reveal st-reveal-d4" id="work">
        <h2>
          <b>
            Selected
            <br />
            work
          </b>
        </h2>
      </div>

      <ul className="st-work-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <a
              className="st-work-item"
              href={project.external ? project.href : `/projects`}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
            >
              <div className="st-work-head">
                <span className="st-work-name">{project.title}</span>
                <span className="st-work-desc">{project.description}</span>
              </div>
              <div className="st-work-cover">
                <div
                  className="st-work-cover-inner"
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

      <div className="st-sec">
        <h2>
          <Link href="/writing" style={{ color: "inherit", textDecoration: "none" }}>
            <b>
              Notes on
              <br />
              design
            </b>
          </Link>
        </h2>
      </div>
    </div>
  );
}
