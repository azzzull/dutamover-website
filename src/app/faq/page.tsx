import { Metadata } from 'next'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'FAQ - Pertanyaan Umum | Dutamover.com Jasa Pindahan Terpercaya',
  description: 'Temukan jawaban atas pertanyaan umum seputar jasa pindahan Dutamover.com. Informasi lengkap tentang proses, biaya, asuransi, dan layanan pindahan rumah, kantor, kost.',
  keywords: [
    'FAQ dutamover',
    'pertanyaan jasa pindahan',
    'biaya pindahan',
    'proses pindahan',
    'asuransi barang',
    'layanan pindahan',
    'tanya jawab pindahan',
    'informasi jasa pindah'
  ],
  openGraph: {
    title: 'FAQ - Pertanyaan Umum | Dutamover.com Jasa Pindahan',
    description: 'Jawaban lengkap atas pertanyaan umum seputar jasa pindahan profesional Dutamover.com',
    url: 'https://www.dutamover.com/faq',
    siteName: 'Dutamover.com',
    images: [
      {
        url: '/images/faq-og.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ Dutamover - Pertanyaan Umum Jasa Pindahan'
      }
    ],
    locale: 'id_ID',
    type: 'website'
  },
  alternates: {
    canonical: '/faq'
  }
}

const faqData = [
  {
    category: 'Layanan Umum',
    questions: [
      {
        question: 'Apa saja layanan yang disediakan oleh Dutamover?',
        answer: 'Dutamover menyediakan layanan pindahan rumah, pindahan kantor, pindahan kost, dan layanan packing profesional. Kami juga melayani pindahan antar kota dan dalam kota Jakarta, Bogor, Depok, Tangerang, Bekasi (Jabodetabek).'
      },
      {
        question: 'Apakah Dutamover melayani pindahan di luar Jabodetabek?',
        answer: 'Ya, kami melayani pindahan antar kota ke seluruh Indonesia. Biaya akan disesuaikan dengan jarak dan volume barang yang akan dipindahkan.'
      },
      {
        question: 'Berapa lama proses pindahan biasanya berlangsung?',
        answer: 'Waktu pindahan tergantung pada volume barang dan jarak. Untuk rumah 2-3 kamar dalam kota biasanya 4-8 jam. Pindahan antar kota bisa 1-3 hari tergantung jarak.'
      }
    ]
  },
  {
    category: 'Biaya dan Pembayaran',
    questions: [
      {
        question: 'Bagaimana cara menghitung biaya pindahan?',
        answer: 'Biaya dihitung berdasarkan volume barang, jarak tempuh, tingkat kesulitan akses, dan layanan tambahan yang diperlukan. Kami akan melakukan survei gratis untuk memberikan estimasi yang akurat.'
      },
      {
        question: 'Apakah ada biaya tersembunyi?',
        answer: 'Tidak ada biaya tersembunyi. Semua biaya akan dijelaskan secara transparan dalam quotation sebelum pekerjaan dimulai. Biaya tambahan hanya berlaku jika ada perubahan scope pekerjaan.'
      },
      {
        question: 'Metode pembayaran apa saja yang diterima?',
        answer: 'Kami menerima pembayaran tunai, dan transfer bank. Pembayaran biasanya 50% di awal dan 50% setelah selesai, atau bisa full payment setelah selesai untuk pelanggan yang sudah dipercaya.'
      },
      {
        question: 'Apakah bisa nego harga?',
        answer: 'Harga yang kami berikan sudah sangat kompetitif. Namun untuk volume besar atau pelanggan repeat, kami bisa memberikan diskon khusus.'
      }
    ]
  },
  {
    category: 'Keamanan dan Asuransi',
    questions: [
      {
        question: 'Apakah barang-barang saya diasuransikan selama proses pindahan?',
        answer: 'Ya, semua barang dilindungi asuransi selama proses pindahan. Kami juga sangat berhati-hati dalam handling barang untuk meminimalisir risiko kerusakan.'
      },
      {
        question: 'Bagaimana jika ada barang yang rusak atau hilang?',
        answer: 'Jika terjadi kerusakan atau kehilangan, kami akan mengganti sesuai dengan nilai yang disepakati. Tim kami juga akan melakukan dokumentasi kondisi barang sebelum dan sesudah pindahan.'
      },
      {
        question: 'Apakah tim Dutamover terpercaya dan berpengalaman?',
        answer: 'Semua tim kami sudah berpengalaman minimal 3 tahun dan telah melalui proses seleksi ketat. Kami juga melakukan background check untuk memastikan integritas tim.'
      }
    ]
  },
  {
    category: 'Proses dan Persiapan',
    questions: [
      {
        question: 'Apa yang perlu saya persiapkan sebelum hari pindahan?',
        answer: 'Anda perlu memisahkan barang berharga/penting, memberikan akses yang mudah untuk tim, dan memastikan alamat tujuan sudah siap. Kami akan memberikan checklist lengkap setelah survei.'
      },
      {
        question: 'Apakah perlu melakukan survei terlebih dahulu?',
        answer: 'Sangat disarankan, terutama untuk pindahan rumah atau kantor dengan volume besar. Survei membantu kami memberikan estimasi yang akurat dan persiapan yang optimal.'
      },
      {
        question: 'Berapa lama sebelumnya harus booking?',
        answer: 'Untuk hasil optimal, booking minimal 3-7 hari sebelumnya. Namun untuk urgent, kami akan berusaha mengakomodasi sesuai ketersediaan tim.'
      },
      {
        question: 'Apakah bisa pindahan di hari libur atau malam hari?',
        answer: 'Ya, kami melayani pindahan 24/7 termasuk weekend dan hari libur. Namun ada penyesuaian biaya untuk jam non-regular.'
      }
    ]
  },
  {
    category: 'Layanan Khusus',
    questions: [
      {
        question: 'Apakah menyediakan layanan packing?',
        answer: 'Ya, kami menyediakan layanan packing profesional dengan material berkualitas. Termasuk bubble wrap, kardus, plastic wrap, dan material proteksi lainnya.'
      },
      {
        question: 'Bagaimana dengan barang-barang yang mudah pecah?',
        answer: 'Barang fragile akan ditangani dengan extra care dan material packing khusus. Tim kami sudah terlatih untuk handling barang elektronik, keramik, kaca, dan artwork.'
      },
      {
        question: 'Apakah bisa menyediakan layanan storage/gudang?',
        answer: 'Ya, kami memiliki fasilitas storage yang aman dan bersih. Cocok untuk temporary storage selama renovasi atau ketika rumah/kantor baru belum siap.'
      },
      {
        question: 'Apakah melayani bongkar pasang furniture?',
        answer: 'Ya, tim kami bisa melakukan bongkar pasang furniture seperti lemari, tempat tidur, meja kantor, dan furniture modular lainnya.'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main className="pt-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 -mt-20 pt-32 lg:mt-0 lg:pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Temukan jawaban atas pertanyaan umum seputar layanan jasa pindahan Dutamover
            </p>
            <div className="bg-green-500/20 p-6 rounded-lg">
              <p className="text-lg">
                💡 Tidak menemukan jawaban yang Anda cari? 
                <a 
                  href="https://wa.me/6281510326123" 
                  className="text-yellow-300 hover:text-yellow-200 font-semibold ml-2"
                >
                  Hubungi kami langsung!
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-green-600">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details 
                      key={faqIndex}
                      className="group bg-gray-50 rounded-lg overflow-hidden"
                    >
                      <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDownIcon className="h-5 w-5 text-gray-600 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Masih Ada Pertanyaan Lain?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tim customer service kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami kapan saja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281510326123?text=Halo%20Dutamover%2C%20saya%20punya%20pertanyaan%20tentang%20jasa%20pindahan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
            >
              💬 Chat via WhatsApp
            </a>
            <a
              href="tel:+6281510326123"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
            >
              📞 Telepon Langsung
            </a>
            <a
              href="/contact"
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-flex items-center justify-center"
            >
              📧 Kirim Pesan
            </a>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Tips Persiapan Pindahan
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  📋 Sebelum Pindahan
                </h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Buat inventory barang yang akan dipindahkan</li>
                  <li>• Pisahkan barang berharga dan dokumen penting</li>
                  <li>• Siapkan akses jalan yang mudah untuk mobil</li>
                  <li>• Koordinasi dengan security gedung jika perlu</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  ✅ Hari Pindahan
                </h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Hadir saat tim tiba untuk briefing</li>
                  <li>• Cek kondisi barang sebelum dimuat</li>
                  <li>• Pastikan alamat tujuan jelas dan mudah diakses</li>
                  <li>• Siapkan pembayaran sesuai kesepakatan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
    </>
  )
}
