import type { Metadata } from "next";
import { writing } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on product design by Rana Ebrahim.",
};

export default function WritingPage() {
  return (
    <article className="sc-page">
      <header className="sc-hero st-page-hero">
        <p className="sc-crumb st-reveal">
          <span>Writing</span>
        </p>
        <h1 className="st-page-title st-reveal st-reveal-d1">
          Notes on product design, storytelling, and building in code.
        </h1>
      </header>

      <ul className="about-career" style={{ marginTop: "4vh" }}>
        {writing.map((post) => (
          <li key={post.title} className="simple-row">
            <span className="simple-row-head">
              <span className="simple-row-title">{post.title}</span>
              <span className="about-years">{post.date}</span>
            </span>
            <span className="simple-row-desc" style={{ paddingLeft: 0 }}>
              {post.excerpt}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
