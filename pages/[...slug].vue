<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

// Page not found, set correct status code on SSR
if (import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    event.node.res.statusCode = 404
  }
}

defineOgImageComponent('AppPage', {
  title: 'Page not found',
})
useSeoMeta({
  title: 'Page not found',
})
</script>

<template>
  <div>
    This page does not exist.
  </div>
</template>
