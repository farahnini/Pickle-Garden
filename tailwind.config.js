/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pickle: {
          50: '#faf8f5',
          100: '#f3ede2',
          200: '#e6dcc7',
          300: '#d4c2a3',
          400: '#c2a980',
          500: '#b39364', // Primary Luxury Gold
          600: '#9c7a50',
          700: '#81613f',
          800: '#664b32',
          900: '#3b2b1e',
          dark: '#030a06', // Deep Forest Black
        },
        court: {
          blue: '#0284c7',
          deep: '#0f172a',
          surface: '#12291d',
          accent: '#06b6d4'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Cabinet Grotesk', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.8, filter: 'drop-shadow(0 0 15px rgba(132, 204, 22, 0.6))' },
          '50%': { opacity: 1, filter: 'drop-shadow(0 0 25px rgba(163, 230, 53, 0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
