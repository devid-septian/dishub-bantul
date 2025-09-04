// src/pages/PrivacyPolicy.tsx
import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

function Terms() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="bg-cover bg-hero-image relative h-[40vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center z-10 font-jost mt-[150px] text-primary-dark">
          Syarat &amp; Ketentuan
        </h1>
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
      </section>

      {/* Konten Utama */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-8 leading-relaxed text-gray-700 space-y-6">
          <p className="font-jost">
            Selamat datang di aplikasi dan layanan Dinas Perhubungan Kabupaten Bantul.
            Dengan mengakses atau menggunakan layanan ini, Anda menyetujui untuk
            terikat dengan syarat & ketentuan berikut.
          </p>

          <h2 className="text-xl font-semibold text-primary-dark">1. Penggunaan Layanan</h2>
          <p className="font-jost">
            Layanan hanya boleh digunakan untuk tujuan yang sah dan sesuai dengan
            peraturan perundang-undangan yang berlaku. Anda dilarang menggunakan
            layanan untuk aktivitas yang dapat merugikan pihak lain.
          </p>

          <h2 className="text-xl font-semibold text-primary-dark">2. Hak Kekayaan Intelektual</h2>
          <p className="font-jost">
            Semua konten, logo, desain, dan informasi yang tersedia pada layanan ini
            adalah milik Dinas Perhubungan Kabupaten Bantul. Dilarang memperbanyak
            atau menggunakan tanpa izin resmi.
          </p>

          <h2 className="text-xl font-semibold text-primary-dark">3. Tanggung Jawab Pengguna</h2>
          <p className="font-jost">
            Pengguna bertanggung jawab penuh atas informasi yang diberikan, termasuk
            laporan, data pribadi, dan feedback yang dikirimkan melalui aplikasi.
          </p>

          <h2 className="text-xl font-semibold text-primary-dark">4. Perubahan Syarat & Ketentuan</h2>
          <p className="font-jost">
            Dinas Perhubungan Kabupaten Bantul berhak memperbarui atau mengubah
            syarat & ketentuan ini sewaktu-waktu. Perubahan akan diumumkan melalui
            aplikasi atau website resmi.
          </p>

          <h2 className="text-xl font-semibold text-primary-dark">5. Kontak</h2>
          <p className="font-jost">
            Jika Anda memiliki pertanyaan terkait syarat & ketentuan ini, silakan
            hubungi kami melalui email di{" "}
            <a href="mailto:dishub@bantulkab.go.id" className="text-primary-dark underline font-jost">
              dishub@bantulkab.go.id
            </a>.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Terms
