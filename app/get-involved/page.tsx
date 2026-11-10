import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Nominate a girl who needs help, or give, partner, mentor, or pray with She Shall Rise Foundation.",
};

type Way = {
  id: string;
  title: string;
  text: string;
  action: string;
  subject: string;
  /** Opens this link instead of an email when set. */
  href?: string;
};

const ways: Way[] = [
  {
    id: "nominate",
    title: "Nominate a Girl",
    text: "Know a girl whose circumstances put her at risk of exploitation, early marriage, domestic servitude, trafficking, abuse, or losing her education? Tell us about her, and a member of our team will reach out to you.",
    action: "Nominate a girl",
    subject: "Nominating a girl",
    href: site.nominateFormUrl,
  },
  {
    id: "give",
    title: "Give",
    text: "Your gift funds school fees, safe accommodation, counseling, mentorship, and family support. Every resource is stewarded with accountability and transparency.",
    action: "Ask about giving",
    subject: "I'd like to give",
  },
  {
    id: "partner",
    title: "Partner",
    text: "Schools, churches, community leaders, and service organizations help us find girls at risk before exploitation does. Let's work together.",
    action: "Become a partner",
    subject: "Partnership enquiry",
  },
  {
    id: "mentor",
    title: "Mentor",
    text: "Qualified professionals and trained mentors remind each girl: you are valuable, you are capable, your story is not over.",
    action: "Offer your skills",
    subject: "Volunteering as a mentor",
  },
  {
    id: "pray",
    title: "Pray",
    text: "Our work is rooted in faith. Stand with us in prayer for every girl, every family, and every person serving them.",
    action: "Join our prayer team",
    subject: "Prayer partner",
  },
];

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Stand in the gap with us"
        intro="Rescue is only the beginning. It takes a community to help a girl heal, learn, and build a future of her own."
      />

      <section className="section">
        <div className="container ways-grid">
          {ways.map((w) => (
            <div key={w.id} id={w.id} className="card way">
              <h2>{w.title}</h2>
              <p>{w.text}</p>
              {w.href ? (
                <a className="btn btn-brand" href={w.href} target="_blank" rel="noopener noreferrer">
                  {w.action}
                </a>
              ) : (
                <a
                  className="btn btn-brand"
                  href={`mailto:${site.email}?subject=${encodeURIComponent(w.subject)}`}
                >
                  {w.action}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section tinted">
        <div className="container narrow center">
          <p className="eyebrow">Contact Us</p>
          <h2>We would love to hear from you</h2>
          <p>
            For giving, partnerships, volunteering, or to refer a girl who may be at risk, email us
            at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <p className="small-note">
            If a child is in immediate danger, please contact your local emergency services or child
            protection authorities first.
          </p>
        </div>
      </section>
    </>
  );
}
