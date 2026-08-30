import { faqs } from '@/lib/faq'
import { absoluteUrl, siteConfig } from '@/lib/site'

/**
 * Datos estructurados (schema.org) para que Google entienda de qué va la
 * página y pueda mostrar resultados enriquecidos (FAQ, panel de marca).
 *
 * Se valida en https://search.google.com/test/rich-results
 */
export function JsonLd() {
  const personId = absoluteUrl('/#persona')
  const websiteId = absoluteUrl('/#website')

  const graph = [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: absoluteUrl('/'),
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: 'es',
      publisher: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: siteConfig.name,
      url: absoluteUrl('/'),
      image: absoluteUrl('/victor-losada.png'),
      jobTitle: 'Consultor de sistemas y herramientas digitales',
      description:
        'Construyo sistemas y herramientas digitales a medida para negocios que ya venden, y capacito a sus dueños para operarlos sin depender de terceros.',
      knowsAbout: [...siteConfig.keywords],
    },
    {
      '@type': 'WebPage',
      '@id': absoluteUrl('/#webpage'),
      url: absoluteUrl('/'),
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: 'es',
      isPartOf: { '@id': websiteId },
      about: { '@id': personId },
      primaryImageOfPage: absoluteUrl('/victor-losada.png'),
    },
    {
      '@type': 'Service',
      '@id': absoluteUrl('/#servicio'),
      name: 'Construcción de sistemas a medida para negocios que ya venden',
      serviceType: 'Consultoría e implementación de sistemas digitales',
      description:
        'Sistema a medida, herramientas y capacitación en vivo para generar ventas y contenido de forma continua, con seguimiento posterior a la entrega.',
      provider: { '@id': personId },
      areaServed: 'Global',
      availableLanguage: 'es',
      url: absoluteUrl('/'),
    },
    {
      '@type': 'FAQPage',
      '@id': absoluteUrl('/#faq'),
      inLanguage: 'es',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      // El contenido es nuestro y estático; no hay entrada de usuario que escapar.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
