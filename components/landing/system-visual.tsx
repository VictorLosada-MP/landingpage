// Abstract, sober representation of a self-owned "system":
// a small schematic of connected modules. No gradients, no glow.

const nodes = [
  { label: 'Ventas', active: true },
  { label: 'Contenido', active: true },
  { label: 'Procesos', active: false },
  { label: 'Seguimiento', active: false },
]

export function SystemVisual() {
  return (
    <div className="relative w-full rounded-xl border border-border bg-card p-6 sm:p-8">
      {/* header row */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-primary" />
          <span className="text-sm font-medium tracking-tight">Sistema propio</span>
        </div>
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          En control
        </span>
      </div>

      {/* core */}
      <div className="rounded-lg border border-border bg-background p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Núcleo</p>
            <p className="mt-1 text-lg font-semibold tracking-tight">Tu negocio</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="h-1.5 w-24 rounded-full bg-primary" />
            <div className="h-1.5 w-16 rounded-full bg-border" />
            <div className="h-1.5 w-20 rounded-full bg-border" />
          </div>
        </div>
      </div>

      {/* connector */}
      <div className="mx-auto my-4 h-6 w-px bg-border" aria-hidden="true" />

      {/* modules */}
      <div className="grid grid-cols-2 gap-3">
        {nodes.map((node) => (
          <div
            key={node.label}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
          >
            <span
              className={
                node.active
                  ? 'size-2 rounded-full bg-primary'
                  : 'size-2 rounded-full border border-muted-foreground/40'
              }
              aria-hidden="true"
            />
            <span className="text-sm font-medium tracking-tight">{node.label}</span>
          </div>
        ))}
      </div>

      {/* footer meta */}
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>Sin dependencias externas</span>
        <span className="tabular-nums">100% tuyo</span>
      </div>
    </div>
  )
}
