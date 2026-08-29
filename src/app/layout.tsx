import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { StickyMobileActionBar } from "@/components/shared/StickyMobileActionBar";

/**
 * Fonts — Section 7 (Configure Fonts).
 *
 * Target typefaces per the Design System are Fraunces (display) and
 * Plus Jakarta Sans (body/UI), self-hosted via next/font/google for zero
 * layout shift and font-display: swap.
 *
 * This sandbox has no outbound access to fonts.googleapis.com (network
 * allowlist is restricted to package registries), so next/font/google's
 * build-time fetch fails here. The --font-fraunces / --font-jakarta CSS
 * variables are defined directly in globals.css with a matched fallback
 * stack instead, so the site renders correctly now. On a machine/CI with
 * normal internet access, swap this block back to next/font/google with
 * the same variable names — see the DEPLOY NOTE at the bottom of this file.
 */
const fontVariableClass = "font-vars";

/**
 * Metadata — Section 10 (Configure Metadata).
 * Base/default metadata for the site. Individual routes override via
 * their own generateMetadata/metadata export per the SEO architecture.
 * Values left as placeholders — no business content per this task's scope.
 */
export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s",
  },
  description: "",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    locale: "en_PK",
    title: "",
    description: "",
    siteName: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f5c5c",
};

/**
 * Root layout — Section 11 (Create reusable layout).
 * Composes the persistent Header, Footer, and mobile sticky action bar
 * around every route's page content.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariableClass}>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileActionBar />
      </body>
    </html>
  );
}

/**
 * DEPLOY NOTE — re-enabling next/font/google:
 *
 *   import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
 *
 *   const fraunces = Fraunces({
 *     subsets: ["latin"],
 *     weight: ["400", "500", "600"],
 *     variable: "--font-fraunces",
 *     display: "swap",
 *   });
 *
 *   const jakarta = Plus_Jakarta_Sans({
 *     subsets: ["latin"],
 *     weight: ["400", "500", "600", "700"],
 *     variable: "--font-jakarta",
 *     display: "swap",
 *   });
 *
 * Then replace `fontVariableClass` above with
 * `${fraunces.variable} ${jakarta.variable}` and remove the manual
 * @font-face-free declarations in globals.css if you want next/font's
 * self-hosted files instead of the system fallback stack.
 */
