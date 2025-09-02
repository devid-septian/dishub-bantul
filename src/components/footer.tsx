import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"

const logoWhite = new URL('../assets/dishub-logo-white.png', import.meta.url).href
const footerImg = new URL('../assets/footer-img.png', import.meta.url).href

function Footer() {
  return (
    <footer className="bg-primary-dark text-black font-jost relative">
      {/* Tambah padding kiri & kanan responsif */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row gap-6">
          {/* Bagian kiri */}
          <div className="md:w-[40%] py-12 border-b md:border-b-0 md:border-r border-gray-100/20 md:pr-4">
            <img src={logoWhite} alt="logo" className="w-90 mb-6" />
            <p className="text-white mb-6">
              Follow akun media Sosial DISHUB BANTUL untuk mendapatkan informasi terbaru lainnya
            </p>
            <div className='flex space-x-4 text-lg'>
              <a
                href="https://twitter.com/dishub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex rounded-full w-[40px] h-[40px] items-center justify-center bg-white/20 hover:bg-white/40 transition-colors"
              >
                <FaTwitter color='white' />
              </a>
              <a
                href="https://facebook.com/dishub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex rounded-full w-[40px] h-[40px] items-center justify-center bg-white/20 hover:bg-white/40 transition-colors"
              >
                <FaFacebookF color='white' />
              </a>
              <a
                href="https://instagram.com/dishub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex rounded-full w-[40px] h-[40px] items-center justify-center bg-white/20 hover:bg-white/40 transition-colors"
              >
                <FaInstagram color='white' />
              </a>
              <a
                href="https://youtube.com/dishub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex rounded-full w-[40px] h-[40px] items-center justify-center bg-white/20 hover:bg-white/40 transition-colors"
              >
                <FaYoutube color='white' />
              </a>
            </div>
          </div>

          {/* Bagian kanan */}
          <div className="md:w-[60%] py-12 flex flex-col md:flex-row gap-6 text-white">
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-left mb-6 font-jost">Alamat</h2>
              <p>
                Dinas Perhubungan Kabupaten Bantul <br />
                Komplek Perkantoran II Pemda Bantul Jl. Lingkar Timur Manding Trirenggo Bantul 55714
              </p>
            </div>
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-left mb-6 font-jost">Link</h2>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Kebijakan Privasi</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Syarat & Ketentuan</a></p>
            </div>
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-left mb-6 font-jost">Info Kontak</h2>
              <p>Phone: 0274367321</p>
              <p>Email: dishub@bantulkab.go.id</p>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="w-full border-t border-gray-100/20 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-white">&copy; 2025 dishub.bantul.id. All rights reserved.</p>
        </div>
      </div>

      {/* gambar footer */}
      <img src={footerImg} alt="footer" className="hidden md:block w-[20%] absolute bottom-[80px] right-0 opacity-40" />
    </footer>
  )
}

export default Footer
