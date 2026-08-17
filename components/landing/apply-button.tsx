import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tone = 'light' | 'dark'
type Size = 'default' | 'lg'

interface ApplyButtonProps {
  className?: string
  tone?: Tone
  size?: Size
  label?: string
}

export function ApplyButton({
  className,
  tone = 'light',
  size = 'lg',
  label = 'Aplicar ahora',
}: ApplyButtonProps) {
  return (
    <a
      href="https://pageapplication-khaki.vercel.app/"
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        size === 'lg' ? 'h-12 px-7 text-base' : 'h-11 px-6 text-sm',
        tone === 'light'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/40 focus-visible:ring-offset-background'
          : 'bg-ink-foreground text-ink hover:bg-ink-foreground/90 focus-visible:ring-ink-foreground/40 focus-visible:ring-offset-ink',
        className,
      )}
    >
      {label}
      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  )
}
