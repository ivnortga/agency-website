export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Moon Productions",
    "description": "Producción audiovisual profesional para artistas en Canarias. Especialistas en videoclips, visualizers y contenido musical creativo.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Canarias",
      "addressCountry": "ES"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Canarias"
    },
    "priceRange": "€€",
    "image": "https://moonproductions.com/logo.png",
    "telephone": "+34-XXX-XXX-XXX",
    "email": "info@moonproductions.com"
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "VEINTIDOS - Ojeda (Video Oficial)",
    "description": "Escrito e interpretado: Kilian Naranjo Ojeda. Producción: Yanez. Mezclado y Masterizado: JuniorGC. FilmMaker: imloga. Dirigido: Moon Productions.",
    "thumbnailUrl": "https://img.youtube.com/vi/8nTNf3L8e1o/maxresdefault.jpg",
    "uploadDate": "2026-01-15",
    "contentUrl": "https://www.youtube.com/watch?v=8nTNf3L8e1o",
    "embedUrl": "https://www.youtube.com/embed/8nTNf3L8e1o",
    "creator": {
      "@type": "Organization",
      "name": "Moon Productions"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
    </>
  );
}
