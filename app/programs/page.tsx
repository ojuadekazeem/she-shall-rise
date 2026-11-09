import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Rescue & protection, safe haven, education, restoration & mentorship, independence, and family preservation.",
};

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="From today's crisis to tomorrow's choices"
        intro="Six programs that rescue, protect, educate, restore, and empower each girl, and strengthen her family wherever it is safe to do so."
      />

      <section className="section">
        <div className="container program-list">
          {programs.map((p) => (
            <article key={p.slug} id={p.slug} className="program">
              <div className="program-num" aria-hidden="true">
                {String(p.number).padStart(2, "0")}
              </div>
              <div>
                <h2>{p.title}</h2>
                <p className="program-sub">{p.subtitle}</p>
                {p.body.map((b) => (
                  <p key={b}>{b}</p>
                ))}
                {p.list && (
                  <ul className="tag-list">
                    {p.list.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                )}
                {p.closing && <p className="program-closing">{p.closing}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container narrow center">
          <h2>Help a girl rise</h2>
          <p>Every program is made possible by people who choose to stand in the gap.</p>
          <Link href="/get-involved" className="btn btn-gold">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
