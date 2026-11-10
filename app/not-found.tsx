import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ padding: "120px 0" }}>
      <div className="container narrow">
        <p className="eyebrow">Page not found</p>
        <h1>This page has moved on</h1>
        <p className="lead" style={{ marginBottom: 28 }}>
          But her story isn&rsquo;t over, and neither is yours here.
        </p>
        <Link href="/" className="btn btn-brand">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
