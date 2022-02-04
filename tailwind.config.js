module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
