'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqs } from '@/lib/faq'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Preguntas frecuentes
        </p>
        <h2 className="mt-4 text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
          Lo que probablemente te estás preguntando.
        </h2>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left outline-none focus-visible:text-primary"
                  >
                    <span className="text-base font-medium tracking-tight text-pretty sm:text-lg">
                      {faq.q}
                    </span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-muted-foreground transition-transform duration-200',
                        isOpen && 'rotate-45',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={cn(
                    'grid transition-all duration-200',
                    isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-11 text-base leading-relaxed text-muted-foreground text-pretty">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
