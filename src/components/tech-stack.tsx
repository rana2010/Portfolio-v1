import { techStack } from "@/lib/site";

export function TechStack() {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {techStack.map((group) => (
        <div key={group.category}>
          <h3 className="mb-4 text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
            {group.category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-black/6 bg-white/70 px-3.5 py-1.5 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
