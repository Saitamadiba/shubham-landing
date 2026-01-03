import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Shubham Method - Professional Vedic Astrology Reports'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
          fontFamily: 'serif',
        }}
      >
        {/* Decorative border */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: '2px solid rgba(212, 175, 55, 0.3)',
            borderRadius: 20,
            display: 'flex',
          }}
        />

        {/* Sanskrit symbol */}
        <div
          style={{
            fontSize: 60,
            color: 'rgba(212, 175, 55, 0.2)',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          ॐ
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #d4af37, #ff9933)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          Shubham Method
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#e0e0e0',
            marginBottom: 30,
            display: 'flex',
          }}
        >
          Professional Vedic Astrology Reports
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            fontSize: 20,
            color: '#888',
          }}
        >
          <span style={{ display: 'flex' }}>✦ 14-Phase Analysis</span>
          <span style={{ display: 'flex' }}>✦ Nakshatra Wisdom</span>
          <span style={{ display: 'flex' }}>✦ Dasha Timing</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            position: 'absolute',
            bottom: 50,
            fontSize: 24,
            color: 'rgba(212, 175, 55, 0.8)',
            fontStyle: 'italic',
            display: 'flex',
          }}
        >
          Ancient Wisdom, Modern Clarity
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
