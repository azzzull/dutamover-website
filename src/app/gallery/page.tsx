'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Note: Metadata export harus di server component, tapi karena ini client component
// metadata akan diatur di layout parent atau dibuat server component wrapper

const galleryData = [
  {
    id: 1,
    title: 'Pindahan Kantor - Gading Serpong',
    category: 'kantor',
    image: '/images/Dutamover-HarletteBeauty.jpg',
    description: 'Pindahan kantor 3 lantai di area Gading Serpong dengan furniture lengkap serta produk skincare',
  },
  {
    id: 2,
    title: 'Pindahan Rumah - BSD',
    category: 'rumah',
    image: '/images/dutamover-pindahanrumah.jpg',
    description: 'Pindahan rumah di BSD dengan furniture lengkap',
  },
  {
    id: 3,
    title: 'Packing Guci - Bekasi',
    category: 'packing',
    image: '/images/dutamover-packingguci.jpg',
    description: 'Packing barang-barang fragile seperti guci dan peralatan kaca untuk di kirim ke luar kota',
  },
  {
    id: 4,
    title: 'Pindahan Rumah - Kemang',
    category: 'rumah',
    image: '/images/dutamover-jasapindahan.jpg',
    description: 'Hasil packing untuk pindahan rumah di Kemang dengan furniture lengkap',
  },
  {
    id: 5,
    title: 'Pindahan Kantor - Kuningan',
    category: 'kantor',
    image: '/images/dutamover-pindahankantor.jpg',
    description: 'Pindahan kantor konsultan keuangan di area Kuningan'
  },
  {
    id: 6,
    title: 'Packing Barang',
    category: 'packing',
    image: '/images/dutamover-packing.jpg',
    description: 'Packing barang-barang untuk di kirim ke luar kota'
  },
  {
    id: 7,
    title: 'Pindahan Rumah - Pantai Indah Kapuk',
    category: 'rumah',
    image: '/images/dutamover-pindahanpik.jpg',
    description: 'Pindahan rumah di Pantai Indah Kapuk dengan furniture lengkap'
  },
  {
    id: 8,
    title: 'Pindahan Kantor - BSD',
    category: 'kantor',
    image: '/images/dutamover-emerson.jpg',
    description: 'Pindahan kantor PT.Emerson di BSD dengan peralatan IT lengkap'
  },
  {
    id: 9,
    title: 'Material Packing',
    category: 'packing',
    image: '/images/dutamover-materialpacking.jpg',
    description: 'Material packing yang digunakan untuk pindahan seperti bubble wrap, kardus, dan plastic wrap untuk barang-barang berkualitas tinggi'
  }
]

const categories = [
  { id: 'all', name: 'Semua', count: galleryData.length },
  { id: 'rumah', name: 'Pindahan Rumah', count: galleryData.filter(item => item.category === 'rumah').length },
  { id: 'kantor', name: 'Pindahan Kantor', count: galleryData.filter(item => item.category === 'kantor').length },
  { id: 'packing', name: 'Hasil Packing', count: galleryData.filter(item => item.category === 'packing').length }
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const filteredGallery = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory)

  const openModal = (item: any) => {
    setSelectedImage(item)
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showModal) {
        closeModal()
      }
    }

    if (showModal) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showModal])

  return (
    <main className="pt-20">
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 -mt-20 pt-32 lg:mt-0 lg:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/dutamover-moving-service.jpg"
            alt="Dutamover Gallery"
            fill
            className="object-cover object-[center_70%]"
            priority
          />
          <div className="absolute inset-0 bg-green-900/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galeri Proyek Kami
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Dokumentasi lengkap hasil kerja profesional Dutamover dalam menangani berbagai proyek pindahan
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-500/30 px-3 py-1 rounded-full">✓ Pindahan Rumah</span>
              <span className="bg-green-500/30 px-3 py-1 rounded-full">✓ Pindahan Kantor</span>
              <span className="bg-green-500/30 px-3 py-1 rounded-full">✓ Pindahan Kost</span>
              <span className="bg-green-500/30 px-3 py-1 rounded-full">✓ Dokumentasi Lengkap</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 cursor-pointer rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => (
              <div 
                key={item.id}
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada gambar dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Tunggal di pojok kanan atas */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-grey-800 hover:bg-white/30 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold transition-all duration-200 backdrop-blur-sm border border-white/20 z-20 cursor-pointer"
              aria-label="Tutup modal"
            >
              ✕
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="relative aspect-[16/10]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ingin Proyek Anda Ditangani Profesional Seperti Ini?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan pindahan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20jasa%20pindahan%20dari%20galeri%20nya%20Dong%20?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              💬 Konsultasi via WhatsApp
            </a>
            <a
              href="tel:081510326123"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              📞 Telepon: 0815 1032 6123
            </a>
          </div>
        </div>
      </section>

      </main>
  )
}
