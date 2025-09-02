import React from 'react'
import Seo from '@/components/Seo'

export default function Home() {
  return (
    <main id="main" className="container mx-auto px-4 py-10">
      <Seo
        title="PC & WLAN Hilfe in Köln | Claveon"
        description="Schnelle Vor-Ort Hilfe für Internet, WLAN, PCs, Smartphones und Drucker in Köln."
        url="https://claveon.de/"
        image="/og-image.jpg"
      />
      <h1 className="text-3xl font-bold">Technikhilfe in Köln</h1>
      {/* contenido */}
    </main>
  )
}
