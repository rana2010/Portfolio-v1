import { career } from "@/lib/site";

export function CareerList() {
  return (
    <ul className="about-career">
      {career.map((job) => (
        <li key={`${job.company}-${job.dates}`} className="simple-row">
          <span className="simple-row-head">
            <span
              className="simple-logo"
              style={{
                backgroundColor: job.color,
                color: job.textColor,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 600,
              }}
              aria-hidden
            >
              {job.logo}
            </span>
            <span className="simple-row-title">{job.company}</span>
            <span className="about-years">{job.dates}</span>
          </span>
          <span className="simple-row-desc">{job.role}</span>
        </li>
      ))}
    </ul>
  );
}
