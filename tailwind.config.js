/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {},
      spacing: {
        '100vh': '100vh',
        '100vw': '100vw',
        0.5: '0.125rem',
        2.5: '0.625rem',
      },
    },
  },
  variants: {
    // backgroundColor: ['group-hover', 'group-focus'],
    // cursor: ['hover'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [],
    },
  },
  /*  Opt-in to breaking changes
      Details: https://tailwindcss.com/docs/upcoming-changes
  */
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
