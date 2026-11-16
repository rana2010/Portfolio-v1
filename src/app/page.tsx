import { CareerList } from "@/components/career-list";
import { TechStack } from "@/components/tech-stack";
import { about, expertise, site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="st-home">
      <section className="st-pad">
        <h1 className="st-big st-reveal" aria-label="Product Designer">
          Product Designer
        </h1>

        <div className="st-subrow st-reveal st-reveal-d1">
          <a className="st-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="st-tagline">LOVEE CREATING EXPERIENCES!!</p>
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

      <section id="about" className="st-pad st-a-sec st-reveal">
        <h2 className="st-page-title-kicker">About</h2>
        <p className="st-page-title">{about.headline}</p>
        {about.paragraphs.map((paragraph, index) => (
          <p key={index} className={`st-paragraph st-reveal st-reveal-d${Math.min(index + 2, 4)}`}>
            {paragraph}
          </p>
        ))}
        <div className="st-stack-grid">
          <article>
            <h3 id="career-heading">Career</h3>
            <CareerList />
          </article>
          <article>
            <h3 id="stack-heading">Tech stack</h3>
            <TechStack />
          </article>
        </div>
      </section>

    </div>
  );
}
