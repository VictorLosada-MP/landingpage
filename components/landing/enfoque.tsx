const steps = [
  {
    step: 'Construyo',
    text: 'Primero construyo el sistema que tu negocio realmente necesita.',
  },
  {
    step: 'Equipo',
    text: 'Después te doy las herramientas para operarlo.',
  },
  {
    step: 'Enseño',
    text: 'Y te enseño a manejarlo con claridad.',
  },
]

export function Enfoque() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="text-xs font-medium tracking-widest text-ink-muted uppercase">
          El enfoque
        </p>

        <h2 className="mt-6 max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          No te entrego solo un sistema.
          <span className="mt-2 block text-ink-muted">Te dejo con la capacidad de usarlo.</span>
        </h2>

        <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            La mayoría de soluciones terminan cuando se entrega el proyecto. Aquí el trabajo no
            termina en la entrega.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-ink-border bg-ink-border sm:grid-cols-3">
          {steps.map((item, index) => (
            <li key={item.step} className="bg-ink p-7 sm:p-8">
              <span className="font-mono text-sm text-ink-muted tabular-nums">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.step}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted text-pretty">
                {item.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 max-w-2xl border-t border-ink-border pt-8 text-lg font-medium tracking-tight text-balance sm:text-xl">
          El objetivo no es crear una nueva dependencia. Es reducirla. Que salgas con
          infraestructura + herramientas + conocimiento real.
        </div>
      </div>
    </section>
  )
}
