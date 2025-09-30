import { useParams } from "react-router-dom"
import { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import React from "react"
import { IoLogoGooglePlaystore } from "react-icons/io5";
const simpkb = new URL('../assets/simpkb.png', import.meta.url).href
const andalalin = new URL('../assets/andalalin.png', import.meta.url).href
const angkutan = new URL('../assets/angkutan.png', import.meta.url).href
const parkir = new URL('../assets/parkir.png', import.meta.url).href
const hotline = new URL('../assets/hotline.png', import.meta.url).href
const saludtenan = new URL('../assets/saludtenan-ellipse.png', import.meta.url).href

const apps = [
  { 
    id: 1, 
    name: "SIM PKB", 
    desc: "Sistem Informasi Manajemen Pengembangan Keprofesian Berkelanjutan", 
    image: simpkb,
    playstore: "https://play.google.com/store/apps/details?id=com.dishub.simpkb" 
  },
  { 
    id: 2, 
    name: "ANDALALIN", 
    desc: "Aplikasi Analisis Dampak Lalu Lintas", 
    image: andalalin,
    playstore: "https://play.google.com/store/apps/details?id=com.dishub.andalalin" 
  },
  { 
    id: 3, 
    name: "ANGKUTAN", 
    desc: "Aplikasi layanan informasi transportasi darat, termasuk pengecekan laik jalan kendaraan dan informasi tracking bus", 
    image: angkutan,
    playstore: "https://play.google.com/store/apps/details?id=com.dishub.angkutan" 
  },
  { 
    id: 4, 
    name: "HOTLINE", 
    desc: "Aplikasi layanan aduan masyarakat untuk memberikan laporan", 
    image: hotline,
    playstore: "https://play.google.com/store/apps/details?id=com.dishub.hotline" 
  },
  { 
    id: 5, 
    name: "PARKIR", 
    desc: "Aplikasi layanan parkir online", 
    image: parkir,
    playstore: "https://play.google.com/store/apps/details?id=com.dishub.parkir" 
  },
  { 
    id: 6, 
    name: "SALUD TENAN", 
    desc: "Aplikasi edukasi rambu Lalu lintas", 
    image: saludtenan,
    playstore: "https://play.google.com/store/apps/details?id=com.dishub.saludtenan" 
  },
]

function AppDetail() {
  const { id } = useParams()
  const app = apps.find((a) => a.id.toString() === id)

  const [form, setForm] = useState({ name: "", email: "", feedback: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Feedback dikirim:", form)
    alert("Terima kasih atas feedback Anda!")
    setForm({ name: "", email: "", feedback: "" })
  }

  if (!app) return <p className="text-center py-20">Aplikasi tidak ditemukan.</p>

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Header dari Home */}
      <Header />

      <section 
        id="tentang" 
        className="bg-cover bg-hero-image relative h-auto md:h-[70vh] lg:h-[70vh] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center pt-[150px] xs:pt-[230px] sm:pt-[230px] md:pt-[230px] lg:pt-[330px] pb-[150px] lg:pb-[230px]" 
      >
        <div className="flex flex-col md:flex-row items-center w-full max-w-[900px] mx-auto gap-10">
  
          {/* Gambar Aplikasi */}
          <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] flex-shrink-0">
            <img 
              src={app.image} 
              alt={app.name} 
              className="w-full h-full object-contain rounded-2xl shadow-lg bg-white p-4"
            />
          </div>

          {/* Teks & Tombol */}
          <div className="flex flex-col w-full justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-jost mb-4 text-primary-dark text-center md:text-left w-full">
              {app.name}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 text-center md:text-left w-full">
              {app.desc}
            </p>
            <a 
              href={app.playstore} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block md:w-fit bg-primary-dark hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition text-center"
            >
              <IoLogoGooglePlaystore className="inline mr-2 w-[24px] h-[24px]" /> 
              Download di Google Playstore
            </a>
          </div>
        </div>


        {/* Overlay gelap biar teks lebih jelas */}
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
      </section>

      {/* Konten utama */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-8">

          {/* Form Feedback */}
          <h2 className="text-xl font-bold font-jost mb-4">Berikan Feedback</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Nama Anda" 
              value={form.name} 
              onChange={handleChange}
              className="border rounded-lg p-3"
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Anda" 
              value={form.email} 
              onChange={handleChange}
              className="border rounded-lg p-3"
              required
            />
            <textarea 
              name="feedback" 
              placeholder="Tulis feedback Anda..." 
              value={form.feedback} 
              onChange={handleChange}
              className="border rounded-lg p-3 h-32"
              required
            />
            <button 
              type="submit" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-bold"
            >
              Kirim Feedback
            </button>
          </form>
        </div>
      </div>

      {/* Footer dari Home */}
      <Footer />
    </main>
  )
}

export default AppDetail
