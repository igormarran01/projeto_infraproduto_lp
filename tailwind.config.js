/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37', // Gold Premium
        'primary-dark': '#B5952F', // Darker Gold for hover
        'primary-light': '#F3DCA7', // Light Gold for subtle accents
        background: '#0a0a0a', // Deep Black 
        surface: '#171717', // Very Dark Gray for cards
        'surface-lighter': '#262626', // Slightly lighter for borders/dividers
        'text-primary': '#FFFFFF', // White text
        'text-secondary': '#A3A3A3', // Neutral gray text
        border: '#262626', // Matching surface-lighter for subtle borders
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Added serif for premium headings
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        'section': '112px', // Increased section spacing for better breathing room
        'gutter': '32px',
      },
      borderRadius: {
        card: '16px', // Slightly rounder cards
        button: '8px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 10px 30px -5px rgba(0,0,0,0.5)', // Deeper shadow for dark mode
        'button-glow': '0 0 20px rgba(212, 175, 55, 0.4)', // Gold glow
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      }
    },
  },
  plugins: [],
}
