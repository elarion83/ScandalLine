/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0) translateX(-50%)' },
          '50%': { transform: 'translateY(-4px) translateX(-50%)' }
        },
        'gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'shine': {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
};
