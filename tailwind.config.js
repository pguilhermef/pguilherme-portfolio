module.exports = {
  darkMode: 'className',
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        portfolio: {
          white: '#FAFAFA',
          gray: '#333333',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
      },
    },
  },
  variants: {},
  plugins: [],
}