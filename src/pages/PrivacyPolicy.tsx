// src/pages/PrivacyPolicy.tsx
import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

function PrivacyPolicy() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="bg-cover bg-hero-image relative h-[40vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center z-10 font-jost mt-[150px] text-primary-dark">
          Privacy Policy
        </h1>
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
      </section>

      {/* Konten Utama */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-8 leading-relaxed text-gray-700 space-y-6">
          <p className="font-jost" >
            Kami di <span className="font-semibold">Dinas Perhubungan Kabupaten Bantul</span> 
            berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
            Halaman ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
            dan melindungi informasi Anda saat menggunakan aplikasi kami.
          </p>

          <h2 className="text-xl font-bold font-jost">Informasi yang Kami Kumpulkan</h2>
          <ul className="list-disc pl-6 space-y-2 font-jost">
            <li>Informasi pribadi seperti nama dan alamat email (jika Anda mengirim feedback).</li>
            <li>Data penggunaan aplikasi untuk meningkatkan layanan.</li>
            <li>Informasi perangkat seperti tipe perangkat dan sistem operasi.</li>
          </ul>

          <h2 className="text-xl font-bold font-jost">Penggunaan Informasi</h2>
          <p className="font-jost">
            Informasi yang dikumpulkan digunakan untuk:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-jost">
            <li>Meningkatkan kualitas aplikasi dan layanan.</li>
            <li>Menanggapi pertanyaan, masukan, atau feedback pengguna.</li>
            <li>Tujuan analitik untuk memahami pola penggunaan aplikasi.</li>
          </ul>

          <h2 className="text-xl font-bold font-jost">Perlindungan Data</h2>
          <p className="font-jost">
            Kami menggunakan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda 
            dari akses yang tidak sah, penggunaan, atau pengungkapan.
          </p>

          <h2 className="text-xl font-bold font-jost">Perubahan Kebijakan</h2>
          <p className="font-jost">
            Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan dipublikasikan 
            di halaman ini dan berlaku sejak tanggal dipublikasikan.
          </p>

          <h2 className="text-xl font-bold font-jost">Kontak Kami</h2>
          <p className="font-jost">
            Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami di:
            <br />
            <span className="font-semibold">Email:</span> dishub@bantulkab.go.id <br />
            <span className="font-semibold">Telepon:</span> 0274-367321
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default PrivacyPolicy
