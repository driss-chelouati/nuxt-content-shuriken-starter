<script setup lang="ts">
useHead({
  htmlAttrs: {
    dir: 'ltr',
    lang: 'fr-FR',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
})

useSeoMeta({
  titleTemplate: (name?: string) => name ? `${name} | Nuxt App` : 'Nuxt App',
  ogSiteName: 'Nuxt App',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="rgb(var(--color-primary-500))" />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
