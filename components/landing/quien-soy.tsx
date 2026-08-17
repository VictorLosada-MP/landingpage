import Image from 'next/image'

export function QuienSoy() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src="/victor-losada.png"
                alt="Retrato de Víctor Losada"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Quién soy
            </p>
            <h2 className="mt-4 text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
              Soy Víctor Losada.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Trabajo en la construcción de sistemas y herramientas digitales para negocios que
              ya están funcionando, pero necesitan una estructura más sólida para seguir
              creciendo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Mi enfoque es simple: construir algo útil, enseñarte a utilizarlo y dejarte con la
              capacidad de seguir adelante sin depender permanentemente de mí.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
