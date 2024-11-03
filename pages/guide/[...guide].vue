<script lang="ts" setup>
definePageMeta({
  layout: 'guide',
})

const route = useRoute()
const { data: article } = await useAsyncData(`content:${route.path}`, () => queryContent(route.path).findOne(), { watch: [() => route.path] })

// Page not found, set correct status code on SSR
if (!(article as any).value && import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    event.node.res.statusCode = 404
  }
}

defineOgImageComponent('AppPage', {
  title: () => article.value?.seoImage?.title || '',
  screen: () => article.value?.seoImage?.screen || '',
  category: 'guide',
})
useSeoMeta({
  title: () => [article.value?.title, (article.value as any)?._dir?.name].filter(Boolean).join(' | '),
  description: () => article.value?.description,
})
</script>

<template>
  <div>
  </div>
</template>
