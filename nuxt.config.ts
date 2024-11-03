export default defineNuxtConfig({
  compatibilityDate: '2024-09-18',
  extends: ['@shuriken-ui/nuxt'],
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    'nuxt-security',
    'nuxt-og-image',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxt/eslint',
  ],
  css: [
    '~/assets/css/root.css',
    '~/assets/css/gridlines.css',
  ],
  fontMetrics: {
    fonts: ['Alike', 'Inter'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Alike: [400, 500, 600, 700],
      Inter: [400, 500, 600, 700],
    },
  },

  runtimeConfig: {
    brevo: {
      apiKey: '',
      listId: '',
    },
  },

  site: {
    url: '',
    indexable: true,
  },
  app: {
    cdnURL: '',
  },
  ogImage: {
    zeroRuntime: true,
  },

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  security: {
    rateLimiter: false,
    headers: {
      contentSecurityPolicy: false,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
      // ignore: [
      //   '/blog',
      //   '/tarifs',
      // ],
    },
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  vite: {
    build: {
      target: 'esnext',
    },
    optimizeDeps: {
      include: [
        '@iconify/vue',
      ],
    },
  },
  content: {
    // documentDriven: true,
    markdown: {
      anchorLinks: true,
      toc: { depth: 4, searchDepth: 4 },
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
    experimental: {
      search: {
        indexed: true,
        options: {
          fields: ['title', 'content', 'titles'],
          storeFields: ['title', 'content', 'titles'],
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: {
              title: 4,
              content: 2,
              titles: 1,
            },
          },
        },
      },
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  experimental: {
    viewTransition: true,
    writeEarlyHints: true,
    defaults: {
      useAsyncData: {
        deep: false,
      },
    },
  },
  devtools: { enabled: true },

  $production: {
    routeRules: {
      '/': {
        cache: {
          maxAge: 60,
          swr: true,
        },
      },
      '/tarifs': {
        cache: {
          maxAge: 60,
          swr: true,
        },
      },
      '/blog/**': {
        cache: {
          maxAge: 60,
          swr: true,
        },
      },
      '/guide/**': {
        cache: {
          maxAge: 60,
          swr: true,
        },
      },
      '/legal/**': {
        cache: {
          maxAge: 60,
          swr: true,
        },
      },
    },
  },
})
