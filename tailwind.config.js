/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EDED',
          100: '#CEDCDC',
          200: '#9DB9B9',
          300: '#6C9695',
          400: '#3B7472',
          500: '#2D5F5D', // main primary
          600: '#244C4A',
          700: '#1B3938',
          800: '#122625',
          900: '#091313',
        },
        accent: {
          50: '#FCF1EE',
          100: '#F9E3DD',
          200: '#F4C7BA',
          300: '#EEAB98',
          400: '#E98F75',
          500: '#E07A5F', // main accent
          600: '#B3624C',
          700: '#864939',
          800: '#5A3126',
          900: '#2D1813',
        },
        background: '#F2F0EB',
        foreground: '#22181C',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};