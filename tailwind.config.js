/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Defines 'Inter' as the default sans-serif font and 'Poppins' for display headings
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#F58B33',
        'secondary': '#C62128',
        'accent': '#FBBF24',
        'background': '#111827',
        'surface': '#1F2937',
      },
      animation: { 'marquee-slow': 'marquee 40s linear infinite', },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' }, },
      },
    },
  },
  plugins: [],
}
