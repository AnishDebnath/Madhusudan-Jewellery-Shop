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
        maroon: {
          dominant: '#5B0F1B',
          secondary: '#7A1624',
          highlight: '#8E1D2D',
          border: '#6A2A33',
          light: '#6A1320'
        },
        gold: {
          light: '#E1C16E',
          DEFAULT: '#D4AF37',
          dark: '#B8923C',
          hover: '#C9A24D'
        },
        luxury: {
          bg: {
            primary: '#FAF7F4',
            secondary: '#FFFFFF',
            card: '#F2ECE6',
            hover: '#ECE4DD'
          },
          dark: {
            primary: '#2A0C12',
            secondary: '#3B0F18',
            card: '#1A0A0E',
            hover: '#4A1420'
          },
          text: {
            light: '#1A1A1A',
            dark: '#FFFFFF',
            muted: '#7A7A7A',
            darkMuted: '#B3A8A0'
          }
        }
      },
      keyframes: {
        marqueeUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        marqueeDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' }
        }
      },
      animation: {
        'marquee-up': 'marqueeUp 30s linear infinite',
        'marquee-down': 'marqueeDown 30s linear infinite'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
