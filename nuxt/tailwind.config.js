module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '984px',
        '2xl': '984px',
      }
    }
  },
  plugins: []
}
