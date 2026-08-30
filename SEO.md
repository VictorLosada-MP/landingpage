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

Ve a https://search.google.com/search-console y añade una propiedad.

- **Recomendado — propiedad de dominio (DNS):** cubre `www`, sin `www`, http y
  https de golpe. Google te da un registro `TXT`; lo añades en tu proveedor de
  DNS. No requiere tocar el código.
- **Alternativa — etiqueta HTML:** Google te da un token
  (`<meta name="google-site-verification" content="TOKEN">`). Define la variable
  de entorno y se inyecta sola en el `<head>`:

  ```
  GOOGLE_SITE_VERIFICATION=TOKEN
  ```

  Despliega y pulsa *Verificar*.

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
