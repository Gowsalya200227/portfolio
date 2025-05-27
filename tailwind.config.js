/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // white background
        secondary: "#1e3a8a", // deep blue
        tertiary: "#f1f5f9", // light gray background
        accent: "#3b82f6", // bright blue accent
        darkText: "#0f172a", // very dark blue for text
        lightText: "#64748b", // medium gray for text
        highlight: "#e2e8f0", // very light gray highlight
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
