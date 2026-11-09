"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/content";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/logo-emblem.png" alt="" width={52} height={49} className="brand-mark" priority />
          <span className="brand-text">
            <span>
              She Shall <em>Rise</em>
            </span>
            <small>Foundation</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label={site.name}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/get-involved#give" className="btn btn-gold btn-sm" onClick={() => setOpen(false)}>
            Give
          </Link>
        </nav>
      </div>
    </header>
  );
}
