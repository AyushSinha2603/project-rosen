/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./js/**/*.vue', 'index.html'],
  theme: {
    extend: {
      colors: {
        bg: '#02001e',
        'bg-deep': '#010012',
        panel: '#0b0930',
        surface: '#0b0930',
        'surface-2': '#130f3d',
        line: '#262358',
        ink: '#e6edf3',
        'ink-dim': '#c9d1d9',
        'ink-soft': '#a8b3bd',
        'ink-faint': '#8b949e',
        'ink-mute': '#6e7681',
        brand: '#39d353',
        'brand-hi': '#56e06b',
        'brand-mid': '#26a641',
        'brand-deep': '#006d32',
        gold: '#d4af37',
        'gold-hi': '#e9cc74',
        'gold-deep': '#b48811',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        condensed: ['"Saira Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
