import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Dutamover - Jasa Pindahan Profesional Jakarta',
  description: 'Dutamover adalah perusahaan jasa pindahan terpercaya dengan pengalaman 10+ tahun di Jakarta. Tim profesional, layanan lengkap, dan kepuasan pelanggan adalah prioritas utama kami.',
  keywords: ['tentang dutamover', 'sejarah perusahaan pindahan', 'visi misi dutamover', 'tim profesional pindahan'],
  openGraph: {
    title: 'Tentang Dutamover - Jasa Pindahan Profesional Jakarta',
    description: 'Mengenal lebih dekat Dutamover, perusahaan jasa pindahan terpercaya dengan pengalaman 10+ tahun di Jakarta.',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-green-600">Dutamover</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengan pengalaman lebih dari 10 tahun, Dutamover telah menjadi pilihan utama 
            untuk layanan pindahan profesional di Jakarta dan sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi Kami</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Menjadi perusahaan jasa pindahan terdepan di Indonesia yang memberikan 
              layanan berkualitas tinggi dengan standar keamanan dan keprofesionalan terbaik.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi Kami</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Memberikan layanan pindahan yang aman, efisien, dan terpercaya
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Mengutamakan kepuasan dan kepercayaan pelanggan
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Mengembangkan tim profesional yang kompeten dan berpengalaman
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Memberikan harga yang kompetitif dengan kualitas terbaik
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600">Pindahan Sukses</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Kepuasan Pelanggan</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Layanan Konsultasi</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mengapa Memilih Dutamover?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Terpercaya</h3>
              <p className="text-gray-600">
                Lebih dari 10 tahun melayani pelanggan dengan rekam jejak yang terbukti dan testimoni positif.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tim Profesional</h3>
              <p className="text-gray-600">
                Tim yang terlatih dan berpengalaman dalam menangani berbagai jenis barang dengan kehati-hatian.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tepat Waktu</h3>
              <p className="text-gray-600">
                Komitmen untuk menyelesaikan pindahan sesuai jadwal yang telah disepakati bersama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
