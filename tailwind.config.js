/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Body font
        display: ['Space Grotesk', 'sans-serif'], // Headings
      },
      colors: {
        ice: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        }
      },
    },
  },
  plugins: [],
}