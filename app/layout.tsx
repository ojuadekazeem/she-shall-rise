import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import "./tailwind.css";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const script = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-script" });

// On Vercel this resolves to the production domain automatically.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.mission,
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    images: ["/logo-full.png"],
  },
};

/**
 * Lets a link choose the color theme: add ?theme=teal or ?theme=purple to any
 * page URL. The choice is kept for the rest of the visit (this browser tab).
 * Runs before the page paints, so there is no flash of the other color.
 */
const themeFromLink = `(function(){try{
var ok={purple:1,teal:1};
var p=new URLSearchParams(location.search).get("theme");
if(ok[p]){sessionStorage.setItem("ssr-theme",p);}
var t=ok[p]?p:sessionStorage.getItem("ssr-theme");
if(ok[t]){document.documentElement.setAttribute("data-theme",t);}
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme={site.theme}
      className={`${serif.variable} ${sans.variable} ${script.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeFromLink }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
