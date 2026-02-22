import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
