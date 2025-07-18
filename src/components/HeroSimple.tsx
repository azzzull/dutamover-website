'use client'

import Link from 'next/link'
import { FaWhatsapp, FaPhone, FaShieldAlt, FaTruck, FaUsers } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="hero-section relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white pt-20 overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/dutamover-moving-service.jpg')",
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-green-900/70 w-full h-full"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="relative z-20 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Memudahkan{' '}
              <span className="text-yellow-400">Pindahan</span>{' '}
              Anda
            </h1>
            
            <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
              Dutamover adalah solusi terpercaya untuk pindahan. Dengan layanan profesional dan 
              pengalaman 10+ tahun, kami menyediakan pindahan efisien dan aman untuk rumah dan kantor.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <FaShieldAlt className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-medium">Aman & Terpercaya</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaTruck className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-medium">Layanan Lengkap</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaUsers className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-medium">Tim Profesional</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 relative z-30 w-full mb-10">
              <a
                href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20pindahan%20nya%20Dong%20?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer relative z-30 select-none no-underline text-sm sm:text-base w-full sm:w-auto"
                style={{ 
                  pointerEvents: 'auto',
                  touchAction: 'manipulation'
                }}
              >
                <FaWhatsapp className="mr-3 w-5 h-5 pointer-events-none" />
                <span className="pointer-events-none">Konsultasi WhatsApp</span>
              </a>
              <a
                href="tel:081510326123"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-green-900 active:bg-gray-100 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 cursor-pointer relative z-30 select-none no-underline text-sm sm:text-base w-full sm:w-auto"
                style={{ 
                  pointerEvents: 'auto',
                  touchAction: 'manipulation'
                }}
              >
                <FaPhone className="mr-3 w-4 h-4 pointer-events-none" />
                <span className="pointer-events-none">0815 1032 6123</span>
              </a>
            </div>
          </div>

          {/* Empty space for background image visibility */}
          <div className="hidden lg:block">
            {/* This space intentionally left empty to showcase background image */}
          </div>
        </div>
      </div>
    </section>
  )
}
