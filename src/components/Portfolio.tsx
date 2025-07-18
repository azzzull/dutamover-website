'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { FaBoxOpen, FaTruck, FaHome, FaFilter } from 'react-icons/fa'

const categories = [
  { id: 'all', name: 'Semua', icon: FaFilter },
  { id: 'packing', name: 'Packing', icon: FaBoxOpen },
  { id: 'moving', name: 'Pemindahan', icon: FaTruck },
  { id: 'loading', name: 'Loading', icon: FaHome }
]

const portfolioItems = [
  {
    id: 1,
    title: 'Proses Packing Sofa',
    description: 'Proses ini dilakukan untuk memberi proteksi terhadap sofa serta menjaganya agar tetap bersih saat pindahan',
    category: 'packing',
    image: '/images/Dutam18.jpg'
  },
  {
    id: 2,
    title: 'Proses Packing Piano',
    description: 'Proteksi dan penanganan terbaik terhadap piano kami berikan agar terjaga dengan baik',
    category: 'packing',
    image: '/images/Dutam14.jpg'
  },
  {
    id: 3,
    title: 'Proses Packing Kasur',
    description: 'Proses ini dilakukan untuk memberi proteksi terhadap kasur serta menjaga agar kasur tetap bersih',
    category: 'packing',
    image: '/images/dutam37.jpg'
  },
  {
    id: 4,
    title: 'Barang Saat Dimobil',
    description: 'Penyusunan barang diatur dan kemudian ditutupi dengan terpal sehingga terjaga dari hujan',
    category: 'moving',
    image: '/images/Dutam7.jpg'
  },
  {
    id: 5,
    title: 'Proses Unpacking Barang',
    description: 'Proses unpacking barang-barang dilakukan secara hati-hati sehingga barang Anda tetap terjaga',
    category: 'moving',
    image: '/images/Dutam3.jpg'
  },
  {
    id: 6,
    title: 'Proses Pemindahan',
    description: 'Proses pemindahan barang dilakukan dengan hati-hati untuk memastikan keamanan barang Anda',
    category: 'moving',
    image: '/images/dutam53.jpg'
  },
  {
    id: 7,
    title: 'Loading Barang',
    description: 'Proses loading ini bertujuan menyusun barang-barang yang sudah di packing agar barang anda tetap aman sampai tujuan',
    category: 'loading',
    image: '/images/Dutam6.jpg'
  },
  {
    id: 8,
    title: 'Lansir Barang',
    description: 'Proses lansir ini dilakukan pada saat kendaraan besar tidak dapat menjangkau tempat anda',
    category: 'loading',
    image: '/images/Dutam27.jpg'
  }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

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
            Project <span className="text-green-600">Terbaru</span> Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berikut adalah gambaran dari proses pekerjaan yang telah kami selesaikan 
            dengan standar kualitas dan kepuasan pelanggan terbaik
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={`${item.title} - Proses kerja profesional Dutamover jasa pindahan Jakarta`}
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallbackDiv) {
                      fallbackDiv.style.display = 'flex';
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200" style={{ display: 'none' }}>
                  {item.category === 'packing' && <FaBoxOpen className="w-16 h-16 text-green-600" />}
                  {item.category === 'moving' && <FaTruck className="w-16 h-16 text-green-600" />}
                  {item.category === 'loading' && <FaHome className="w-16 h-16 text-green-600" />}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {categories.find(cat => cat.id === item.category)?.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Items Message */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">Tidak ada project untuk kategori ini.</p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Pindahan Berhasil</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Kepuasan Pelanggan</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ingin Melihat Lebih Banyak Project?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Lihat galeri lengkap kami untuk melihat dokumentasi project-project yang telah kami selesaikan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Lihat Galeri Lengkap
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20project%20pindahan%20nya%20Dong%20?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Konsultasi Project
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
