/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B45309", // Ámbar tostado
        secondary: "#1F2933", // Gris carbón
        textMain: "#0F172A",
        textSec: "#64748B",
        bgLight: "#F9FAFB",
        bgDark: "#111827",
        bgCard: "#FFFFFF",
        accent: "#D97706",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
