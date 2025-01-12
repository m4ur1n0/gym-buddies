/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        app_background : "var(--app-background)",
        app_teal : "var(--app-teal)",
        app_white : "var(--app-white)",
        app_black : "var(--app-black)"
      }
    },
  },
  plugins: [],
}

