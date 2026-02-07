import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moon Productions | Videoclips y Visualizers en Canarias",
  description: "Producción audiovisual profesional para artistas en Canarias. Especialistas en videoclips, visualizers y contenido musical creativo. Desde 100€.",
  keywords: "videoclips canarias, produccion audiovisual, visualizers, moon productions, videoclips trap, videoclips urbanos, produccion musical canarias",
  openGraph: {
    title: "Moon Productions | Videoclips y Visualizers en Canarias",
    description: "Producción audiovisual profesional para artistas en Canarias",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} overflow-x-hidden relative`} >
        <Menu />
        {children}
        <Footer />
        </body>
    </html>
  );
}
