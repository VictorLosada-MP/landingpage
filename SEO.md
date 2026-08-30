# SEO e indexación en Google Search Console

## 1. Configura el dominio (obligatorio, un solo sitio)

Todo el SEO (canonical, sitemap, robots, Open Graph) se genera a partir de una
única URL base. Ponla en `lib/site.ts` → `FALLBACK_URL`, o mejor, define la
variable de entorno en tu hosting (en Vercel: *Settings → Environment Variables*):

```
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Sin barra final y con el `https://` del dominio **definitivo**. Si esto no
coincide con el dominio real, Google recibirá canonicals y un sitemap que
apuntan a otro sitio y no indexará bien.

## 2. Verifica la propiedad en Search Console

**Ya está hecho en el código.** La etiqueta de verificación se inyecta sola en
el `<head>` de todas las páginas:

```html
<meta name="google-site-verification" content="u7wg8DBVUoBpyyEcSMK-7a3EJryD9vjCC2OMhLK2jvM" />
```

El token vive en `lib/site.ts` (`GOOGLE_SITE_VERIFICATION`). Solo tienes que
desplegar y pulsar **Verificar** en Search Console.

Si algún día Google te da un token distinto, cámbialo en `lib/site.ts` o
defínelo como variable de entorno `GOOGLE_SITE_VERIFICATION` (la env var manda
sobre el valor del código).

> Nota: la verificación por **etiqueta HTML** valida un prefijo de URL concreto
> (p. ej. `https://tudominio.com/`). Si quieres cubrir de golpe `www`, sin
> `www`, http y https, añade además una **propiedad de dominio** verificada por
> DNS con el registro `TXT` que te da Google.

## 3. Envía el sitemap

En Search Console → **Sitemaps**, envía:

```
sitemap.xml
```

Se genera en `app/sitemap.ts` y ya queda declarado dentro de `/robots.txt`.

## 4. Pide la indexación de la home

Search Console → **Inspección de URLs** → pega la URL de la home → *Solicitar
indexación*. Suele tardar de unas horas a unos días.

## 5. Comprueba los resultados enriquecidos

Los datos estructurados (`components/seo/json-ld.tsx`) declaran `WebSite`,
`Person`, `WebPage`, `Service` y `FAQPage`. Valídalos en:

https://search.google.com/test/rich-results

> Las preguntas del FAQ viven en `lib/faq.ts` y las usan tanto la sección
> visible como el structured data. Google exige que coincidan literalmente,
> así que edítalas **solo** en ese archivo.

## Qué se genera automáticamente

| Ruta | Origen |
| --- | --- |
| `/robots.txt` | `app/robots.ts` |
| `/sitemap.xml` | `app/sitemap.ts` |
| `/opengraph-image` | `app/opengraph-image.tsx` (1200×630) |
| `<head>` completo | `app/layout.tsx` + `lib/site.ts` |
| JSON-LD | `components/seo/json-ld.tsx` |
