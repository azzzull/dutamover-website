import type { Metadata } from 'next'
import Link from 'next/link'
import { FaBoxOpen, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Jasa Packing Profesional - Dutamover',
  description: 'Layanan jasa packing profesional dengan teknik terbaik dan bahan berkualitas tinggi. Khusus untuk barang fragile dan berharga. Hubungi 0815-1032-6123',
  keywords: ['jasa packing', 'packing profesional', 'packing barang fragile', 'packing furniture', 'packing elektronik'],
  alternates: {
    canonical: '/layanan/packing',
  },
  openGraph: {
    title: 'Jasa Packing Profesional - Dutamover',
    description: 'Layanan packing terbaik dengan teknik profesional dan bahan berkualitas tinggi untuk melindungi barang berharga Anda.',
  },
}

const includedServices = [
  {
    title: 'Material Berkualitas Tinggi',
    description: 'Bubble wrap premium, kardus corrugated, lakban kuat, dan material packing lainnya',
    icon: '📦'
  },
  {
    title: 'Teknik Packing Internasional',
    description: 'Menggunakan teknik packing standar internasional untuk keamanan maksimal',
    icon: '🛠️'
  },
  {
    title: 'Labeling & Inventarisasi',
    description: 'Setiap box diberi label jelas dan dilakukan inventarisasi untuk memudahkan tracking',
    icon: '🏷️'
  },
  {
    title: 'Packing Khusus Fragile',
    description: 'Penanganan khusus untuk barang pecah belah dengan extra protection',
    icon: '🔒'
  },
  {
    title: 'Disassembly Furniture',
    description: 'Pembongkaran furniture kompleks sebelum di-packing untuk keamanan',
    icon: '🔧'
  },
  {
    title: 'Custom Box Size',
    description: 'Pembuatan box khusus untuk barang dengan ukuran dan bentuk yang tidak standar',
    icon: '📏'
  },
  {
    title: 'Protection Layer',
    description: 'Multiple layer protection untuk barang elektronik dan berharga',
    icon: '🛡️'
  },
  {
    title: 'Tim Packing Berpengalaman',
    description: 'Tim yang sudah terlatih khusus dalam teknik packing berbagai jenis barang',
    icon: '👨‍🔧'
  }
]

const services = [
  {
    title: 'Packing Furniture',
    description: 'Packing khusus untuk furniture dengan teknik profesional dan material pelindung terbaik',
    features: ['Bubble wrap berlapis', 'Kardus custom size', 'Corner protection', 'Assembly marking', 'Disassembly service'],
    price: 'Mulai dari Rp 150.000/item'
  },
  {
    title: 'Packing Elektronik',
    description: 'Penanganan khusus untuk barang elektronik dengan proteksi anti-static',
    features: ['Anti-static material', 'Shock absorber', 'Climate protection', 'Original packaging simulation', 'Multiple layer wrap'],
    price: 'Mulai dari Rp 75.000/item'
  },
  {
    title: 'Packing Barang Fragile',
    description: 'Layanan packing premium untuk barang pecah belah dan benda berharga',
    features: ['Extra cushioning', 'Individual wrapping', 'Fragile labeling', 'Insurance coverage', 'Special handling'],
    price: 'Mulai dari Rp 25.000/item'
  }
]

const packingMaterials = [
  {
    name: 'Bubble Wrap Premium',
    description: 'Bubble wrap berkualitas tinggi dengan berbagai ketebalan untuk proteksi maksimal'
  },
  {
    name: 'Kardus Berkualitas',
    description: 'Kardus corrugated dengan berbagai ukuran dan ketahanan yang telah teruji'
  },
  {
    name: 'Foam Padding',
    description: 'Foam khusus untuk melindungi sudut dan bagian sensitif dari benturan'
  },
  {
    name: 'Plastic Wrap',
    description: 'Plastik wrap untuk proteksi dari kelembaban dan debu selama perjalanan'
  },
  {
    name: 'Tape & Label',
    description: 'Tape berkualitas tinggi dan label khusus untuk identifikasi dan handling'
  },
  {
    name: 'Corner Protector',
    description: 'Pelindung sudut khusus untuk furniture dan barang dengan sudut tajam'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Assessment Barang',
    description: 'Tim kami melakukan penilaian terhadap jenis barang, tingkat fragility, dan kebutuhan packing khusus.'
  },
  {
    step: '02',
    title: 'Material Selection',
    description: 'Pemilihan material packing yang tepat sesuai dengan karakteristik dan kebutuhan masing-masing barang.'
  },
  {
    step: '03',
    title: 'Professional Packing',
    description: 'Proses packing dilakukan dengan teknik profesional dan standar internasional untuk keamanan maksimal.'
  },
  {
    step: '04',
    title: 'Labeling & Inventory',
    description: 'Setiap barang diberi label dan dicatat dalam inventory untuk memudahkan tracking dan unpacking.'
  },
  {
    step: '05',
    title: 'Quality Check',
    description: 'Pemeriksaan akhir untuk memastikan semua barang telah dikemas dengan baik dan siap untuk dipindahkan.'
  }
]

