import Link from "next/link";
import { CareerList } from "@/components/career-list";
import { PhotoCollage } from "@/components/photo-collage";
import { TechStack } from "@/components/tech-stack";
import { about, expertise, pageShell, site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="st-home">
      <section className={`${pageShell} st-hero pt-12 md:pt-16`}>
        <p className="st-page-title-kicker st-reveal st-reveal-d1 mb-4 md:mb-6">
          Heyy I'm Rana
        </p>
        <h1 className="st-big st-reveal w-full whitespace-normal">Product Designer</h1>

        <div className="st-subrow st-reveal st-reveal-d1 mt-3 md:mt-4">
          <a className="st-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="st-tagline">{site.tagline}</p>
        </div>

        <div className="st-lede-row mt-16 items-start gap-12 md:mt-20 lg:gap-20">
          <p className="st-lede st-reveal st-reveal-d2 w-full max-w-[min(44ch,100%)] leading-[1.35]">
            {site.name} is an Egyptian <em>designer</em> with a soft spot for{" "}
            <em>clear flows</em>, thoughtful details, and a growing obsession
            with <em>building things in code</em>.
          </p>

          <div className="st-expertise st-reveal st-reveal-d3">
            <span className="st-label">Expertise</span>
            <ul className="gap-x-8">
              {expertise.map((item) => (
                <li key={item} className="py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className={`${pageShell} pt-20 md:pt-28`}>
        <p className="st-page-title-kicker mb-3">About</p>
        <h2 className="st-page-title mb-10 md:mb-12">{about.headline}</h2>
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`st-paragraph st-reveal st-reveal-d${Math.min(index + 2, 4)}`}
          >
            {paragraph}
          </p>
        ))}
        <PhotoCollage />
        <div className="st-stack-grid mt-16 grid items-start gap-12 md:mt-20 lg:grid-cols-2 lg:gap-20">
          <article>
            <h3 id="career-heading" className="st-block-title mb-10 md:mb-12">
              Career
            </h3>
            <CareerList />
          </article>
          <article>
            <h3 id="stack-heading" className="st-block-title mb-10 md:mb-12">
              Tech stack
            </h3>
            <TechStack />
          </article>
        </div>
      </section>

      <section className={`${pageShell} pt-20 md:pt-28`}>
        <h2 className="st-sec-title">
          <Link href="/writing" style={{ color: "inherit", textDecoration: "none" }}>
            <b>
              Notes on
              <br />
              design
            </b>
          </Link>
        </h2>
      </section>
    </div>
  );
}
