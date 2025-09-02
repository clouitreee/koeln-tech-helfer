import React from 'react'

type Props = {
  title?: string
  description?: string
  url?: string
  image?: string
}

export default function Seo({
  title = 'Technikhilfe in Köln | Claveon / Köln Tech Helfer',
  description = 'Vor-Ort Technikhilfe in Köln: WLAN, PCs, Smartphones, Drucker, NAS. Schnelle Hilfe, klare Preise, WhatsApp Termin.',
  url = 'https://claveon.de/',
  image = '/og-image.jpg'
}: Props) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Claveon" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
