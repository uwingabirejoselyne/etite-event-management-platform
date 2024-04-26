/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#265E78',
          400: '#3E7591',
          200: '#64A1C0',
          100: '#DFEAF0',
          tertiary: '#111827',
        },
        mustard: {
          DEFAULT: '#90A905',
          200: '#EBF541',
          100: '#F8FCAD',
        },

        lachs: {
          DEFAULT: '#EC903A',
          400: '#F6A356',
          200: '#FFC28A',
          100: '#FFE3CA',
        },
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
}
