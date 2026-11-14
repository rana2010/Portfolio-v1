import type { Metadata } from "next";
import { CareerList } from "@/components/career-list";
import { PhotoCollage } from "@/components/photo-collage";
import { TechStack } from "@/components/tech-stack";
import { about } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: about.headline,
};

export default function AboutPage() {
  return (
    <article className="sc-page about-page">
      <header className="sc-hero st-page-hero">
        <p className="sc-crumb st-reveal">
          <span>{about.crumb}</span>
        </p>
        <h1 className="st-page-title st-reveal st-reveal-d1">{about.headline}</h1>
      </header>

      {about.paragraphs.map((paragraph, index) => (
        <p
          key={paragraph.slice(0, 24)}
          className={`st-reveal st-reveal-d${Math.min(index + 2, 4)}`}
        >
          {paragraph}
        </p>
      ))}

      <PhotoCollage />

      <section aria-labelledby="career-heading">
        <h2 id="career-heading">Career</h2>
        <CareerList />
      </section>

      <section aria-labelledby="stack-heading">
        <h2 id="stack-heading">Tech stack</h2>
        <TechStack />
      </section>
    </article>
  );
}
