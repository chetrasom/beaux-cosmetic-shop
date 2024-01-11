/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Cabinet Grotesk',
      secondary: 'Satoshi',
      accent: 'Mr De Haviland',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        primary: '#ffaf9b',
        secondary: '#feebe7',
        accent: {
          DEFAULT: '#333333',
          primary: '#444444',
        },
        light: '#7E7E7E',
      },
      boxShadow: {
        'light': '0 4px 9px rgba(0,0,0,.05)',
      },
    },
  },
  plugins: [],
}

