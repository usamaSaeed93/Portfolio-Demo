/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: {
          DEFAULT: '#ffffff', // Default white color
          '5': 'rgba(255, 255, 255, 0.05)', // White with 5% opacity
          '30': 'rgba(255, 255, 255, 0.3)', // White with 30% opacity
        },
        black:"#000"
      },
    },
    fontFamily:{
      body:[ 'Inter', 'sans-serif']
    },colors:{
    
    darkPrimaryGradient:"#131313",
    darkSecondaryGradient:"#202020",
    darkBackground:"0f0f0f",
    lightPrimaryGradient:"#0d3046",
    lightSecondaryGradient:"#10172a",
    lightGradient:"#131b30"
    }
  },
  plugins: [],
}
