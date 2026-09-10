/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#0b192c',
          blue: '#1e3e62',
          orange: '#ff6500',
          light: '#f5f7fa',
          gold: '#e0a96d'
        }
      }
    },
  },
  plugins: [],
}
