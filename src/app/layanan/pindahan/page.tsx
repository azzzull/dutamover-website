import type { Metadata } from 'next'
import Link from 'next/link'
import { FaTruck, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Jasa Pindahan Rumah & Kantor - Dutamover',
  description: 'Layanan jasa pindahan rumah dan kantor terpercaya dengan tim profesional berpengalaman. Gratis survey, asuransi barang, dan harga terjangkau. Hubungi 0815-1032-6123',
  keywords: ['jasa pindahan rumah', 'jasa pindahan kantor', 'pindahan jakarta', 'pindahan bogor', 'pindahan tangerang'],
  alternates: {
    canonical: '/layanan/pindahan',
  },
  openGraph: {
    title: 'Jasa Pindahan Rumah & Kantor - Dutamover',
    description: 'Layanan pindahan terpercaya dengan tim profesional. Gratis survey, asuransi barang, dan harga terjangkau.',
  },
}

const includedServices = [
  {
    title: 'Survey Lokasi Gratis',
    description: 'Tim ahli kami akan datang ke lokasi untuk menganalisis kebutuhan pindahan dan memberikan estimasi yang akurat',
    icon: '🔍'
  },
  {
    title: 'Packing Profesional',
    description: 'Pembungkusan semua barang menggunakan material berkualitas tinggi seperti bubble wrap, kardus khusus, dan lakban kuat',
    icon: '📦'
  },
  {
    title: 'Pembongkaran Furniture',
    description: 'Pembongkaran furniture besar seperti lemari, tempat tidur, meja, dan perabotan lainnya dengan hati-hati',
    icon: '🔧'
  },
  {
    title: 'Transportasi Aman',
    description: 'Pengangkutan menggunakan kendaraan yang sesuai dengan volume barang dan dilengkapi dengan terpal pelindung',
    icon: '🚚'
  },
  {
    title: 'Pemasangan Kembali',
    description: 'Pemasangan ulang furniture dan penataan barang di lokasi tujuan sesuai dengan keinginan Anda',
    icon: '🔨'
  },
  {
    title: 'Unpacking & Arranging',
    description: 'Pembukaan kemasan dan penataan barang-barang di tempat yang telah ditentukan',
    icon: '📋'
  },
  {
    title: 'Asuransi Barang',
    description: 'Semua barang diasuransikan untuk memberikan perlindungan maksimal selama proses pindahan',
    icon: '🛡️'
  },
  {
    title: 'Tenaga Kerja Profesional',
    description: 'Tim worker yang terlatih dan berpengalaman dalam menangani berbagai jenis barang dengan kehati-hatian',
    icon: '👥'
  }
]

const services = [
  {
    title: 'Pindahan Rumah',
    description: 'Layanan lengkap pindahan rumah dari A sampai Z dengan tim profesional',
    features: ['Survey lokasi gratis', 'Packing dan unpacking', 'Pembongkaran & pemasangan furniture', 'Asuransi barang', 'Tenaga kerja profesional'],
    price: 'Mulai dari Rp 800.000'
  },
  {
    title: 'Pindahan Kantor',
    description: 'Solusi pindahan kantor yang efisien dengan minimal downtime',
    features: ['Jadwal fleksibel', 'Handling equipment kantor', 'Setup ulang', 'Dokumentasi lengkap', 'Tim koordinator khusus'],
    price: 'Mulai dari Rp 1.200.000'
  },
  {
    title: 'Pindahan Antar Kota',
    description: 'Layanan pindahan jarak jauh dengan keamanan terjamin',
    features: ['Tracking real-time', 'Asuransi penuh', 'Tim escort', 'Jadwal terjamin', 'Koordinator perjalanan'],
    price: 'Mulai dari Rp 2.500.000'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Konsultasi & Survey',
    description: 'Tim kami akan melakukan survey lokasi dan memberikan konsultasi gratis untuk menentukan strategi terbaik pindahan Anda.'
  },
  {
    step: '02',
    title: 'Perencanaan & Quotation',
    description: 'Kami menyusun rencana detail dan memberikan quotation yang transparan tanpa biaya tersembunyi.'
  },
  {
    step: '03',
    title: 'Packing & Persiapan',
    description: 'Tim profesional kami melakukan packing dengan teknik dan material terbaik untuk menjamin keamanan barang.'
  },
  {
    step: '04',
    title: 'Loading & Transport',
    description: 'Proses loading dilakukan dengan hati-hati dan transport menggunakan armada yang terawat dan modern.'
  },
  {
    step: '05',
    title: 'Unloading & Setup',
    description: 'Di lokasi tujuan, kami melakukan unloading dan setup ulang sesuai dengan keinginan Anda.'
  }
]

