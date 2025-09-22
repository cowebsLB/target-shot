/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'target-orange': '#ff6b35',
        'target-black': '#000000',
        'target-gray': '#1a1a1a',
        'target-light-gray': '#2a2a2a',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(255, 107, 53, 0.5)'
          },
          '100%': {
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.8)'
          }
        }
      }
    },
  },
  plugins: [],
}
