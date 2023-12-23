/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dev_01':'#6986BD',
        'dev_02':'#B15153',
        'dev_03':'#9F936A',
        'dev_04':'#DFCED4',
        'dev_05':'#C9C8DA',
        'dev_06':'#3B3C40',
      }
    },
  },
  plugins: [],
}