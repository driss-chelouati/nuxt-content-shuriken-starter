<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
defineOgImageComponent('Renderer', {
  title: `App title`,
  screen: '/img/favicon.svg',
})
useSeoMeta({
  title: 'App title',
  description: 'App description.',
})
</script>

<template>
  <div>
    Index
  </div>
</template>
