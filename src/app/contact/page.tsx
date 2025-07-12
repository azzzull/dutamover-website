import type { Metadata } from 'next'
import Contact from '@/components/Contact'
import { breadcrumbSchemaContact, localBusinessSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Kontak Dutamover - Hubungi Jasa Pindahan Terpercaya Jakarta',
  description: 'Hubungi Dutamover untuk konsultasi gratis jasa pindahan. Telepon 0815-1032-6123, WhatsApp 24/7. Kantor di Plaza Cordoba BSD Tangerang Selatan.',
  keywords: ['kontak dutamover', 'telepon jasa pindahan', 'alamat kantor pindahan jakarta', 'whatsapp pindahan'],
  openGraph: {
    title: 'Kontak Dutamover - Hubungi Jasa Pindahan Terpercaya Jakarta',
    description: 'Hubungi Dutamover untuk konsultasi gratis. Telepon, WhatsApp, atau kunjungi kantor kami di BSD Tangerang.',
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchemaContact),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <main className="pt-20">
        <Contact />
      </main>
    </>
  )
}
