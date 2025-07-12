import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/dutamover-logo.png"
                alt="Dutamover Logo"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dutamover adalah solusi terpercaya untuk pindahan dengan pengalaman lebih dari 10 tahun. 
              Kami menyediakan layanan pindahan efisien dan aman untuk rumah dan kantor dengan tim terlatih profesional.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20pindahan%20nya%20Dong%20?"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                aria-label="WhatsApp Dutamover"
              >
                <FaWhatsapp className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/dutamove"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
                aria-label="Instagram Dutamover"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/layanan/pindahan" className="text-gray-300 hover:text-white transition-colors no-underline">
                  Jasa Pindahan
                </Link>
              </li>
              <li>
                <Link href="/layanan/packing" className="text-gray-300 hover:text-white transition-colors no-underline">
                  Jasa Packing
                </Link>
              </li>
              <li>
                <Link href="/proses-kerja" className="text-gray-300 hover:text-white transition-colors no-underline">
                  Proses Kerja
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Plaza Cordoba Blok I no 6 dan 7<br />
                    Jl. Batam Nusaloka BSD<br />
                    Tangerang Selatan
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-green-400" />
                <Link
                  href="tel:081510326123"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  0815 1032 6123
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-green-400" />
                <Link
                  href="mailto:marketing@dutamover.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  marketing@dutamover.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 Dutamover. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
