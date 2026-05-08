/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        silver: '#C0C0C0',
        deepCharcoal: '#1A1A1A',
        charcoal: '#1A1A1A',
        deepNavy: '#0B1F3A',
        lightGray: '#555555',
        softWhite: '#F7F7F7',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}