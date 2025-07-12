import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import WorkProcess from '@/components/WorkProcess'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import { movingServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dutamover - Jasa Pindahan Terpercaya & Profesional Jakarta',
  description: 'Jasa pindahan terpercaya #1 di Jakarta dengan pengalaman 10+ tahun. Layanan pindahan rumah, kantor, packing profesional. Gratis survey! ☎️ 0815-1032-6123',
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
    title: 'Dutamover - Jasa Pindahan Terpercaya #1 Jakarta',
    description: 'Jasa pindahan profesional dengan pengalaman 10+ tahun. Layanan pindahan rumah, kantor, packing. Gratis survey & konsultasi!',
    url: 'https://www.dutamover.com',
    images: [
      {
        url: '/images/dutamover-moving-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Dutamover - Jasa Pindahan Profesional Jakarta',
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
