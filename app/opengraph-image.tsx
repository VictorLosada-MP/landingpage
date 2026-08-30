import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = siteConfig.shortTitle
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f8f8f6',
          padding: '72px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#6b6b63', letterSpacing: 2 }}>
          SISTEMAS A MEDIDA PARA NEGOCIOS QUE YA VENDEN
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 68,
            lineHeight: 1.1,
            color: '#1a1a18',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex' }}>Tu negocio ya vende.</div>
          <div style={{ display: 'flex', color: '#6b6b63' }}>
            Pero sigue limitado sin un sistema propio.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 32,
            color: '#1a1a18',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: '#1a1a18',
            }}
          />
          {siteConfig.name}
        </div>
      </div>
    ),
    size,
  )
}
