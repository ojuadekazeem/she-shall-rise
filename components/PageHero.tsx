type Props = { eyebrow: string; title: string; intro?: string };

export default function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}
