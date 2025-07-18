import type { Metadata } from 'next'
import Contact from '@/components/Contact'
import { breadcrumbSchemaContact, localBusinessSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Kontak Dutamover - Jasa Pindahan',
  description: 'Hubungi Dutamover untuk konsultasi gratis jasa pindahan. Call 0815-1032-6123, WhatsApp 24/7. Kantor BSD Tangerang.',
  keywords: ['kontak dutamover', 'telepon jasa pindahan', 'alamat kantor pindahan', 'whatsapp pindahan'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Kontak Dutamover - Jasa Pindahan',
    description: 'Hubungi Dutamover untuk konsultasi gratis. Call 0815-1032-6123, WhatsApp 24/7, kantor BSD Tangerang.',
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
