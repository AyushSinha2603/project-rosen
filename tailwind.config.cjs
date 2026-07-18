/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./js/**/*.vue', 'index.html'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        'bg-deep': '#000000',
        panel: 'rgba(255, 255, 255, 0.05)',
        surface: 'rgba(255, 255, 255, 0.03)',
        'surface-2': 'rgba(255, 255, 255, 0.08)',
        line: 'rgba(255, 255, 255, 0.1)',
        ink: '#f4f4f5',
        'ink-dim': '#e4e4e7',
        'ink-soft': '#a1a1aa',
        'ink-faint': '#71717a',
        'ink-mute': '#52525b',
        brand: '#e3b341',
        'brand-hi': '#f9df9f',
        'brand-mid': '#d4af37',
        'brand-deep': '#b48811',
        gold: '#d4af37',
        'gold-hi': '#e9cc74',
        'gold-deep': '#b48811',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        condensed: ['"Saira Condensed"', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 12s infinite',
        'blob-slow': 'blob 18s infinite reverse',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -50px) scale(1.2)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.8)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
