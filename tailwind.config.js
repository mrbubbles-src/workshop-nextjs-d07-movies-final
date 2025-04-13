/ ** @type {import('tailwindcss').Config} */;
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#0D0D0D',
          card: '#1A1A1A',
          primary: '#E50914',
          secondary: '#00C6A2',
          textPrimary: '#FFFFFF',
          textSecondary: '#BBBBBB',
          highlight: '#FFD700',
          error: '#FF4C4C',
          success: '#1DD75B',
        },
      },
    },
  },
  plugins: [],
};
