/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },   // Start and end at original position
          '50%': { transform: 'translateY(-10px)' },    // Move up at 50% of the animation
        },
        imgup: {
          '0%': { transform: 'translateY(0)' },    // At the start, the element is at its original position
          '100%': { transform: 'translateY(-10px)' }, // At the end, the element moves up by 10px
        },
      },
      animation: {
        upDown: 'upDown 2s ease-in-out infinite',        // Define the animation duration and infinite loop
        imgup: 'imgup 0.7s linear infinite alternate', 
      },
    },
  },
  plugins: [],
}

