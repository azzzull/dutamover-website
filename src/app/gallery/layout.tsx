import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galeri - Dutamover.com | Dokumentasi Proyek Jasa Pindahan Terpercaya',
  description: 'Lihat galeri foto dan video proyek pindahan rumah, kantor, dan kost yang telah ditangani oleh Dutamover.com. Dokumentasi lengkap hasil kerja profesional kami.',
  keywords: [
    'galeri dutamover',
    'foto pindahan',
    'dokumentasi jasa pindah',
    'hasil kerja dutamover',
    'portofolio pindahan',
    'video pindahan',
    'testimoni visual',
    'galeri jasa pindah jakarta'
  ],
  openGraph: {
    title: 'Galeri - Dutamover.com | Dokumentasi Proyek Jasa Pindahan',
    description: 'Dokumentasi lengkap proyek pindahan rumah, kantor, dan kost yang telah ditangani secara profesional.',
    url: 'https://www.dutamover.com/gallery',
    siteName: 'Dutamover.com',
    images: [
      {
        url: '/images/gallery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Galeri Dutamover - Dokumentasi Proyek Pindahan'
      }
    ],
    locale: 'id_ID',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeri - Dutamover.com | Dokumentasi Proyek Jasa Pindahan',
    description: 'Dokumentasi lengkap proyek pindahan rumah, kantor, dan kost yang telah ditangani secara profesional.',
    images: ['/images/gallery-twitter.jpg']
  },
  alternates: {
    canonical: 'https://www.dutamover.com/gallery'
  }
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
