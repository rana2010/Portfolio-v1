import Image from "next/image";

export function PhotoCollage() {
  return (
    <figure className="sc-card sc-card-screenshot st-reveal st-reveal-d3">
      <div className="sc-card-surface collage">
        <div className="collage-stage" aria-hidden>
          <Image
            src="/media/cairo-1.jpg"
            alt=""
            width={420}
            height={300}
            className="collage-shot collage-shot-a"
          />
          <Image
            src="/media/desk-2.jpg"
            alt=""
            width={380}
            height={280}
            className="collage-shot collage-shot-b"
          />
          <Image
            src="/media/cairo-2.jpg"
            alt=""
            width={360}
            height={260}
            className="collage-shot collage-shot-c"
          />
          <Image
            src="/media/desk-1.jpg"
            alt=""
            width={300}
            height={220}
            className="collage-shot collage-shot-d"
          />
          <span className="collage-badge collage-badge-eg">EG</span>
          <span className="collage-badge collage-badge-n">N</span>
        </div>
        <span className="sr-only">
          A collage of Cairo, design work, and interests
        </span>
      </div>
    </figure>
  );
}
