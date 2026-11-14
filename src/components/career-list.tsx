import { career } from "@/lib/site";

export function CareerList() {
  return (
    <ul className="divide-y divide-black/8 border-y border-black/8">
      {career.map((job) => (
        <li
          key={`${job.company}-${job.dates}`}
          className="flex items-start justify-between gap-4 py-5 sm:items-center"
        >
          <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
            <div
              className="flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold shadow-sm"
              style={{ backgroundColor: job.color, color: job.textColor }}
              aria-hidden
            >
              {job.logo}
            </div>
            <div className="min-w-0">
              <p className="truncate font-medium text-foreground">
                {job.company}
              </p>
              <p className="text-sm text-muted-foreground">{job.role}</p>
            </div>
          </div>
          <p className="shrink-0 text-sm text-muted-foreground tabular-nums">
            {job.dates}
          </p>
        </li>
      ))}
    </ul>
  );
}
