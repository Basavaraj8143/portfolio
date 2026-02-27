import type { Metadata } from "next";
import "./globals.css";
import SplashCursor from "@/components/ui/SplashCursor";

export const metadata: Metadata = {
  title: "Busss | Portfolio",
  description: "Computer Science student passionate about problem solving and building impactful projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
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
