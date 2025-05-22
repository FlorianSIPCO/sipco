import type { Metadata } from "next";
import { Barlow, Orbitron, Montserrat } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIPCO",
  description: "Cybersécurité, hébergement, maintenance et développement web",
   metadataBase: new URL('https://sipco.fr/'),
   keywords: "SIPCO, Informatique, Vitré, Bretagne, Ile-et-Vilaine, Ile et Vilaine, ",
  robots: "index, follow", // Google
  openGraph: { // Facebook, LinkedIn, Discord
    type: "website",
    siteName: "SIPCO Gaming",
    title: "",
    description: "",
    url: "https://sipco.fr/",
    images: [
      {
        url: "https://sipco.fr/images/logo.jpg", // Image de prévisualisation pour les réseaux sociaux
        width: 1200,
        height: 630,
        alt: "SIPCO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    images: ["https://sipco.fr/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://sipco.fr/",
    languages: {
      'fr-FR': 'https://sipco.fr'
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${barlow.variable} ${orbitron.variable} ${montserrat.variable}`}>
      <body className='antialiased'>
        {children}
      </body>
    </html>
  );
}
