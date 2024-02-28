/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      'xs': ['12px', '16px'],
      'sm': ['14px', '20px'],
      'base': ['16px', '24px'],
      'lg': ['18px', '28px'],
      'xl': ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['28px', '38px'],
      '4xl': ['32px', '43px'],
      '5xl': ['38px', '38px'],
      '6xl': ['56px', '74px'],
    }
  },
  plugins: [],
}

