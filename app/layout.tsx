import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

/* ============================================
   FONT CONFIGURATION
   ============================================ */

/**
 * Roboto font configuration
 * Using multiple weights for flexibility
 */
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
});

/* ============================================
   METADATA & SEO
   ============================================ */

/**
 * Site metadata for SEO
 */
export const metadata: Metadata = {
  // Metadata Base URL - required for absolute URLs in Open Graph
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://difmark.com'),

  // Basic metadata
  title: {
    default: "Difmark - Digital Game Marketplace",
    template: "%s | Difmark",
  },
  description:
    "Buy digital games at the best prices. Steam, Xbox, PlayStation, Nintendo games and more. Trusted marketplace with instant delivery.",
  keywords: [
    "digital games",
    "game marketplace",
    "cheap games",
    "steam keys",
    "xbox games",
    "playstation games",
    "game deals",
    "instant delivery",
  ],
  authors: [{ name: "Difmark Team" }],
  creator: "Difmark",
  publisher: "Difmark",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://difmark.com",
    siteName: "Difmark",
    title: "Difmark - Digital Game Marketplace",
    description:
      "Buy digital games at the best prices. Trusted marketplace with instant delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Difmark - Digital Game Marketplace",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Difmark - Digital Game Marketplace",
    description: "Buy digital games at the best prices.",
    images: ["/og-image.jpg"],
    creator: "@difmark",
  },


  // Icons - only reference files that exist
  icons: {
    icon: "/favicon.ico",
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Verification (add your own values)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

/**
 * Viewport configuration
 */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#202835" },
    { media: "(prefers-color-scheme: dark)", color: "#171f2a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ============================================
   ROOT LAYOUT
   ============================================ */

/**
 * RootLayout Component
 *
 * Root layout wrapper that provides:
 * - Font configuration
 * - Global styles
 * - HTML structure
 *
 * @param children - Page content
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased bg-surface-base text-dm-text-primary">
        {children}
      </body>
    </html>
  );
}