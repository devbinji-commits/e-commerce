import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mira Market',
  description: 'Marketplace de vente en ligne inspirée d’un modèle B2B/B2C moderne.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
