import Link from "next/link";
import { navLinks, site } from "@/lib/content";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">
            <Image src="/she-shall-rise-logo.png" alt={site.name} width={208} height={211} />
          </div>
          <p className="footer-tagline">{site.tagline}</p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
          <blockquote className="footer-verse">
            &ldquo;{site.scripture.text}&rdquo;
            <cite>{site.scripture.ref}</cite>
          </blockquote>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
