/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#151515',
          card: '#1a1a1a',
          border: '#2a2a2a',
          text: '#e0e0e0',
          muted: '#a0a0a0',
        },
        accent: {
          blue: '#60a5fa',
          purple: '#a78bfa',
          green: '#34d399',
          orange: '#fb923c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}