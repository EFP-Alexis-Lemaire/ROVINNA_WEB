export const metadata = {
  title: "ROVINNA — Apprends le vin pas à pas",
  description: "Parcours interactifs pour découvrir les régions, les cépages et les styles. Sommelier IA, dégustation guidée, mémos intelligents et communauté de passionnés.",
  metadataBase: new URL("https://rovinna.be"),
  openGraph: {
    title: "ROVINNA — Apprends le vin pas à pas",
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
