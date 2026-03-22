/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4DBBB0',
          light: '#6ECFC6',
          dark: '#3A9A8F',
        },
        accent: {
          DEFAULT: '#E45A1B',
          yellow: '#F9A447',
        },
        dark: {
          base: '#050B14',
          surface: '#0B1120',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'brand-glow': 'radial-gradient(ellipse at center, rgba(77, 187, 176, 0.15) 0%, transparent 70%)',
        'brand-glow-lg': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(77, 187, 176, 0.25) 0%, transparent 100%)',
        'hero-gradient': 'radial-gradient(ellipse 100% 80% at 50% -20%, rgba(77, 187, 176, 0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        brand: '0 0 20px rgba(77, 187, 176, 0.3)',
        'brand-lg': '0 0 40px rgba(77, 187, 176, 0.5)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(77,187,176,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(77,187,176,0.6), 0 0 80px rgba(77,187,176,0.2)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        borderSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
