import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Deployed as a static export / zipped bundle without a guaranteed
    // `sharp` binary on the target host, so we skip Next's server-side
    // image optimization pipeline entirely and serve originals directly.
    // This avoids images silently failing to render when the
    // optimization endpoint has no image processor available.
    unoptimized: true,
    // Local, self-authored SVG artwork (e.g. the hero illustration) needs
    // this explicitly enabled — next/image blocks SVG optimization by
    // default as an XSS precaution for untrusted/remote sources. Safe
    // here since every SVG served is our own static asset, not
    // user-supplied or remote.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
