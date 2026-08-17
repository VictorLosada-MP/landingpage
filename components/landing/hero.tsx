import { ApplyButton } from './apply-button'
import { SystemVisual } from './system-visual'

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-32">
        <div className="max-w-xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Sistemas a medida para negocios que ya venden
          </p>

          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Tu negocio ya vende.
            <span className="mt-2 block text-muted-foreground">
              Pero sigue limitado porque no tienes un sistema propio.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Deja de improvisar y de depender de terceros. Te construyo el sistema a medida
            {' + '}las herramientas y la capacidad real para que generes ventas y contenido de
            forma continua… sin volver a necesitar a nadie.
          </p>

          <div className="mt-9">
            <ApplyButton />
          </div>

          {/* <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Solo para dueños de negocio que ya venden y quieren dejar de depender de terceros.
          </p> */}
        </div>

        <div className="lg:pl-4">
          <SystemVisual />
        </div>
      </div>
    </section>
  )
}
