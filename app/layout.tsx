import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taiyar Khan — Video Editor & Motion Designer",
  description: "Professional Video Editor and Motion Graphics Designer specializing in dynamic, cinematic storytelling.",
  keywords: ["video editor", "motion designer", "color grading", "VFX", "after effects", "premiere pro"],
  openGraph: {
    title: "Taiyar Khan — Video Editor & Motion Designer",
    description: "Professional Video Editor and Motion Graphics Designer specializing in dynamic, cinematic storytelling.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body
        className=""
        style={{
          fontFamily: "var(--font-inter, system-ui, sans-serif)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
