/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#1a1a1a',
        'parchment': '#f5f1e8',
        'gold': '#d4af37',
        'copper': '#b87333',
        'ink-deep': '#0a0a0a',
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

