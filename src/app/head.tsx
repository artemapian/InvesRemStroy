// app/head.tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ИнвестРемСтрой",
  "url": "https://spec-tehn.ru/",
  "logo": "https://spec-tehn.ru/favicon.ico",
  "telephone": "+7 (960) 356-18-30",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "пр-т Строителей, д. 60, оф 201б",
    "addressLocality": "Саратов",
    "postalCode": "410064",
    "addressCountry": "RU"
  },
};

export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
