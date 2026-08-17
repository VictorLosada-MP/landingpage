const problems = [
  'Publicas cuando puedes, no cuando deberías',
  'Las oportunidades se pierden porque no hay un proceso claro',
  'Cada cambio pequeño requiere pedir ayuda',
  'El contenido y las ventas siguen dependiendo de la improvisación',
]

export function Problema() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              El problema
            </p>
            <h2 className="mt-4 text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
              Ya tienes ventas. El problema es que todavía dependes demasiado de otras personas
              para generarlas.
            </h2>
          </div>

          <div className="max-w-lg">
            <p className="text-base leading-relaxed text-muted-foreground">
              Tu negocio funciona. Pero cada vez que necesitas crear contenido, lanzar algo o
              mejorar un proceso, vuelves al mismo punto: depender de alguien más.
            </p>

            <p className="mt-8 text-sm font-medium tracking-widest text-foreground uppercase">
              Mientras tanto aparecen los mismos problemas
            </p>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {problems.map((item) => (
                <li key={item} className="flex gap-4 py-4">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-foreground text-pretty">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-relaxed text-muted-foreground text-pretty">
              Y el miedo silencioso de invertir otra vez… y terminar exactamente igual.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
