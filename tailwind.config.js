module.exports = {
  mode:'jit',
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screen:{
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1440px',
    },
    colors:{
      transparent:'transparent',
      blue:{
        100: 'hsl(209, 23%, 22%)', //Dark Mode Elements
        200: 'hsl(207, 26%, 17%)', // Dark Mode Background),
        300: 'hsl(200, 15%, 8%)', //Light Mode Text
      },
      gray:{
        100: 'hsl(0, 0%, 98%)', // Light Mode Background
        200: 'hsl(0, 0%, 52%)' // Light Mode Input
      },
      white: 'hsl(0, 0%, 100%)', //Dark Mode Text & Light Mode Elements
      black: 'hsl(0, 0%, 0%)',
    },
    fontFamily:{
      'sans':['Nunito Sans','Noto Sans TC','sans-serif'],
      'serif':['Merriweather', 'serif']
    },
    fontSize:{
      'sm': ['12px',' 16px'],
      'base': ['14px',' 20px'],
      'md': ['20px',' 32px'],
      'lg': ['28px',' 40px'],
      'xl': ['32px',' 60px']
    },
    fontWeight:{
      normal:300,
      semibold:600,
      bold:800
    },
    container:{
        padding:{
          DEFAULT: '1rem',
          lg: '2rem'
        }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
