/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        primaryDark: '#2563eb',
        secondary: '#6366f1',
        darkbg: 'var(--bg-color)',
        cardbg: 'var(--card-bg)',
        cardhover: 'var(--card-hover)',
        bordercol: 'var(--border-color)',
        textmain: 'var(--text-main)',
        textmuted: 'var(--text-muted)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
