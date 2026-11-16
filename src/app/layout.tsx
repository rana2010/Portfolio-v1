import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { DevTextEditor } from "@/components/dev-text-editor";
import { DottedGlowLayer } from "@/components/dotted-glow-layer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: `${site.name} is an Egyptian product designer based in ${site.location}.`,
};

export const viewport: Viewport = {
  themeColor: "#f4f4f2",
};

const themeInitScript = `(() => {
  try {
    const stored = window.localStorage.getItem("rana-theme");
    const theme = stored === "dark" || stored === "light" ? stored : "light";
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.dataset.theme = theme;
  } catch (_) {}
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full`} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="studio min-h-full">
        <DottedGlowLayer />
        <SiteHeader />
        <main id="portfolio-content" className="page-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <DevTextEditor />
      </body>
    </html>
  );
}
