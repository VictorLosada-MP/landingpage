/**
 * Configuración central del sitio.
 *
 * IMPORTANTE: `url` debe ser el dominio real y definitivo de la landing,
 * exactamente como lo vas a dar de alta en Google Search Console
 * (con https, sin barra final). Se puede sobreescribir sin tocar el código
 * con la variable de entorno NEXT_PUBLIC_SITE_URL.
 */
const FALLBACK_URL = 'https://victorlosada.com'

/**
 * Token de la etiqueta <meta name="google-site-verification"> que da Google
 * Search Console para verificar la propiedad del sitio. Se puede sobreescribir
 * con la variable de entorno GOOGLE_SITE_VERIFICATION.
 */
const GOOGLE_SITE_VERIFICATION = 'u7wg8DBVUoBpyyEcSMK-7a3EJryD9vjCC2OMhLK2jvM'

function normalize(url: string) {
  return url.replace(/\/+$/, '')
}

export const siteConfig = {
  url: normalize(process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_URL),
  name: 'Víctor Losada',
  title: 'Víctor Losada — Construye tu sistema. Deja de depender de terceros',
  shortTitle: 'Víctor Losada · Sistemas a medida para negocios que ya venden',
  description:
    'Te construyo el sistema a medida, las herramientas y la capacidad real para generar ventas y contenido de forma continua, sin volver a depender de nadie.',
  locale: 'es_ES',
  googleSiteVerification:
    process.env.GOOGLE_SITE_VERIFICATION || GOOGLE_SITE_VERIFICATION,
  applyUrl: 'https://pageapplication-khaki.vercel.app/',
  keywords: [
    'sistemas a medida',
    'automatización para negocios',
    'herramientas digitales para empresas',
    'consultoría de sistemas',
    'generar ventas de forma continua',
    'sistema de contenido',
    'Víctor Losada',
  ],
} as const

export function absoluteUrl(path = '/') {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}
