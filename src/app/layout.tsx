import type { Metadata } from "next";
import "./globals.css";
import SplashCursor from "@/components/ui/SplashCursor";
import { siteData } from "@/lib/site-data";
import Script from "next/script";

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.summary,
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