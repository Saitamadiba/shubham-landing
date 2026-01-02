/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sacred Dark Theme
        primary: '#14141f',
        secondary: '#1a1a2e',
        cosmic: '#1e1e32',
        // Vedic Sacred Colors
        saffron: '#ff9933',
        'deep-saffron': '#e67300',
        'sacred-gold': '#d4af37',
        'temple-gold': '#c9a227',
        'lotus-pink': '#e75480',
        'peacock-blue': '#005f73',
        'deep-maroon': '#800020',
        'sacred-red': '#c41e3a',
        // Neon Accents
        'neon-gold': '#ffd700',
        'neon-cyan': '#00e5cc',
        accent: '#e94560',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'sacred-gradient': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(128, 0, 32, 0.15), rgba(0, 229, 204, 0.1))',
        'hero-gradient': 'linear-gradient(180deg, rgba(212, 175, 55, 0.08) 0%, rgba(20, 20, 31, 1) 50%, rgba(0, 229, 204, 0.05) 100%)',
      },
      boxShadow: {
        'sacred': '0 0 30px rgba(212, 175, 55, 0.2)',
        'neon': '0 0 20px rgba(0, 229, 204, 0.3)',
      },
    },
  },
  plugins: [],
}
