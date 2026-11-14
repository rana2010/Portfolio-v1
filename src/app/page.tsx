import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { expertise, projects, site, writing } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <section className="flex min-h-[68vh] flex-col justify-center py-16 md:min-h-[72vh] md:py-24">
        <FadeIn>
          <p className="mb-6 text-sm text-muted-foreground">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            <span className="mx-2 text-black/20">·</span>
            Designing products people trust
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="max-w-5xl text-[clamp(2.4rem,8vw,5.5rem)] leading-[0.95] font-bold tracking-[-0.04em] text-balance uppercase">
            Product Designer
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {site.name} is an Egyptian product designer with a soft spot for
            clear flows, thoughtful details, and building things that feel as
            good as they look.
          </p>
        </FadeIn>
      </section>

      <FadeIn delay={0.05}>
        <section className="border-t border-black/8 py-14 md:py-16">
          <p className="mb-6 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Expertise
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <li
                key={item}
                className="rounded-full border border-black/6 bg-white/60 px-4 py-3 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <section className="border-t border-black/8 py-14 md:py-16">
        <FadeIn>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                Selected work
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all →
            </Link>
          </div>
        </FadeIn>

        <ul className="space-y-0 divide-y divide-black/8 border-y border-black/8">
          {projects.slice(0, 4).map((project, index) => (
            <FadeIn key={project.slug} delay={0.05 * index}>
              <li>
                <a
                  href={project.href}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-2 py-7 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div className="min-w-0">
                    <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-xl font-semibold tracking-tight group-hover:underline group-hover:underline-offset-4">
                        {project.title}
                      </h3>
                      <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {project.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {project.external ? "Visit ↗" : "View →"}
                  </span>
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>

      <section className="border-t border-black/8 py-14 md:py-16">
        <FadeIn>
          <p className="mb-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Writing
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            Notes on product design
          </h2>
        </FadeIn>
        <ul className="grid gap-4 md:grid-cols-2">
          {writing.map((post, index) => (
            <FadeIn key={post.title} delay={0.06 * index}>
              <li className="rounded-2xl border border-black/6 bg-white/55 p-6 transition-colors hover:bg-white/80">
                <p className="mb-3 text-xs text-muted-foreground">{post.date}</p>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>
    </div>
  );
}
