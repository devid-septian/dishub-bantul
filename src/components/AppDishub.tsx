// src/components/CarouselSection.tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import React from 'react'
import { Link } from "react-router-dom"

// Custom styles for the dots
import './Carousel.css'

const slides = [
  {
    id: 1,
    image: '/src/assets/simpkb.png',
    title: 'SIM PKB',
    link: 'https://example.com/simpkb'
  },
  {
    id: 2,
    image: '/src/assets/andalalin.png',
    title: 'ANDALALIN',
    link: 'https://example.com/andalalin'
  },
  {
    id: 3,
    image: '/src/assets/angkutan.png',
    title: 'ANGKUTAN',
    link: 'https://example.com/angkutan'
  },
  {
    id: 4,
    image: '/src/assets/parkir.png',
    title: 'PARKIR',
    link: 'https://example.com/parkir'
  },
  {
    id: 5,
    image: '/src/assets/hotline.png',
    title: 'HOTLINE',
    link: 'https://example.com/hotline'
  },
  {
    id: 6,
    image: '/src/assets/saludtenan.png',
    title: 'SALUD TENAN',
    link: 'https://example.com/saludtenan'
  }
]

export default function CarouselSection() {
  return (
    <div className="w-full mx-auto px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-custom-active'
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        className="custom-swiper"
        breakpoints={{
          340: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          }
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden flex flex-col items-center">
              <Link 
                key={slide.id} 
                to={`/app/${slide.id}`}
                >
                <div className="p-[15px] text-center bg-white rounded-full w-[150px] h-[150px] overflow-hidden flex justify-center items-center">
                  <img src={slide.image} alt={slide.title} className="w-full max-w-[100%] mx-auto" />
                </div>
              
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 font-jost text-yellow-400">
                    {slide.title}
                  </h3>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
