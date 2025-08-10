/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3E50', // Deep charcoal
          light: '#34495E',
        },
        secondary: {
          DEFAULT: '#7FB3B5', // Soft blue
          light: '#A8D0D2',
        },
        accent: {
          DEFAULT: '#8BA888', // Muted green
          light: '#A3BAA0',
        },
        neutral: {
          lightest: '#F5F6F7',
          light: '#E5E7EB',
          DEFAULT: '#9CA3AF',
          dark: '#4B5563',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}
