<script setup lang="ts">
definePageMeta({
  layout: 'content-with-toc',
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
  category: () => article.value?.seoImage?.category || '',
  screen: () => article.value?.seoImage?.screen,
})
useSeoMeta({
  title: () => [article.value?.title, (article.value as any)?._dir?.name].filter(Boolean).join(' | '),
  description: () => article.value?.description,
})
</script>

<template>
  <div>
    <ContentRenderer v-if="article" :key="(article as any)._id" :value="article">
      <template #empty>
        <p>This page has no content.</p>
      </template>
    </ContentRenderer>
    <DocumentDrivenNotFound v-else />
  </div>
</template>
