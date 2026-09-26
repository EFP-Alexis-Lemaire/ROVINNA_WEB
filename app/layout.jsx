export const metadata = {
  title: "ROVINNA — Apprends à déguster comme un pro",
  description: "Ton sommelier IA personnel : choisis ton vin, analyse une bouteille en photo, mémorise efficacement et partage ta passion du vin.",
  metadataBase: new URL("https://rovinna.be"),
  openGraph: {
    title: "ROVINNA — Apprends à déguster comme un pro",
    description: "Sommelier IA, dégustation guidée, mémos intelligents et communauté de passionnés.",
    type: "website",
  },
  icons: {
    icon: "/goutte.svg",
    apple: "/goutte.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,600;9..144,0,700;9..144,1,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
