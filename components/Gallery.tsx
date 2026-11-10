import SphereGallery from "@/components/SphereGallery";
import { gallery } from "@/lib/content";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Rotate the photo order so each page's sphere is arranged differently. */
  startAt?: number;
  tinted?: boolean;
};

/** Each photo appears this many times so the sphere looks full. */
const REPEATS = 2;

export default function Gallery({ eyebrow = "Gallery", title, intro, startAt = 0, tinted }: Props) {
  const ordered = [...gallery.slice(startAt), ...gallery.slice(0, startAt)];
  const images = Array.from({ length: REPEATS }, (_, r) =>
    ordered.map((p, i) => ({
      id: `${r}-${i}`,
      src: p.imgUrl,
      alt: p.alt,
      title: p.title,
    }))
  ).flat();

  return (
    <section className={`section gallery${tinted ? " tinted" : ""}`} aria-label={title}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        <SphereGallery images={images} />
        <p className="gallery-note">
          Photos are illustrative and do not depict girls in the Foundation&rsquo;s care.
        </p>
      </div>
    </section>
  );
}
