/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      keyframes: {
        'float-move': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-4px, 4px)' },
          '50%': { transform: 'translate(4px, 4px)' },
          '75%': { transform: 'translate(4px, -4px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'float-move': 'float-move 1.5s ease-in-out infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#0088FF',     // biru utama
          dark: '#0e2a47',
          light: '#7BC1FF',
        },
        secondary: {
          DEFAULT: '#FFC448',     // oranye
          dark: '#B45309',
          light: '#FCD34D',
        },
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          800: '#1F2937',
        },
      },
      backgroundImage: {
        'hero-image': "url('/img/banner-7.jpg')",
        'bg-pttrn': "url('/img/bg-pttrn.png')",
      },
    },
  },
  plugins: [],
}
