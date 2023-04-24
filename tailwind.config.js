/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'specialBg' : '#9BD4C3',
      'navText' : '#738B5F' ,
      'specialLine' : '#05BFDB',
      'specialBorder' : '#C49A6C'
    },
  },
    fontFamily: {
      signature: ['Minecraft'],
      signature2: ['VCR OSD Mono']
      },
    
  },
  plugins: [],
}

