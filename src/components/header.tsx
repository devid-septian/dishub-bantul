import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import { Link } from "react-router-dom"

const logoPath = new URL('../assets/Dishub-Logo.png', import.meta.url).href

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* ===== Info Bar (hidden on mobile & hidden when scroll) ===== */}
      {!isScrolled && (
        <div className='w-full bg-primary-dark hidden md:block'>
          <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 sm:px-8 py-2 font-jost text-white">
            <div className='flex space-x-6 text-sm items-center'>
              <div className='flex space-x-2 items-center'>
                <FiPhoneCall className='inline' /> <span>Phone: 0274367321</span>
              </div>
              <div className='flex space-x-2 items-center'>
                <HiOutlineMail className='inline' /> <span>Email: dishub@bantulkab.go.id</span>
              </div>
            </div>
            <div className='flex space-x-4 text-lg'>
                <a
                  href="https://web.facebook.com/dishub.bantul?_rdc=1&_rdr#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex rounded-full w-[40px] h-[40px] items-center justify-center bg-white/20 hover:bg-white/40 transition-colors"
                >
                  <FaFacebookF color='white' />
                </a>
  
                <a
                  href="https://www.instagram.com/dishub_bantul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex rounded-full w-[40px] h-[40px] items-center justify-center bg-white/20 hover:bg-white/40 transition-colors"
                >
                  <FaInstagram color='white' />
                </a>
  
                <a
                  href="https://www.youtube.com/DinasPerhubunganBantul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex rounded-full w-[40px] h-[40px] items-center justify-center bg-white/20 hover:bg-white/40 transition-colors"
                >
                  <FaYoutube color='white' />
                </a>
  
            </div>
          </div>
        </div>
      )}

      {/* ===== Main Navbar ===== */}
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 sm:px-8 md:px-12 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logoPath} alt="logo" className="w-32" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex space-x-6 font-jost">
          <Link to="/" className="hover:text-primary">Dashboard</Link>
          <Link to="#" className="hover:text-primary">Laporan Masuk</Link>
          <Link to="#" className="hover:text-primary">Data Tugas</Link>
          <Link to="#" className="hover:text-primary">Statistik</Link>
          <Link to="#" className="hover:text-primary">Data Master</Link>
          <Link to="#" className="hover:text-primary">E-Surat</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* ===== Overlay (Black Transparent) ===== */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ===== Mobile Drawer (slide in from right) ===== */}
      <nav
        className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-md z-50 transition-transform duration-300 transform
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button inside Drawer */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-2xl"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6 font-jost text-gray-800">
          <li><a href="#" onClick={() => setMenuOpen(false)}>Dashboard</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Laporan Masuk</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Data Tugas</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Statistik</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Data Master</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>E-Surat</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
