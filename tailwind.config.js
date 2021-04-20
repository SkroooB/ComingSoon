module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
              animation: {
        'spin-slow': 'spin 3s linear infinite',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
