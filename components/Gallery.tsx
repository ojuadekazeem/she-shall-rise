import SocialCards from "@/components/ui/card-fan-carousel";
import { gallery } from "@/lib/content";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Rotate the photo order so the same gallery opens on a different face per page. */
  startAt?: number;
  tinted?: boolean;
};

export default function Gallery({ eyebrow = "Gallery", title, intro, startAt = 0, tinted }: Props) {
  const cards = [...gallery.slice(startAt), ...gallery.slice(0, startAt)];
  return (
    <section className={`section gallery${tinted ? " tinted" : ""}`} aria-label={title}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
      </div>
      <SocialCards cards={cards} />
      <p className="gallery-note">
        Photos are illustrative and do not depict girls in the Foundation&rsquo;s care.
      </p>
    </section>
  );
}
