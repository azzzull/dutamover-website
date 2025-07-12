'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Halo Dutamover, saya ingin konsultasi pindahan:

Nama: ${formData.name}
Telepon: ${formData.phone}
Email: ${formData.email}
Layanan: ${formData.service}
Pesan: ${formData.message}`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+6281510326123&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Alamat Kantor',
      content: 'Plaza Cordoba Blok I no 6 dan 7\nJl. Batam Nusaloka BSD\nTangerang Selatan',
      link: 'https://maps.google.com/?q=Plaza+Cordoba+BSD+Tangerang'
    },
    {
      icon: FaPhone,
      title: 'Telepon',
      content: '0815 1032 6123',
      link: 'tel:081510326123'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '0815 1032 6123',
      link: 'https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20pindahan%20nya%20Dong%20?'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'marketing@dutamover.com',
      link: 'mailto:marketing@dutamover.com',
      displayText: 'marketing@\ndutamover.com'
    }
  ]



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
            Hubungi <span className="text-green-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu Anda dengan konsultasi gratis dan penawaran terbaik untuk kebutuhan pindahan Anda
          </p>
        </motion.div>        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Konsultasi Gratis</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Contoh: 08123456789"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Dibutuhkan *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Pilih layanan</option>
                    <option value="Jasa Pindahan Rumah">Jasa Pindahan Rumah</option>
                    <option value="Jasa Pindahan Kantor">Jasa Pindahan Kantor</option>
                    <option value="Jasa Packing">Jasa Packing</option>
                    <option value="Konsultasi Umum">Konsultasi Umum</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Ceritakan kebutuhan pindahan Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                >
                  <FaWhatsapp className="mr-3 w-5 h-5" />
                  Kirim via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.link ? (
                        <Link
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-green-600 transition-colors text-sm sm:text-base leading-relaxed"
                          title={info.content}
                        >
                          {info.displayText || info.content}
                        </Link>
                      ) : (
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line" title={info.content}>
                          {info.displayText || info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <Link
                href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20pindahan%20nya%20Dong%20?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                <FaWhatsapp className="mr-3 w-5 h-5" />
                Chat WhatsApp
              </Link>
              <Link
                href="tel:081510326123"
                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                <FaPhone className="mr-3 w-4 h-4" />
                Telepon Langsung
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Google Maps - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="p-6 bg-green-50 border-b border-green-100">
              <div className="flex items-center justify-center">
                <FaMapMarkerAlt className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Lokasi Kantor Kami</h3>
              </div>
              <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
                Plaza Cordoba Blok I no 6 dan 7, Jl. Batam Nusaloka BSD, Tangerang Selatan
              </p>
            </div>
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.748!2d106.675264!3d-6.301665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5b8c8b8c8b8%3A0x1234567890abcdef!2sPlaza%20Cordoba%2C%20Jl.%20Raya%20Serpong%2C%20BSD%20City%2C%20Tangerang%20Selatan%2C%20Banten!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Dutamover - Plaza Cordoba BSD"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Darurat?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Untuk kebutuhan pindahan mendesak atau emergency, hubungi kami 24/7 melalui WhatsApp
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=+6281510326123&text=Emergency%20-%20Butuh%20bantuan%20pindahan%20mendesak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-red-600 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <FaWhatsapp className="mr-3 w-5 h-5" />
              Emergency WhatsApp 24/7
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
