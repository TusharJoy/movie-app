module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  purge:["./src/**/*.vue"],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
