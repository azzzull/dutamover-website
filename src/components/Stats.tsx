'use client'

import { motion } from 'framer-motion'

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden -mt-5 -mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-700 font-medium text-sm sm:text-base">Pindahan Sukses</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-700 font-medium text-sm sm:text-base">Tahun Pengalaman</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-700 font-medium text-sm sm:text-base">Kepuasan Pelanggan</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
