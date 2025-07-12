import type { Metadata } from 'next'
import Link from 'next/link'
import { FaTruck, FaBoxOpen, FaShieldAlt } from 'react-icons/fa'
import { breadcrumbSchemaLayanan, movingServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Layanan Jasa Pindahan Profesional Jakarta - Dutamover',
  description: 'Layanan lengkap jasa pindahan Dutamover: pindahan rumah, kantor, dan packing profesional. Gratis survey dan konsultasi. Hubungi 0815-1032-6123',
  keywords: ['jasa pindahan rumah', 'jasa pindahan kantor', 'jasa packing', 'layanan pindahan jakarta'],
  openGraph: {
    title: 'Layanan Jasa Pindahan Profesional Jakarta - Dutamover',
    description: 'Layanan lengkap jasa pindahan: rumah, kantor, dan packing. Tim profesional, asuransi, dan harga terjangkau.',
  },
}

const services = [
  {
    id: 'pindahan',
    icon: FaTruck,
    title: 'Jasa Pindahan',
    description: 'Layanan pindahan lengkap dengan tim profesional berpengalaman. Kami menangani seluruh proses dari packing, trucking, hingga penataan di lokasi tujuan.',
    features: [
      'Survey lokasi gratis',
      'Packing dan unpacking',
      'Pembongkaran dan pemasangan furniture',
      'Asuransi barang',
      'Pindahan lokal dan antar kota',
      'Tim profesional berpengalaman'
    ],
    price: 'Rumah, Kantor, Appartement, dll',
    href: '/layanan/pindahan'
  },
  {
    id: 'packing',
    icon: FaBoxOpen,
    title: 'Jasa Packing Profesional',
    description: 'Layanan packing menggunakan teknik dan bahan terbaik untuk memastikan keamanan barang Anda. Khusus untuk barang fragile dan berharga.',
    features: [
      'Bubble wrap berkualitas tinggi',
      'Kardus khusus berbagai ukuran',
      'Packing barang elektronik',
      'Packing barang pecah belah',
      'Labeling dan inventarisasi',
      'Teknik packing internasional'
    ],
    price: 'Packing Antar Kota, Lokal, dan Internasional',
    href: '/layanan/packing'
  },
]

const additionalServices = [
  {
    title: 'Konsultasi Gratis',
    description: 'Tim ahli kami siap memberikan konsultasi gratis untuk kebutuhan pindahan Anda',
    icon: '💬'
  },
  {
    title: 'Survey Lokasi',
    description: 'Survey mendalam untuk menentukan strategi pindahan yang paling efektif',
    icon: '🔍'
  },
  {
    title: 'Asuransi Lengkap',
    description: 'Semua barang diasuransikan untuk memberikan ketenangan pikiran',
    icon: '🛡️'
  },
  {
    title: 'Layanan 24/7',
    description: 'Customer service dan emergency service tersedia 24 jam',
    icon: '⏰'
  }
]

export default function LayananPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchemaLayanan),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(movingServiceSchema),
        }}
      />
      <main className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-green-900/90 to-green-800/90 text-white py-20 -mt-20 pt-32 lg:mt-0 lg:pt-20"
        style={{
          backgroundImage: 'url(/images/dutamover-moving-service.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 65%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-green-800/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Layanan <span className="text-yellow-400">Profesional</span> Kami
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Solusi lengkap untuk semua kebutuhan pindahan Anda dengan standar kualitas terbaik 
            dan harga yang kompetitif
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className="space-y-8 lg:space-y-0">
                {/* Mobile Layout: Judul → Gambar → Deskripsi */}
                <div className="lg:hidden">
                  {/* Title Section */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                      <p className="text-green-600 font-semibold">{service.price}</p>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative mb-6">
                    <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                      {service.id === 'pindahan' ? (
                        <img
                          src="/images/dutam53.jpg"
                          alt="Jasa Pindahan Dutamover"
                          className="w-full h-full object-cover"
                        />
                      ) : service.id === 'packing' ? (
                        <img
                          src="/images/dutamover-packing.jpg"
                          alt="Jasa Packing Dutamover"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                          <service.icon className="w-32 h-32 text-green-600" />
                        </div>
                      )}
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#005B80' }}></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20"></div>
                  </div>

                  {/* Description Section */}
                  <div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4">
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Pelajari Lebih Lanjut
                      </Link>
                      <Link
                        href={`https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20${service.title}%20nya%20Dong%20?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Konsultasi Gratis
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout: Grid Side by Side */}
                <div
                  className={`hidden lg:grid grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                        <p className="text-green-600 font-semibold">{service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Pelajari Lebih Lanjut
                      </Link>
                      <Link
                        href={`https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20${service.title}%20nya%20Dong%20?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Konsultasi Gratis
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                        {service.id === 'pindahan' ? (
                          <img
                            src="/images/dutam53.jpg"
                            alt="Jasa Pindahan Dutamover"
                            className="w-full h-full object-cover"
                          />
                        ) : service.id === 'packing' ? (
                          <img
                            src="/images/dutamover-packing.jpg"
                            alt="Jasa Packing Dutamover"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                            <service.icon className="w-32 h-32 text-green-600" />
                          </div>
                        )}
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#005B80' }}></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-green-600">Tambahan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai layanan pendukung untuk memberikan pengalaman pindahan yang sempurna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlight Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bagaimana <span className="text-green-600">Proses Kerja</span> Kami?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kami mengikuti sistem yang terstruktur dan profesional untuk memastikan 
                setiap tahap pindahan berjalan dengan lancar dan efisien.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span className="text-gray-700 font-medium">Survey mendalam dan perencanaan detail</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span className="text-gray-700 font-medium">Packing profesional dengan bahan berkualitas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <span className="text-gray-700 font-medium">Pemindahan aman dengan kendaraan tepat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <span className="text-gray-700 font-medium">Penyusunan kembali sesuai keinginan</span>
                </div>
              </div>
              <Link
                href="/proses-kerja"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Lihat Detail Proses Kerja →
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaTruck className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Kendaraan Lengkap</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaBoxOpen className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Packing Ahli</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaShieldAlt className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Asuransi Penuh</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Cepat & Aman</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap untuk Pindahan yang <span className="text-yellow-400">Mudah</span>?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Dapatkan konsultasi gratis dan penawaran terbaik sesuai kebutuhan Anda. 
              Tim profesional kami siap membantu 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20layanan%20pindahan%20nya%20Dong%20?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <FaShieldAlt className="mr-3 w-5 h-5" />
                Konsultasi Gratis Sekarang
              </Link>
              <Link
                href="tel:081510326123"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Telepon: 0815 1032 6123
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
