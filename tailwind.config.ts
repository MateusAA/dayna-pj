import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },

      fontFamily: {
        codec: ['"Codec Pro"', 'sans-serif'],
      },
    },



    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(-5px)' },
        '50%': { transform: 'translateX(5px)' },
        '75%': { transform: 'translateX(-5px)' },
      },
      
    },
    animation: {
      shake: 'shake 1s infinite',
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
export default config;
