/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0b3d2e', light: '#166049' },
        accent: { DEFAULT: '#50c878', hover: '#45b768' },
        alert: { DEFAULT: '#e74c3c', bg: '#fdf3f2' },
        dark: '#1a201d',
        muted: '#5e6b66',
        bg: '#f7f9f8'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'floating': 'floating 6s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
