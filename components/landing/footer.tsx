export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span className="font-medium tracking-tight text-foreground">Víctor Losada</span>
        <span>© {new Date().getFullYear()} · Sistemas a medida para negocios que ya venden</span>
      </div>
    </footer>
  )
}
