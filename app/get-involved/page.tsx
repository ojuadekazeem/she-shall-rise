import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Give, partner, mentor, or pray with She Shall Rise Foundation.",
};

const ways = [
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
              <a
                className="btn btn-brand"
                href={`mailto:${site.email}?subject=${encodeURIComponent(w.subject)}`}
              >
                {w.action}
              </a>
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
