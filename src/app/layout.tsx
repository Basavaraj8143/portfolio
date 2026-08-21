import type { Metadata } from "next";
import "./globals.css";
import SplashCursor from "@/components/ui/SplashCursor";
import { siteData } from "@/lib/site-data";
import Script from "next/script";

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.summary,
  metadataBase: new URL(siteData.url),
  applicationName: siteData.title,
  keywords: [
    "Basavaraj Ningasani",
    "software engineer",
    "CSE student",
    "open source contributor",
    "full-stack developer",
    "hackathon participant",
  ],
  authors: [{ name: siteData.name, url: siteData.url }],
  creator: siteData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteData.title,
    description: siteData.summary,
    siteName: siteData.title,
    locale: "en_IN",
    images: [{ url: "/logo.png", alt: `${siteData.name} logo` }],
  },
  twitter: {
    card: "summary",
    title: siteData.title,
    description: siteData.summary,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">

      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4VSET944VG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4VSET944VG');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: siteData.name,
                  url: siteData.url,
                  jobTitle: "Computer Science Student",
                  description: siteData.bio,
                  email: `mailto:${siteData.email}`,
                  sameAs: [siteData.social.github, siteData.social.linkedin],
                },
                {
                  "@type": "WebSite",
                  name: siteData.title,
                  url: siteData.url,
                  description: siteData.summary,
                  author: { "@type": "Person", name: siteData.name },
                },
              ],
            }),
          }}
        />
      </head>

      <body className="antialiased">
        <SplashCursor
          DENSITY_DISSIPATION={4}
          VELOCITY_DISSIPATION={5}
          SPLAT_RADIUS={0.1}
          SPLAT_FORCE={3000}
          PRESSURE={0.05}
          CURL={2}
        />
        {children}
      </body>

    </html>
  );
}