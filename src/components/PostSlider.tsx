import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import React from "react"

const bus = new URL('../assets/bus.png', import.meta.url).href

const posts = [
  {
    id: 1,
    title: "Keselamatan Berkendara",
    desc: "Tips berkendara aman di jalan raya agar terhindar dari kecelakaan.",
    image: bus,
  },
  {
    id: 2,
    title: "Pentingnya Rambu Lalu Lintas",
    desc: "Kenali arti penting rambu lalu lintas untuk keselamatan pengguna jalan.",
    image: bus,
  },
  {
    id: 3,
    title: "Transportasi Publik Modern",
    desc: "Masa depan transportasi publik yang ramah lingkungan dan efisien.",
    image: bus,
  },
]

function PostSlider() {
  const [current, setCurrent] = useState(0)
  const length = posts.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  // Auto-slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 relative" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Gambar */}
            <div className="h-56 sm:h-72 md:h-[400px] w-full">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full"
              />
            </div>

            {/* Konten */}
            <div className="flex flex-col justify-center items-center md:items-start p-6 sm:p-8 pe-[40px] sm:pe-[40px]">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 text-gray-800 text-center md:text-left">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg text-center md:text-left max-w-xl">
                {post.desc}
              </p>
              <Link
                to={`/post/${post.id}`}
                className="bg-primary hover:bg-primary-dark px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Tombol navigasi */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}

export default PostSlider
