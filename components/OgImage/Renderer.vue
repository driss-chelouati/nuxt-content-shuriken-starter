<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  category?: string
  screen?: string
}>(), {
  title: 'title',
  category: '',
  screen: '',
})
</script>

<template>
  <div class="h-full w-full flex items-start justify-start" :style="{ backgroundImage: 'linear-gradient(to bottom, #FFF1D0, #faf2de, #FFFFFF)' }">
    <div v-if="screen" class="flex flex-row items-start justify-start h-full p-8">
      <div class="w-[400px] pt-14 pe-16">
        <span v-if="category" class="text-[30px] text-[#004dfc] mb-2">
          {{ category }}
        </span>
        <div class="text-[40px] font-semibold">
          {{ title }}
        </div>
      </div>
    </div>
    <div v-else class="flex items-start justify-start h-full">
      <div class="flex flex-col w-full h-full">
        <span v-if="category" class="px-20 leading-none text-[40px] text-[#004dfc]">
          {{ category }}
        </span>
        <h1 class="text-[60px] pl-20 pr-50 leading-none font-black text-left">
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>
