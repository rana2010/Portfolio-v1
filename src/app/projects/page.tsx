import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product design work by Rana Ebrahim.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      <section className="pt-10 pb-12 md:pt-16">
        <FadeIn>
          <p className="mb-5 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Projects
          </p>
          <h1 className="max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-balance">
            Selected work across e-commerce, fintech, and consumer products.
          </h1>
        </FadeIn>
      </section>

      <ul className="divide-y divide-black/8 border-y border-black/8">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={0.05 * index}>
            <li>
              <a
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="group grid gap-4 py-10 md:grid-cols-[7rem_1fr_auto] md:items-start md:gap-8"
              >
                <p className="text-sm text-muted-foreground tabular-nums">
                  {project.year}
                </p>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-semibold tracking-tight group-hover:underline group-hover:underline-offset-4">
                      {project.title}
                    </h2>
                    <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground md:pt-2">
                  {project.external ? "Visit ↗" : "Case study →"}
                </span>
              </a>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}
