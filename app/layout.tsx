import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

const sans = Instrument_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const DESCRIPTION =
  "Full-stack engineer with 6+ years building production web apps and developer tools. Currently available for full-time, contract, and part-time work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ruhulamin.dev"),
  title: "Ruhul Amin — Full-Stack Engineer",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    siteName: "Ruhul Amin — ruhulamin.dev",
    url: "/",
    title: "Ruhul Amin — Full-Stack Engineer",
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruhul Amin — Full-Stack Engineer",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ruhul Amin",
  url: "https://ruhulamin.dev",
  image: "https://ruhulamin.dev/assets/ruhul-amin.png",
  jobTitle: "Full-Stack Engineer",
  description:
    "Full-stack engineer with 6+ years building production web apps and developer tools.",
  email: "mailto:ruhulamin.webdev@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/developerruhul",
    "https://www.upwork.com/freelancers/~01194011f7d63c1a51",
    "https://github.com/developerruhul",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
