import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Víctor Losada — Construye tu sistema. Deja de depender de terceros',
  description:
    'Te construyo el sistema a medida, las herramientas y la capacidad real para generar ventas y contenido de forma continua, sin volver a depender de nadie.',
  generator: '',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f8f6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
