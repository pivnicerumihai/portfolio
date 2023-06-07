/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {

      // Primary
      'primary': '#181f24',
      'secondary': '#80b5ba',
      'secondary-transparent': 'rgba(128, 181, 186, 0.2)',
      'secondary-transparent-hover': 'rgba(128, 181, 186, 0.6)'
    },
   
  },
  plugins: [],
}
