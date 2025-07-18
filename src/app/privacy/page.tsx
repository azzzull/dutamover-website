import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Dutamover',
  description: 'Kebijakan privasi Dutamover mengenai pengumpulan, penggunaan, dan perlindungan data pribadi pelanggan.',
  alternates: {
    canonical: '/privacy',
  },
  robots: 'index, follow',
}

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600">
            Terakhir diperbarui: 12 Juli 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-lg">
          
          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>
            Dutamover mengumpulkan informasi yang Anda berikan kepada kami secara langsung, seperti:
          </p>
          <ul>
            <li>Nama lengkap dan informasi kontak (email, nomor telepon)</li>
            <li>Alamat pickup dan tujuan pindahan</li>
            <li>Detail barang yang akan dipindahkan</li>
            <li>Informasi pembayaran untuk transaksi</li>
            <li>Komunikasi dengan tim customer service kami</li>
          </ul>

          <h2>2. Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>
            Informasi yang kami kumpulkan digunakan untuk:
          </p>
          <ul>
            <li>Menyediakan layanan jasa pindahan dan packing</li>
            <li>Berkomunikasi dengan Anda mengenai layanan kami</li>
            <li>Memproses pembayaran dan transaksi</li>
            <li>Meningkatkan kualitas layanan kami</li>
            <li>Mengirimkan informasi promosi (dengan persetujuan Anda)</li>
            <li>Mematuhi persyaratan hukum yang berlaku</li>
          </ul>

          <h2>3. Berbagi Informasi</h2>
          <p>
            Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:
          </p>
          <ul>
            <li>Dengan persetujuan eksplisit dari Anda</li>
            <li>Kepada mitra layanan yang membantu operasional kami (dengan perjanjian kerahasiaan)</li>
            <li>Ketika diwajibkan oleh hukum atau proses pengadilan</li>
            <li>Untuk melindungi hak, properti, atau keselamatan Dutamover dan pelanggan</li>
          </ul>

          <h2>4. Keamanan Data</h2>
          <p>
            Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Namun, tidak ada metode transmisi melalui internet yang 100% aman.
          </p>

          <h2>5. Penyimpanan Data</h2>
          <p>
            Kami menyimpan informasi pribadi Anda selama diperlukan untuk menyediakan layanan atau sebagaimana diwajibkan oleh hukum. Data akan dihapus secara aman ketika tidak lagi diperlukan.
          </p>

          <h2>6. Hak-Hak Anda</h2>
          <p>
            Anda memiliki hak untuk:
          </p>
          <ul>
            <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
            <li>Meminta koreksi atas informasi yang tidak akurat</li>
            <li>Meminta penghapusan informasi pribadi Anda</li>
            <li>Menarik persetujuan untuk pemrosesan data</li>
            <li>Mengajukan keluhan kepada otoritas perlindungan data</li>
          </ul>

          <h2>7. Cookies dan Teknologi Tracking</h2>
          <p>
            Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Anda dapat mengatur browser untuk menolak cookies, namun beberapa fitur website mungkin tidak berfungsi optimal.
          </p>

          <h2>8. Perubahan Kebijakan Privasi</h2>
          <p>
            Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan yang baru.
          </p>

          <h2>9. Kontak</h2>
          <p>
            Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami:
          </p>
          <ul>
            <li>Email: marketing@dutamover.com</li>
            <li>Telepon: 0815-1032-6123</li>
            <li>WhatsApp: +62 815-1032-6123</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-green-800 font-semibold mb-2">Komitmen Kami</h3>
            <p className="text-green-700 mb-0">
              Dutamover berkomitmen untuk melindungi privasi dan keamanan data pribadi pelanggan. 
              Kami menerapkan standar keamanan terbaik dan mematuhi peraturan perlindungan data yang berlaku.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
