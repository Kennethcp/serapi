/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'deepblue' : '#224295',
      'white' : '#FFFFFF',
      'black' : '#111111',
      'gray-tc' : '#7D7D7D',
      'red' : '#B01212',
      'light-gray' : '#878787',
      'bone-white' : '#F5F5FF',
      'gray' : '#D9D9D9',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
