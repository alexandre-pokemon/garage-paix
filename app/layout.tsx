import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garage de la Paix — Mécanique auto au Perreux-sur-Marne",
  description:
    "Garage automobile indépendant au Perreux-sur-Marne (94170). Entretien, vidange, freinage, pneus, climatisation, diagnostic. Toutes marques. Devis gratuit.",
  keywords: [
    "garage Perreux-sur-Marne",
    "mécanicien 94170",
    "vidange Le Perreux",
    "garage Nogent",
    "réparation auto Champigny",
    "Garage de la Paix",
  ],
  openGraph: {
    title: "Garage de la Paix — Le Perreux-sur-Marne",
    description:
      "Votre garage de proximité au Perreux-sur-Marne. Entretien, réparation, diagnostic. Toutes marques.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
