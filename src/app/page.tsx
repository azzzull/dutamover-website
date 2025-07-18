import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import WorkProcess from '@/components/WorkProcess'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import { movingServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dutamover - Jasa Pindahan Terpercaya',
  description: 'Jasa pindahan rumah & kantor terpercaya. Pengalaman 10+ tahun, tim profesional, harga kompetitif. Call 0815-1032-6123',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'jasa pindahan jakarta',
    'jasa pindahan rumah jakarta',
    'jasa pindahan kantor jakarta', 
    'jasa pindahan terdekat',
    'jasa pindahan terpercaya',
    'jasa pindahan murah',
    'jasa packing jakarta',
    'dutamover',
    'pindahan profesional',
    'moving service jakarta',
    'jasa pindahan BSD',
    'jasa angkut barang',
    'jasa pindahan tangerang',
    'jasa pindahan bekasi',
    'jasa pindahan depok',
    'jasa pindahan bogor'
  ],
  openGraph: {
    title: 'Dutamover - Jasa Pindahan Terpercaya #1',
    description: 'Jasa pindahan profesional dengan pengalaman 10+ tahun. Layanan pindahan rumah, kantor, packing. Gratis survey & konsultasi!',
    url: 'https://www.dutamover.com',
    images: [
      {
        url: '/images/dutamover-moving-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Dutamover - Jasa Pindahan Profesional',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(movingServiceSchema),
        }}
      />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WorkProcess />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
