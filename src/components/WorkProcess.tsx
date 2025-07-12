'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaSearchLocation, FaBoxOpen, FaTruck, FaHome } from 'react-icons/fa'

const processes = [
  {
    id: 1,
    icon: FaSearchLocation,
    title: 'Survey',
    description: 'Sebelum melakukan pekerjaan, kami akan melakukan survey terlebih dahulu untuk menentukan cara penanganan yang tepat untuk barang yang akan dipindahkan dan untuk menentukan harga yang terbaik.',
    image: '/images/survey.png',
    step: '01'
  },
  {
    id: 2,
    icon: FaBoxOpen,
    title: 'Packing',
    description: 'Tim profesional kami akan melakukan packing dengan teknik terbaik dan bahan kemasan berkualitas tinggi untuk memastikan semua barang Anda aman selama proses pemindahan.',
    image: '/images/packing.png',
    step: '02'
  },
  {
    id: 3,
    icon: FaTruck,
    title: 'Pemindahan',
    description: 'Proses pemindahan dilakukan dengan hati-hati menggunakan kendaraan yang sesuai. Barang-barang akan ditutupi dengan terpal untuk melindungi dari hujan dan cuaca.',
    image: '/images/pengiriman.png',
    step: '03'
  },
  {
    id: 4,
    icon: FaHome,
    title: 'Penyusunan Kembali',
    description: 'Tim kami akan membantu menyusun kembali barang-barang Anda di lokasi tujuan sesuai dengan keinginan dan kebutuhan Anda.',
    image: '/images/penyusunankembali.png',
    step: '04'
  }
]

export default function WorkProcess() {
  return (
    <section className="py-20 bg-white">
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
            Proses <span className="text-green-600">Kerja</span> Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami mengikuti proses yang sistematis dan terstruktur untuk memastikan 
            pindahan Anda berjalan lancar dan efisien
          </p>
        </motion.div>

        {/* Process Steps - Card Layout for All Devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                {process.step}
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 pt-12 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <process.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {process.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ingin Mengetahui Lebih Detail?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tim ahli kami siap menjelaskan setiap tahap proses dan memberikan konsultasi gratis 
              untuk kebutuhan pindahan Anda
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/proses-kerja"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Lihat Detail Proses Kerja
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20proses%20kerja%20pindahan%20nya%20Dong%20?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
