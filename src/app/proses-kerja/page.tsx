import type { Metadata } from 'next'
import Link from 'next/link'
import { FaSearchLocation, FaBoxOpen, FaTruck, FaHome, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { workProcessSchema, organizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Proses Kerja Jasa Pindahan Profesional - Dutamover',
  description: 'Pelajari proses kerja sistematis Dutamover: Survey, Packing, Pemindahan, dan Penyusunan Kembali. Metode terpercaya dengan standar internasional.',
  keywords: ['proses kerja pindahan', 'tahapan pindahan', 'survey pindahan', 'packing profesional', 'cara kerja dutamover'],
  openGraph: {
    title: 'Proses Kerja Jasa Pindahan Profesional - Dutamover',
    description: 'Proses kerja sistematis dan terstruktur untuk memastikan pindahan Anda berjalan lancar dan efisien.',
  },
}

const processes = [
  {
    id: 1,
    icon: FaSearchLocation,
    title: 'Survey Lokasi',
    description: 'Sebelum melakukan pekerjaan, kami akan melakukan survey terlebih dahulu untuk menentukan cara penanganan yang tepat untuk barang yang akan dipindahkan dan untuk menentukan harga yang terbaik.',
    details: [
      'Analisis volume dan jenis barang',
      'Pengukuran akses jalan dan tangga',
      'Penentuan strategi packing optimal',
      'Estimasi waktu dan tenaga kerja',
      'Perhitungan biaya transparan'
    ],
    image: '/images/survey.png',
    step: '01'
  },
  {
    id: 2,
    icon: FaBoxOpen,
    title: 'Packing Profesional',
    description: 'Tim profesional kami akan melakukan packing dengan teknik terbaik dan bahan kemasan berkualitas tinggi untuk memastikan semua barang Anda aman selama proses pemindahan.',
    details: [
      'Bubble wrap dan kardus berkualitas tinggi',
      'Teknik packing khusus untuk barang fragile',
      'Labeling dan inventarisasi sistematis',
      'Perlindungan khusus untuk elektronik',
      'Dokumentasi kondisi barang'
    ],
    image: '/images/packing.png',
    step: '02'
  },
  {
    id: 3,
    icon: FaTruck,
    title: 'Pemindahan Aman',
    description: 'Proses pemindahan dilakukan dengan hati-hati menggunakan kendaraan yang sesuai. Barang-barang akan ditutupi dengan terpal untuk melindungi dari hujan dan cuaca.',
    details: [
      'Kendaraan sesuai volume barang',
      'Loading dengan teknik aman',
      'Perlindungan cuaca dengan terpal',
      'Pengamanan selama perjalanan'
    ],
    image: '/images/pengiriman.png',
    step: '03'
  },
  {
    id: 4,
    icon: FaHome,
    title: 'Penyusunan Kembali',
    description: 'Tim kami akan membantu menyusun kembali barang-barang Anda di lokasi tujuan sesuai dengan keinginan dan kebutuhan Anda.',
    details: [
      'Unloading dengan hati-hati',
      'Unpacking sesuai permintaan',
      'Pemasangan furniture kembali',
      'Penataan ruangan sesuai keinginan',
      'Pembersihan area kerja'
    ],
    image: '/images/penyusunankembali.png',
    step: '04'
  }
]

const additionalFeatures = [
  {
    title: 'Asuransi Penuh',
    description: 'Semua barang diasuransikan selama proses pemindahan',
    icon: '🛡️'
  },
  {
    title: 'Tim Berpengalaman',
    description: 'Tenaga kerja terlatih dengan pengalaman lebih dari 10 tahun',
    icon: '👥'
  },
  {
    title: 'Peralatan Lengkap',
    description: 'Tools dan equipment modern untuk handling berbagai jenis barang',
    icon: '🔧'
  },
  {
    title: 'Layanan 24/7',
    description: 'Customer service siap membantu kapan saja Anda membutuhkan',
    icon: '⏰'
  }
]

export default function ProsesKerjaPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workProcessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      
    <main className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-green-900/90 to-green-800/90 text-white py-20 -mt-20 pt-32 lg:mt-0 lg:pt-20"
        style={{
          backgroundImage: 'url(/images/dutamover-moving-service.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-green-800/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Proses <span className="text-yellow-400">Kerja</span> Kami
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Kami mengikuti proses yang sistematis dan terstruktur untuk memastikan 
            pindahan Anda berjalan lancar dan efisien
          </p>
        </div>
      </section>

      {/* Main Process Steps - Roadmap Style */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
            
            <div className="space-y-12">
              {processes.map((process, index) => (
                <div key={process.id} className="relative flex items-start">
                  {/* Step Circle */}
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    {process.step}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="flex items-center mb-4">
                      <process.icon className="w-6 h-6 text-green-600 mr-3" />
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {process.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {process.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {process.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {index === processes.length - 1 && (
                      <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Link
                          href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20proses%20kerja%20pindahan%20nya%20Dong%20?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                          <FaWhatsapp className="mr-2 w-5 h-5" />
                          Konsultasi Gratis
                        </Link>
                        <Link
                          href="tel:081510326123"
                          className="inline-flex items-center justify-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                          <FaPhone className="mr-2 w-4 h-4" />
                          Telepon Sekarang
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keunggulan <span className="text-green-600">Proses</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai fitur dan keunggulan yang membuat proses pindahan dengan Dutamover lebih terpercaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Proses <span className="text-yellow-400">Pindahan</span>?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Hubungi tim ahli kami untuk konsultasi gratis dan survey lokasi. 
              Kami akan membantu merencanakan pindahan yang sempurna untuk Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20proses%20kerja%20pindahan%20nya%20Dong%20?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <FaWhatsapp className="mr-3 w-5 h-5" />
                Mulai Konsultasi Gratis
              </Link>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Lihat Semua Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
