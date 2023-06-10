/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      fontFamily:{
        'sans': ['Orbitron', 'sans-serif'],
      }
    },
    colors: {

      // Primary
      'primary': '#181f24',
      'secondary': '#B6F7F8',
      'secondary-transparent': 'rgba(128, 181, 186, 0.2)',
      'secondary-transparent-2': 'rgba(128, 181, 186, 1)',
      'secondary-transparent-hover': 'rgba(128, 181, 186, 0.3)'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    }
  },
  plugins: [],
}