const whyChooseUs = [
  {
    icon: FaShieldAlt,
    title: 'Material Berkualitas',
    description: 'Menggunakan material packing berkualitas tinggi dan terpercaya'
  },
  {
    icon: FaClock,
    title: 'Efisien & Rapih',
    description: 'Packing dilakukan dengan efisien namun tetap rapi dan terorganisir'
  },
  {
    icon: FaUsers,
    title: 'Tim Berpengalaman',
    description: 'Tim packer profesional dengan sertifikasi dan pengalaman bertahun-tahun'
  },
  {
    icon: FaBoxOpen,
    title: 'Teknik Profesional',
    description: 'Menerapkan teknik packing standar internasional untuk proteksi optimal'
  }
]

export default function JasaPackingPage() {
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
                Jasa <span className="text-yellow-400">Packing</span> Profesional
              </h1>
            </div>
            
            {/* Image Section */}
            <div className="relative mb-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/dutamover-packing.jpg"
                  alt="Jasa Packing Dutamover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#005B80' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20"></div>
            </div>
            
            {/* Description and CTA */}
            <div>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Layanan packing profesional dengan teknik terbaik dan material berkualitas tinggi. 
                Kami memahami betapa berharganya barang-barang Anda dan memberikan proteksi terbaik 
                untuk setiap item yang dikemas.
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20jasa%20packing%20nya%20Dong%20?"
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
                Jasa <span className="text-yellow-400">Packing</span> Profesional
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Layanan packing profesional dengan teknik terbaik dan material berkualitas tinggi. 
                Kami memahami betapa berharganya barang-barang Anda dan memberikan proteksi terbaik 
                untuk setiap item yang dikemas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20jasa%20packing%20nya%20Dong%20?"
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
                  src="/images/dutamover-packing.jpg"
                  alt="Jasa Packing Dutamover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#005B80' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Yang <span className="text-green-600">Sudah Termasuk</span> dalam Layanan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Paket lengkap jasa packing kami sudah termasuk semua material dan keahlian untuk protection maksimal
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
              Layanan <span className="text-green-600">Packing</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai jenis layanan packing sesuai dengan kebutuhan dan karakteristik barang Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <FaBoxOpen className="w-8 h-8 text-white" />
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

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Material <span className="text-green-600">Berkualitas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menggunakan material packing terbaik untuk memastikan keamanan dan integritas barang Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packingMaterials.map((material, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FaBoxOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{material.name}</h3>
                <p className="text-gray-600">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proses <span className="text-green-600">Packing</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap langkah dirancang untuk memberikan proteksi maksimal dan keamanan terjamin
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
                    <div className={`bg-gray-50 rounded-xl p-6 shadow-lg relative ${index % 2 === 1 ? 'lg:ml-8' : 'lg:mr-8'}`}>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      
                      {/* Arrow pointing to center line on desktop */}
                      <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 1 ? '-left-4' : '-right-4'}`}>
                        <div className={`w-0 h-0 border-t-4 border-b-4 border-transparent ${index % 2 === 1 ? 'border-r-4 border-r-gray-50' : 'border-l-4 border-l-gray-50'}`}></div>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-green-600">Packing</span> Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan dan komitmen kami dalam memberikan layanan packing terbaik
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
                Bagaimana <span className="text-green-600">Proses Kerja</span> Packing Kami?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pelajari tahap demi tahap proses packing profesional yang kami lakukan 
                untuk melindungi barang berharga Anda.
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
            Butuh Layanan Packing Profesional?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Percayakan packing barang berharga Anda kepada tim profesional kami. 
            Dapatkan konsultasi gratis dan penawaran terbaik sekarang juga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20jasa%20packing%20nya%20Dong%20?"
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
