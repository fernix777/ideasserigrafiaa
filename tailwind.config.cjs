/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ideas: {
          light: '#F0F0F2',    // Gris muy claro - fondo claro
          dark: '#0D0C0B',     // Negro suave - fondo oscuro
          primary: '#D92929',  // Rojo principal
          secondary: '#BF3434', // Rojo secundario
          gray: '#BFBFBF'      // Gris neutro
        }
      }
    }
  },
  plugins: []
}