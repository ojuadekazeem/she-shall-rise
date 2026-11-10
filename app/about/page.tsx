import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import { declaration, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story",
  description: "She Shall Rise Foundation was born from both a personal journey and a divine calling.",
};

const mustHave = [
  "A girl must also have somewhere safe to belong.",
  "She must have an opportunity to return to school.",
  "She must be surrounded by adults who protect rather than exploit her.",
  "She must learn that what happened to her does not define her.",
  "She must be given the tools to become educated, independent, confident, and capable of making choices about her own future.",
];

const weWill = ["We will rescue.", "We will protect.", "We will educate.", "We will restore.", "We will empower."];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A personal journey and a divine calling"
        intro="She Shall Rise Foundation was born from both."
      />

      <article className="section">
        <div className="container narrow prose">
          <p>
            Years before the Foundation was established, its founder experienced firsthand how family
            hardship can dramatically alter the course of a young girl&rsquo;s life. That experience
            created an understanding that goes beyond sympathy: an understanding of what it means for
            circumstances beyond a child&rsquo;s control to threaten her dreams, opportunities, and
            future.
          </p>
          <p>Then came a dream that would give that experience a greater purpose.</p>

          <p className="pull">
            In the dream, the instruction was clear: <strong>rescue the girls.</strong>
          </p>

          <p>
            Girls whose families, because of poverty, crisis, instability, or other difficult
            circumstances, could no longer adequately protect or provide for them. Girls who might
            consequently be sent away as domestic workers, pushed into prostitution or exploitation,
            forced into early marriages, denied an education, trafficked, abused, or placed in
            circumstances they never chose for themselves.
          </p>
          <p>That dream became a calling.</p>
          <p>
            She Shall Rise Foundation was created from the conviction that{" "}
            <strong>
              poverty should never determine a girl&rsquo;s destiny, and vulnerability should never
              become an invitation for exploitation.
            </strong>
          </p>

          <h2>Rescue is only the beginning</h2>
          <ul className="check-list">
            {mustHave.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <p>
            And above all, she must know that <strong>God has not forgotten her.</strong>
          </p>
          <p>
            She Shall Rise Foundation therefore exists to stand in the gap: between vulnerability and
            exploitation, between hopelessness and opportunity, and between what circumstances have
            dictated and what a girl can still become.
          </p>

          <div className="we-will">
            {weWill.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
          <p className="pull center">
            And by the grace of God, <strong>she shall rise.</strong>
          </p>
        </div>
      </article>

      <section className="section tinted">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Vision</p>
            <p>{site.vision}</p>
          </div>
          <div>
            <p className="eyebrow">Mission</p>
            <p>{site.mission}</p>
          </div>
        </div>
      </section>

      <Gallery
        eyebrow="The Girls We Rise For"
        title="She is the reason"
        intro="Poverty should never determine a girl's destiny, and vulnerability should never become an invitation for exploitation."
        startAt={4}
      />

      <section className="declaration">
        <div className="container narrow center">
          <p className="eyebrow light">Our Declaration</p>
          <div className="declaration-cols">
            <ul>
              {declaration.notDefined.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <ul className="will">
              {declaration.will.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <p className="declaration-final">
            She Shall <span className="script">Rise.</span>
          </p>
          <blockquote className="verse">
            &ldquo;{site.scripture.text}&rdquo;
            <cite>{site.scripture.ref}</cite>
          </blockquote>
          <Link href="/programs" className="btn btn-gold">
            See How We Help
          </Link>
        </div>
      </section>
    </>
  );
}
