import { useParams } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"
import React from "react"

// Data dummy post (bisa diganti ambil dari API / context)
const posts = [
  {
    id: 1,
    title: "Keselamatan Berkendara",
    content:
      "Tips berkendara aman di jalan raya agar terhindar dari kecelakaan. Pastikan selalu menggunakan helm, mematuhi rambu lalu lintas, dan menjaga jarak aman dengan kendaraan lain.",
    image: "https://source.unsplash.com/1200x600/?traffic,road",
  },
  {
    id: 2,
    title: "Pentingnya Rambu Lalu Lintas",
    content:
      "Rambu lalu lintas merupakan petunjuk penting untuk keselamatan pengguna jalan. Dengan memahami arti rambu, kita dapat mengurangi resiko kecelakaan.",
    image: "https://source.unsplash.com/1200x600/?sign,street",
  },
  {
    id: 3,
    title: "Transportasi Publik Modern",
    content:
      "Transportasi publik masa depan akan mengutamakan kenyamanan, efisiensi, dan ramah lingkungan. Inovasi bus listrik, sistem tiket digital, hingga integrasi antar moda akan menjadi solusi.",
    image: "https://source.unsplash.com/1200x600/?bus,transport",
  },
]

function PostDetail() {
  const { id } = useParams()
  const post = posts.find((p) => p.id.toString() === id)

  if (!post) {
    return (
      <main className="bg-gray-50 min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-red-600">Post tidak ditemukan</h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Konten detail post */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:pt-[180px] sm:pt-[90px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {post.title}
        </h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-xl shadow mb-8"
        />
        <p className="text-gray-700 text-lg leading-relaxed">{post.content}</p>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default PostDetail
