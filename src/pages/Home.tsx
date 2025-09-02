import React from "react"
// const heroImagePath = new URL('../assets/hero.png', import.meta.url).href
const personaImagePath = new URL('../assets/persona.png', import.meta.url).href
const sunnyWeatherPath = new URL('../assets/sunny-weather.png', import.meta.url).href
import { useEffect, useState } from 'react'
import {  FaWhatsapp } from 'react-icons/fa'
import { useRef } from 'react'
import AppDishub from '../components/AppDishub'
import Chart from '../components/Chart'
import UserReport from '../components/UserReport'
import Header from '../components/header'
import Footer from '../components/footer'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const imgRef = useRef<HTMLImageElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const moveX = (x - centerX) / 20 // ubah sensitivitas di sini
    const moveY = (y - centerY) / 20

    if (imgRef.current) {
      imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }
  }

  const statistic = [
    {
      title: 'Laporan Masuk',
      image: new URL('../assets/icon-report-in.png', import.meta.url).href,
      price: '100 Laporan',
    },
    {
      title: 'Laporan Dikerjakan',
      image: new URL('../assets/icon-report-progress.png', import.meta.url).href,
      price: '50 Laporan',
    },
    {
      title: 'Laporan Selesai',
      image: new URL('../assets/icon-report-done.png', import.meta.url).href,
      price: '80 Laporan',
    },
    {
      title: 'Laporan Pending',
      image: new URL('../assets/icon-report-pending.png', import.meta.url).href,
      price: '30 Laporan',
    }
  ]

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 scroll-smooth">
      <Header />

      {/* HERO */}
      <section 
        id="tentang" 
        className="bg-cover bg-hero-image text-white text-center relative h-[100vh] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12" 
        onMouseMove={handleMouseMove} 
      >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="w-full md:w-[50%] flex flex-col justify-start items-start md:pe-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-jost text-black text-center md:text-left">
                DISHUB BANTUL
              </h2>
              <p className="mt-4 font-jost text-base sm:text-lg md:text-[18px] text-gray-600 text-left">
                Dinas Perhubungan Kabupaten Bantul adalah Organisasi Perangkat Daerah di Kabupaten Bantul yang melaksanakan tugas di bidang Perhubungan.
              </p>
              <button className="mt-6 px-8 sm:px-12 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-jost text-lg sm:text-2xl flex items-center">
                Lihat Selengkapnya
              </button>
            </div>

            {/* Image hanya muncul di tablet ke atas */}
            <img
              ref={imgRef}
              src={personaImagePath}
              alt="Persona"
              className="hidden md:block w-full md:w-[50%] object-cover transition-transform duration-150 ease-out"
            />
          </div>
          </div>
      </section>

      {/* APP DISHUB */}
      <section className="w-full py-12 bg-primary flex justify-center items-center bg-bg-pttrn bg-no-repeat bg-[#00194C] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-[1400px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-[40px] font-jost text-white">
            APP DISHUB
          </h2>
          <AppDishub />
        </div>
      </section>

      {/* RINGKASAN STATISTIK */}
      <section id="layanan" className="py-16 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 font-jost">
          Ringkasan Statistik 
        </h2>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            
            {/* Cuaca */}
            <div className="w-full lg:w-[40%]">
              <div className="w-full flex justify-center items-center">
                <div className="bg-primary rounded-[10px] p-8 w-full">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold font-jost text-white mb-8">
                    Laporan Cuaca Yogyakarta
                  </h4>
                  <div className="flex justify-start items-center gap-4">
                    <img src={sunnyWeatherPath} alt="sunny" className="w-[50px]" />
                    <p className="text-6xl sm:text-7xl md:text-8xl font-bold text-yellow-200">
                      27<span className="align-super text-2xl sm:text-3xl">°C</span>
                    </p>
                  </div>
                  <p className="text-lg sm:text-xl text-white">
                    Cerah Berawan
                  </p>
                </div>
              </div>
            </div>

            {/* Statistik */}
            <div className="w-full lg:w-[60%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {statistic.map((item, i) => (
                  <div key={i} className="bg-white rounded-[10px] shadow p-4 text-start flex items-start justify-start gap-2">
                    <div className="rounded overflow-hidden flex justify-center items-center w-[50px]">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-jost">{item.title}</h4>
                      <p className="text-sm font-medium font-jost text-gray-500">{item.price}</p> 
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHART & USER REPORT */}
      <section className="bg-cover bg-hero-image text-white py-[100px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <Chart />
            <UserReport />
          </div>
        </div>
      </section>

      <Footer />
    </main>

  )
}

export default Home
