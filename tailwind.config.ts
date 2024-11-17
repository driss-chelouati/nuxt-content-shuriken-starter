import { withShurikenUI } from '@shuriken-ui/tailwind'
import colors from 'tailwindcss/colors'

/**
 * Shuriken UI tailwind configuration
 */
export default withShurikenUI({
  content: [],
  theme: {
    extend: {
      /**
       * Customize fonts
       *
       * You must load them yourself
       * (ex: with unplugin-fonts)
       */
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Alike', 'serif'],
      },
      /**
       * Customize colors
       *
       * Use tailwind predefined colors,
       * or generate your own with tools like https://tailwindshades.com
       */
      colors: {
        // Define only the ones you want to override
        primary: colors.indigo,
        muted: colors.slate,
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
      },

      /**
       * Customize Shuriken UI components
       *
       * @see https://github.com/shuriken-ui/tailwind
       */
      nui: {
        // ...
      },
    },
  },
})
