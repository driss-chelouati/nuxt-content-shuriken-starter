<script lang="ts" setup>
defineOgImageComponent('AppPage', {
  title: 'Retrouvez les dernières astuces',
  category: 'blog',
})
const { data } = await useAsyncData('blog-list', () => queryContent('/blog').where({ _draft: false, _partial: false }).sort({ _id: -1 }).find())

const elementPerPage = ref(5)
const pageNumber = ref(1)
const searchTest = ref('')

const formattedData = computed(() => {
  return (
    data.value?.map((articles) => {
      return {
        path: articles._path,
        title: articles.title || 'no-title available',
        description: articles.description || 'no-description available',
        image: articles.image || '/not-found.jpg',
        alt: articles.alt || 'no alter data available',
        ogImage: articles.ogImage || '/not-found.jpg',
        date: articles.date || 'not-date-available',
        tags: articles.tags || [],
        published: articles.published || false,
      }
    }) || []
  )
})

const searchData = computed(() => {
  return (
    formattedData.value.filter((data) => {
      const lowerTitle = data.title.toLocaleLowerCase()
      if (lowerTitle.search(searchTest.value) !== -1)
        return true
      else return false
    }) || []
  )
})

const paginatedData = computed(() => {
  return (
    searchData.value.filter((data, idx) => {
      const startInd = (pageNumber.value - 1) * elementPerPage.value
      const endInd = pageNumber.value * elementPerPage.value - 1

      if (idx >= startInd && idx <= endInd)
        return true
      else return false
    }) || []
  )
})

function onPreviousPageClick() {
  if (pageNumber.value > 1)
    pageNumber.value -= 1
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0
  const totalPage = Math.ceil(ttlContent / elementPerPage.value)
  return totalPage
})

function onNextPageClick() {
  if (pageNumber.value < totalPage.value)
    pageNumber.value += 1
}

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: 'Read our latest blog posts',
    },
  ],
})

// // Generate OG Image
// const siteData = useSiteConfig()
// defineOgImage({
//   props: {
//     title: 'Blog',
//     description: 'Read our latest blog posts',
//     siteName: siteData.url,
//   },
// })
</script>

<template>
  <div>
    
  </div>
</template>
