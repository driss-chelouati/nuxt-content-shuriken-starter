<script setup lang="ts">
definePageMeta({
  layout: 'blog-article',
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
  category: 'blog',
})
useSeoMeta({
  title: () => [article.value?.title, (article.value as any)?._dir?.name].filter(Boolean).join(' | '),
  description: () => article.value?.description,
  ogType: 'article',
  // ogImage: () => article.value?.ogImage,
  // ogImageAlt: () => article.value?.alt,
  articleTag: () => article.value?.tags,
  articlePublishedTime: () => article.value?.date,
})
</script>

<template>
  <article>
  </article>
</template>
