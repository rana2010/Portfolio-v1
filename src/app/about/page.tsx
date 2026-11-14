import type { Metadata } from "next";
import { CareerList } from "@/components/career-list";
import { FadeIn } from "@/components/fade-in";
import { PhotoCollage } from "@/components/photo-collage";
import { TechStack } from "@/components/tech-stack";
import { about, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: about.headline,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      <section className="pt-10 pb-6 md:pt-16 md:pb-10">
        <FadeIn>
          <p className="mb-5 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            {about.eyebrow}
          </p>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <FadeIn delay={0.05}>
            <h1 className="max-w-xl text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-balance">
              {about.headline}
            </h1>
          </FadeIn>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-[1.05rem] md:leading-[1.7]">
            {about.paragraphs.map((paragraph, index) => (
              <FadeIn key={paragraph.slice(0, 24)} delay={0.1 + index * 0.07}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <PhotoCollage />
      </section>

      <section className="pt-16 md:pt-20">
        <FadeIn>
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            Career
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <CareerList />
        </FadeIn>
      </section>

      <section className="pt-16 md:pt-20">
        <FadeIn>
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            Tech stack
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <TechStack />
        </FadeIn>
      </section>

      <FadeIn delay={0.05}>
        <section className="mt-16 flex flex-col gap-3 border-t border-black/8 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Based in {site.location}. Currently designing at noon.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </section>
      </FadeIn>
    </div>
  );
}