const whyChooseUs = [
  {
    icon: FaShieldAlt,
    title: 'Asuransi Menyeluruh',
    description: 'Semua barang diasuransikan penuh untuk memberikan ketenangan pikiran Anda'
  },
  {
    icon: FaClock,
    title: 'Tepat Waktu',
    description: 'Komitmen tinggi terhadap ketepatan waktu sesuai jadwal yang telah disepakati'
  },
  {
    icon: FaUsers,
    title: 'Tim Berpengalaman',
    description: 'Tim profesional dengan pengalaman lebih dari 10 tahun di bidang jasa pindahan'
  },
  {
    icon: FaTruck,
    title: 'Armada Modern',
    description: 'Menggunakan armada yang terawat dan modern untuk menjamin keamanan barang'
  }
]

export default function JasaPindahanPage() {
  return (
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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Mobile Layout: Judul → Gambar → Deskripsi */}
          <div className="lg:hidden">
            {/* Title Section */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jasa <span className="text-yellow-400">Pindahan</span> Terpercaya
              </h1>
            </div>
            
            {/* Image Section */}
            <div className="relative mb-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/dutam53.jpg"
                  alt="Jasa Pindahan Dutamover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#005B80' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20"></div>
            </div>
            
            {/* Description and CTA */}
            <div>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Solusi lengkap untuk kebutuhan pindahan rumah dan kantor Anda. 
                Dengan pengalaman lebih dari 10 tahun, kami memberikan layanan 
                profesional yang aman, cepat, dan terpercaya.
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20jasa%20pindahan%20nya%20Dong%20?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="mr-3 w-5 h-5" />
                  Konsultasi Gratis
                </Link>
                <Link
                  href="tel:081510326123"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  <FaPhone className="mr-3 w-4 h-4" />
                  0815 1032 6123
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Grid Side by Side */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jasa <span className="text-yellow-400">Pindahan</span> Terpercaya
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Solusi lengkap untuk kebutuhan pindahan rumah dan kantor Anda. 
                Dengan pengalaman lebih dari 10 tahun, kami memberikan layanan 
                profesional yang aman, cepat, dan terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20jasa%20pindahan%20nya%20Dong%20?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="mr-3 w-5 h-5" />
                  Konsultasi Gratis
                </Link>
                <Link
                  href="tel:081510326123"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  <FaPhone className="mr-3 w-4 h-4" />
                  0815 1032 6123
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/dutam53.jpg"
                  alt="Jasa Pindahan Dutamover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#005B80' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Yang Sudah Termasuk Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Yang <span className="text-green-600">Sudah Termasuk</span> dalam Layanan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Paket lengkap jasa pindahan kami sudah termasuk semua kebutuhan untuk pindahan yang aman dan nyaman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-green-600">Pindahan</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai jenis layanan pindahan yang disesuaikan dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <FaTruck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proses <span className="text-green-600">Kerja</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap langkah dirancang untuk memberikan pengalaman pindahan yang lancar dan aman
            </p>
          </div>

          <div className="relative">
            {/* Roadmap Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 lg:w-1/2">
                    <div className={`bg-white rounded-xl p-6 shadow-lg relative ${index % 2 === 1 ? 'lg:ml-8' : 'lg:mr-8'}`}>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      
                      {/* Arrow pointing to center line on desktop */}
                      <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 1 ? '-left-4' : '-right-4'}`}>
                        <div className={`w-0 h-0 border-t-4 border-b-4 border-transparent ${index % 2 === 1 ? 'border-r-4 border-r-white' : 'border-l-4 border-l-white'}`}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  {/* Spacer for layout */}
                  <div className="flex-1 lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-green-600">Dutamover</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan dan komitmen kami dalam memberikan layanan pindahan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses Kerja Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ingin Tahu <span className="text-green-600">Proses Kerja</span> Lengkapnya?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pelajari setiap tahap detail yang kami lakukan untuk memastikan pindahan Anda 
                berjalan sempurna dari awal hingga akhir.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/proses-kerja"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Lihat Proses Kerja Lengkap →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap untuk Pindahan yang Mudah dan Aman?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik. 
            Tim profesional kami siap membantu mewujudkan pindahan impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20jasa%20pindahan%20nya%20Dong%20?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <FaWhatsapp className="mr-3 w-5 h-5" />
              Chat WhatsApp Sekarang
            </Link>
            <Link
              href="tel:081510326123"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors border-2 border-white"
            >
              <FaPhone className="mr-3 w-4 h-4" />
              Telepon Langsung
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
