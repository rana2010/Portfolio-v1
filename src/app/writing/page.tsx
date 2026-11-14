import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { writing } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on product design by Rana Ebrahim.",
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      <section className="pt-10 pb-12 md:pt-16">
        <FadeIn>
          <p className="mb-5 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Writing
          </p>
          <h1 className="max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-balance">
            Notes on product design, storytelling, and building in code.
          </h1>
        </FadeIn>
      </section>

      <ul className="divide-y divide-black/8 border-y border-black/8">
        {writing.map((post, index) => (
          <FadeIn key={post.title} delay={0.05 * index}>
            <li className="py-8">
              <p className="mb-2 text-sm text-muted-foreground">{post.date}</p>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight">
                {post.title}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}
