import { techStack } from "@/lib/site";

export function TechStack() {
  return (
    <>
      {techStack.map((group) => (
        <div key={group.category} className="about-stack">
          <h3>{group.category}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item.name}>
                {item.mask ? (
                  <span
                    className="about-stack-logo about-stack-mask"
                    style={{
                      WebkitMaskImage: `url(${item.icon})`,
                      maskImage: `url(${item.icon})`,
                    }}
                    aria-hidden
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="about-stack-logo"
                    src={item.icon}
                    alt=""
                    width={16}
                    height={16}
                  />
                )}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
