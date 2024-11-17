<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
// @ts-ignore
import type { DatePickerDate, DatePickerRangeObject } from 'v-calendar/dist/types/src/use/datePicker'
import 'v-calendar/dist/style.css'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  modelValue: {
    type: [Date, Object] as PropType<DatePickerDate | DatePickerRangeObject | null>,
    default: null,
  },
  locale: {
    type: String,
    default: 'en',
  },
})

const emit = defineEmits(['update:model-value', 'close'])

const date = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:model-value', value)
    emit('close')
  },
})

const attrs = {
  'transparent': true,
  'borderless': true,
  'color': 'primary',
  'is-dark': { selector: 'html', darkClass: 'dark' },
  'first-day-of-week': 2,
}

function onDayClick(_: any, event: MouseEvent): void {
  const target = event.target as HTMLElement
  target.blur()
}
</script>

<template>
  <VCalendarDatePicker
    v-if="date && (date as DatePickerRangeObject)?.start && (date as DatePickerRangeObject)?.end"
    v-model.range="date"
    :columns="2"
    v-bind="{ ...attrs, ...$attrs }"
    :locale="props.locale"
    @dayclick="onDayClick"
  />
  <VCalendarDatePicker
    v-else
    v-model="date"
    v-bind="{ ...attrs, ...$attrs }"
    :locale="props.locale"
    @dayclick="onDayClick"
  />
</template>

<style>
:root {
  /* Indigo from tailwind as r g b */
  --color-primary-50: 238 242 255; /* #eef2ff */
  --color-primary-100: 224 231 255; /* #e0e7ff */
  --color-primary-200: 199 210 254; /* #c7d2fe */
  --color-primary-300: 165 180 252; /* #a5b4fc */
  --color-primary-400: 129 140 248; /* #818cf8 */
  --color-primary-500: 99 102 241; /* #6366f1 */
  --color-primary-600: 79 70 229; /* #4f46e5 */
  --color-primary-700: 67 56 202; /* #4338ca */
  --color-primary-800: 55 48 163; /* #3730a3 */
  --color-primary-900: 49 46 129; /* #312e81 */
  --color-primary-950: 30 27 75; /* #1e1b4b */

  --vc-gray-50: rgb(var(--color-muted-50));
  --vc-gray-100: rgb(var(--color-muted-100));
  --vc-gray-200: rgb(var(--color-muted-200));
  --vc-gray-300: rgb(var(--color-muted-300));
  --vc-gray-400: rgb(var(--color-muted-400));
  --vc-gray-500: rgb(var(--color-muted-500));
  --vc-gray-600: rgb(var(--color-muted-600));
  --vc-gray-700: rgb(var(--color-muted-700));
  --vc-gray-800: rgb(var(--color-muted-800));
  --vc-gray-900: rgb(var(--color-muted-900));
}

.vc-primary {
  --vc-accent-50: rgb(var(--color-primary-50));
  --vc-accent-100: rgb(var(--color-primary-100));
  --vc-accent-200: rgb(var(--color-primary-200));
  --vc-accent-300: rgb(var(--color-primary-300));
  --vc-accent-400: rgb(var(--color-primary-400));
  --vc-accent-500: rgb(var(--color-primary-500));
  --vc-accent-600: rgb(var(--color-primary-600));
  --vc-accent-700: rgb(var(--color-primary-700));
  --vc-accent-800: rgb(var(--color-primary-800));
  --vc-accent-900: rgb(var(--color-primary-900));
}
</style>
