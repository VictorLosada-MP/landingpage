import { ApplyButton } from './apply-button'

export function CtaIntermedio() {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
        <h2 className="text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl">
          Si tu negocio ya vende, pero todavía depende demasiado de terceros, podemos cambiar
          eso.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          No necesitas empezar de cero. Necesitas construir sobre lo que ya funciona.
        </p>
        <div className="mt-9 flex justify-center">
          <ApplyButton />
        </div>
      </div>
    </section>
  )
}
