import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Syarat dan Ketentuan - Dutamover',
  description: 'Syarat dan ketentuan penggunaan layanan jasa pindahan Dutamover.',
  alternates: {
    canonical: '/terms',
  },
  robots: 'index, follow',
}

export default function TermsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-green-100">
            Ketentuan penggunaan layanan jasa pindahan Dutamover
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                <strong>Terakhir diperbarui:</strong> {new Date().toLocaleDateString('id-ID')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di Dutamover. Syarat dan Ketentuan ini mengatur penggunaan 
                layanan jasa pindahan yang disediakan oleh Dutamover. Dengan menggunakan 
                layanan kami, Anda setuju untuk terikat dengan syarat dan ketentuan berikut.
              </p>
            </div>

            <div className="space-y-8">
              
              {/* Definisi */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Definisi</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>"Dutamover"</strong> atau <strong>"Kami"</strong> merujuk pada perusahaan penyedia jasa pindahan</li>
                  <li><strong>"Pelanggan"</strong> atau <strong>"Anda"</strong> merujuk pada individu atau entitas yang menggunakan layanan kami</li>
                  <li><strong>"Layanan"</strong> merujuk pada semua jasa pindahan, packing, dan layanan terkait yang kami sediakan</li>
                  <li><strong>"Barang"</strong> merujuk pada semua item yang akan dipindahkan atau dikemas</li>
                  <li><strong>"Kontrak"</strong> merujuk pada perjanjian antara Dutamover dan Pelanggan</li>
                </ul>
              </div>

              {/* Layanan */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Layanan yang Disediakan</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Jenis Layanan</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Jasa pindahan rumah dan kantor</li>
                  <li>Jasa packing dan unpacking</li>
                  <li>Pembongkaran dan pemasangan furniture</li>
                  <li>Layanan transportasi barang</li>
                  <li>Konsultasi dan survey gratis</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Cakupan Layanan</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Layanan tersedia di area Jakarta dan sekitarnya</li>
                  <li>Layanan antar kota dengan perjanjian khusus</li>
                  <li>Operasional 24/7 dengan penjadwalan terlebih dahulu</li>
                  <li>Tim profesional berpengalaman dan terlatih</li>
                </ul>
              </div>

              {/* Pemesanan */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pemesanan dan Kontrak</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Proses Pemesanan</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Pemesanan dapat dilakukan melalui WhatsApp, telepon, atau website</li>
                  <li>Survey gratis akan dijadwalkan untuk estimasi yang akurat</li>
                  <li>Kontrak tertulis akan dibuat setelah survey</li>
                  <li>Konfirmasi pemesanan memerlukan pembayaran deposit</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Pembatalan</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Pembatalan lebih dari 48 jam sebelum jadwal: tanpa biaya pembatalan</li>
                  <li>Pembatalan 24-48 jam sebelum jadwal: biaya pembatalan 25% dari deposit</li>
                  <li>Pembatalan kurang dari 24 jam: biaya pembatalan 50% dari deposit</li>
                  <li>Pembatalan di hari H: deposit tidak dikembalikan</li>
                </ul>
              </div>

              {/* Harga dan Pembayaran */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Harga dan Pembayaran</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Struktur Harga</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Harga ditentukan berdasarkan volume, jarak, dan kompleksitas pindahan</li>
                  <li>Survey gratis untuk estimasi yang akurat</li>
                  <li>Harga dapat berubah jika ada perbedaan signifikan dari estimasi awal</li>
                  <li>Biaya tambahan akan dikomunikasikan dan disetujui terlebih dahulu</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Metode Pembayaran</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Transfer bank</li>
                  <li>Tunai</li>
                  <li>E-wallet (OVO, GoPay, Dana)</li>
                  <li>Deposit 30% saat konfirmasi, sisanya setelah selesai</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Biaya Tambahan</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Parkir dan tol (sesuai kuitansi)</li>
                  <li>Biaya crane atau lift khusus</li>
                  <li>Overtime di luar jam kerja normal</li>
                  <li>Packing material tambahan</li>
                </ul>
              </div>

              {/* Tanggung Jawab */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tanggung Jawab dan Asuransi</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Tanggung Jawab Dutamover</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Menangani barang dengan hati-hati dan profesional</li>
                  <li>Menggunakan material packing yang berkualitas</li>
                  <li>Menyediakan tim yang terlatih dan berpengalaman</li>
                  <li>Memberikan asuransi dasar untuk barang yang dipindahkan</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Tanggung Jawab Pelanggan</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Memberikan informasi yang akurat tentang barang</li>
                  <li>Menyiapkan barang sesuai instruksi</li>
                  <li>Hadir atau menunjuk perwakilan saat pindahan</li>
                  <li>Melakukan pengecekan barang sebelum dan sesudah pindahan</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Asuransi</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Asuransi dasar maksimal Rp 5.000.000 per kejadian</li>
                  <li>Asuransi tambahan tersedia dengan biaya terpisah</li>
                  <li>Klaim asuransi harus dilaporkan maksimal 24 jam</li>
                  <li>Barang berharga tinggi disarankan diasuransikan terpisah</li>
                </ul>
              </div>

              {/* Barang Terlarang */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Barang yang Tidak Dapat Dipindahkan</h2>
                <p className="text-gray-700 mb-4">
                  Dutamover tidak bertanggung jawab untuk memindahkan barang-barang berikut:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Barang ilegal atau terlarang</li>
                  <li>Bahan berbahaya dan mudah terbakar</li>
                  <li>Barang hidup (hewan peliharaan, tanaman)</li>
                  <li>Makanan yang mudah basi</li>
                  <li>Uang, perhiasan, dan dokumen penting (disarankan dibawa sendiri)</li>
                  <li>Barang dengan nilai emosional tinggi yang tidak dapat diganti</li>
                </ul>
              </div>

              {/* Force Majeure */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Force Majeure</h2>
                <p className="text-gray-700 mb-4">
                  Dutamover tidak bertanggung jawab atas keterlambatan atau kegagalan 
                  dalam melaksanakan layanan akibat:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Bencana alam</li>
                  <li>Keadaan cuaca ekstrem</li>
                  <li>Kerusuhan atau gangguan keamanan</li>
                  <li>Kebijakan pemerintah atau lockdown</li>
                  <li>Kondisi lain di luar kendali kami</li>
                </ul>
              </div>

              {/* Penyelesaian Sengketa */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Penyelesaian Sengketa</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Komunikasi langsung dengan customer service untuk penyelesaian awal</li>
                  <li>Mediasi melalui pihak ketiga jika diperlukan</li>
                  <li>Arbitrase sesuai dengan hukum yang berlaku di Indonesia</li>
                  <li>Pengadilan Jakarta Pusat sebagai yurisdiksi terakhir</li>
                </ul>
              </div>

              {/* Perubahan Syarat */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Perubahan Syarat dan Ketentuan</h2>
                <p className="text-gray-700">
                  Dutamover berhak mengubah syarat dan ketentuan ini kapan saja. 
                  Perubahan akan diberitahukan melalui website atau komunikasi langsung. 
                  Penggunaan layanan yang berkelanjutan setelah perubahan menunjukkan 
                  penerimaan Anda terhadap syarat yang diperbarui.
                </p>
              </div>

              {/* Kontak */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Kontak</h2>
                <p className="text-gray-700 mb-4">
                  Untuk pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Dutamover</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> marketing@dutamover.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>WhatsApp:</strong> 0815-1032-6123
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Website:</strong> www.dutamover.com
                  </p>
                  <p className="text-gray-700">
                    <strong>Alamat:</strong> Jakarta, Indonesia
                  </p>
                </div>
              </div>

            </div>

            {/* Persetujuan */}
            <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Persetujuan</h3>
              <p className="text-green-700">
                Dengan menggunakan layanan Dutamover, Anda menyatakan bahwa Anda telah 
                membaca, memahami, dan menyetujui semua syarat dan ketentuan yang tercantum 
                di atas. Jika Anda tidak setuju dengan syarat dan ketentuan ini, 
                harap tidak menggunakan layanan kami.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Siap Menggunakan Layanan Kami?
          </h2>
          <p className="text-gray-600 mb-8">
            Hubungi tim profesional kami untuk konsultasi gratis dan penawaran terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20layanan%20pindahan%20nya%20Dong%20?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Konsultasi Gratis
            </a>
            <a
              href="tel:081510326123"
              className="bg-white text-green-600 border border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Telepon Sekarang
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
