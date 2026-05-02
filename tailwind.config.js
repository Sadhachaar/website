/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        gold: '#C89B3C',
        deepBlue: '#1E3A5F',
        charcoal: '#222222',
        lightGray: '#666666',
        softWhite: '#FAFAFA',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}