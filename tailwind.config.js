/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
    colors:{
      'box1':'#E0533D',
      'white':'#FFFFFF'
    }
  },
  plugins: [],
};
