import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description: "Experiments and works in progress by Rana Ebrahim.",
};

const experiments = [
  {
    title: "Interface experiments",
    description: "Small explorations in layout, type, color, and visual rhythm.",
  },
  {
    title: "Motion & interaction",
    description: "Prototypes focused on the details that make an interface feel alive.",
  },
  {
    title: "Ideas in progress",
    description: "A space for unfinished thoughts, quick tests, and curious detours.",
  },
];

export default function PlaygroundPage() {
  return (
    <article className="sc-page">
      <header className="sc-hero st-page-hero">
        <p className="sc-crumb st-reveal">
          <span>Playground</span>
        </p>
        <h1 className="st-page-title st-reveal st-reveal-d1">
          Experiments, playful UI studies, and ideas in progress.
        </h1>
      </header>

      <ul className="about-career" style={{ marginTop: "4vh" }}>
        {experiments.map((experiment, index) => (
          <li key={experiment.title} className="simple-row">
            <span className="simple-row-head">
              <span className="simple-row-title">{experiment.title}</span>
              <span className="about-years">{String(index + 1).padStart(2, "0")}</span>
            </span>
            <span className="simple-row-desc" style={{ paddingLeft: 0 }}>
              {experiment.description}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
