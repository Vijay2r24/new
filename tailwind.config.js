/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#04668D',
        customBlu:'#DA67AC'
      },
      animation: {
        slide: 'slide 6s linear infinite', // Change 6s to adjust speed
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, // Adjust this to slide all images
        },
      },
    },
  },
  plugins: [],
}


