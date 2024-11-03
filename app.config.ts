export default defineAppConfig({
  /**
   * Site configuration
   */
  app: {
    links: {
      register: '/',
      login: '/',
      pricing: '/',
      social: {
        youtube: '/',
        facebook: '/',
        linkedin: '/',
        twitterx: '/',
      },
    },
  },

  icon: {
    mode: 'svg',
  },

  /**
   * Shuriken UI layer configuration
   */
  nui: {},
})
