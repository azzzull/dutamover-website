'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTruck, FaBoxOpen, FaShieldAlt, FaClock, FaUsers } from 'react-icons/fa'

const services = [
  {
    id: 1,
    icon: FaTruck,
    title: 'Jasa Pindahan',
    description: 'Dutamove adalah solusi terpercaya untuk pindahan. Dengan layanan profesional dan pengalaman, kami menyediakan pindahan efisien dan aman untuk rumah dan kantor. Tim terlatih kami siap membantu dari packing hingga pengaturan ulang.',
    features: ['Pindahan Rumah', 'Pindahan Kantor', 'Pindahan Antar Kota', 'Asuransi Barang'],
    href: '/layanan/pindahan'
  },
  {
    id: 2,
    icon: FaBoxOpen,
    title: 'Jasa Packing',
    description: 'Dutamove menyediakan layanan packing profesional dan aman. Dengan menggunakan teknik packing terbaik dan bahan kemasan berkualitas tinggi, kami mengemas segala jenis barang dengan hati-hati, termasuk perabotan rumah tangga dan barang pecah belah.',
    features: ['Packing Profesional', 'Packing Kayu', 'Barang Pecah Belah', 'Furniture Besar'],
    href: '/layanan/packing'
  }
]

const additionalFeatures = [
  {
    icon: FaShieldAlt,
    title: 'Keamanan Terjamin',
    description: 'Semua barang diasuransikan dan ditangani dengan kehati-hatian maksimal'
  },
  {
    icon: FaClock,
    title: 'Tepat Waktu',
    description: 'Komitmen kami untuk menyelesaikan pindahan sesuai jadwal yang disepakati'
  },
  {
    icon: FaUsers,
    title: 'Tim Profesional',
    description: 'Tim yang terlatih dan berpengalaman lebih dari 10 tahun di bidang pindahan'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-green-600">Profesional</span> Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengan pengalaman lebih dari 10 tahun, Dutamover menyediakan berbagai layanan pindahan 
            yang disesuaikan dengan kebutuhan Anda
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors no-underline"
                >
                  Pelajari Lebih Lanjut
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    {service.id === 1 ? (
                      <img
                        src="/images/dutam53.jpg"
                        alt="Jasa Pindahan Dutamover"
                        className="w-full h-full object-cover"
                      />
                    ) : service.id === 2 ? (
                      <img
                        src="/images/dutamover-packing.jpg"
                        alt="Jasa Packing Dutamover"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <service.icon className="w-24 h-24 text-green-600" />
                      </div>
                    )}
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#005B80' }}></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              Mengapa Memilih Dutamover?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap untuk Pindahan yang Mudah?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20pindahan%20nya%20Dong%20?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors no-underline"
              >
                WhatsApp Sekarang
              </Link>
              <Link
                href="tel:081510326123"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-3 rounded-lg transition-colors no-underline"
              >
                Telepon Langsung
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
