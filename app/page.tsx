import Link from "next/link";
import Image from "next/image";
import { pillars, programs, promise, site, values } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-badge">
            <Image src="/logo-emblem.png" alt="" width={136} height={129} priority />
          </div>
          <p className="eyebrow light">She Shall Rise Foundation</p>
          <h1>
            Rescue Her. Restore Her.
            <br />
            <em>Empower Her to Rise.</em>
          </h1>
          <p className="hero-lead">
            Poverty should never determine a girl&rsquo;s destiny, and vulnerability should never
            become an invitation for exploitation.
          </p>
          <p className="script hero-script">Her tomorrow begins today.</p>
          <div className="hero-actions">
            <Link href="/get-involved#give" className="btn btn-gold">
              Support Her Rise
            </Link>
            <Link href="/about" className="btn btn-outline-light">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="pillars-band" aria-label="What we do">
        <div className="container pillars">
          {pillars.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Our Vision</p>
            <h2>A world where every vulnerable girl rises</h2>
            <p>{site.vision}</p>
          </div>
          <div>
            <p className="eyebrow">Our Mission</p>
            <p>{site.mission}</p>
          </div>
        </div>
      </section>

      <section className="belief">
        <div className="container narrow">
          <p className="eyebrow light">Our Core Belief</p>
          <blockquote>{site.coreBelief}</blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our Programs</p>
            <h2>From rescue to independence</h2>
            <p>Six programs that walk beside a girl at every stage of her journey.</p>
          </div>
          <div className="card-grid">
            {programs.map((p) => (
              <Link key={p.slug} href={`/programs#${p.slug}`} className="card program-card">
                <span className="card-num">{String(p.number).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our Core Values</p>
            <h2>What guides every decision</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section promise">
        <div className="container narrow center">
          <p className="eyebrow">Our Promise to Every Girl</p>
          <ul className="promise-list">
            {promise.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="promise-close">
            You were created for more.
            <strong>
              You Shall <span className="script">Rise.</span>
            </strong>
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container narrow center">
          <h2>Stand in the gap with us</h2>
          <p>
            Between vulnerability and exploitation, between hopelessness and opportunity, your
            support helps a girl write a different ending to her story.
          </p>
          <div className="hero-actions">
            <Link href="/get-involved#give" className="btn btn-gold">
              Give Today
            </Link>
            <Link href="/get-involved" className="btn btn-outline-light">
              Ways to Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
