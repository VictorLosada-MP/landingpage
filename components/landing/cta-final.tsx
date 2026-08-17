import { ApplyButton } from './apply-button'

export function CtaFinal() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <h2 className="mx-auto max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Deja de construir un negocio que depende de otras personas para funcionar.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Si ya tienes ventas, el siguiente paso no necesariamente es hacer más. Puede ser tener
          más control sobre cómo vendes, cómo produces y cómo operas.
        </p>

        <div className="mt-10 flex justify-center">
          <ApplyButton tone="dark" />
        </div>

        <p className="mx-auto mt-12 max-w-md border-t border-ink-border pt-8 text-sm leading-relaxed tracking-tight text-ink-muted">
          Construye el sistema. Aprende a utilizarlo. Quédate con la capacidad.
        </p>
      </div>
    </section>
  )
}
