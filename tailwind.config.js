/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
  important:false
}

