/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./js/**/*.vue', 'index.html'],
  theme: {
    extend: {
      colors: {
        bg: '#121212',
        'bg-deep': '#0a0a0a',
        panel: '#1e1e1e',
        surface: '#18181b',
        'surface-2': '#27272a',
        line: '#3f3f46',
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
      }
    },
  },
  plugins: [],
}
