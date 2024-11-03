<script setup lang="ts">
const email = ref('')
const error = ref('')
const loading = ref(false)
const subscribed = ref(false)

async function onSubmit() {
  if (!email.value || loading.value || subscribed.value) {
    return
  }

  loading.value = true
  error.value = ''

  try {
    await $fetch('/api/subscribe', {
      method: 'POST',
      body: {
        email: email.value,
      },
    })

    email.value = ''
    subscribed.value = true

    // reset the form after 15 seconds
    await new Promise(resolve => setTimeout(resolve, 15_000))
    subscribed.value = false
  }
  catch (_error: any) {
    error.value = _error?.response?._data?.message || 'An error has occured.'
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="mt-6">
    <Transition
      mode="out-in"
      enter-active-class="transition duration-300 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="subscribed">
        <BaseMessage size="sm" color="success" :classes="{ text: 'flex gap-4 px-3 py-2' }">
          <BaseCheckboxAnimated :model-value="true" color="success" />
          <span>A confirmation email has been sent to you.</span>
        </BaseMessage>
      </div>
      <div v-else>
        <form action="#" method="POST" @submit.prevent="onSubmit">
          <div class="flex mb-3">
            <div class="flex flex-col md:flex-row gap-3 w-full">
              <BaseInput
                v-model.trim="email"
                size="lg"
                rounded="md"
                placeholder="Email Address"
                :error
                :disabled="loading"
                :classes="{
                  wrapper: 'grow',
                }"
              />
              <BaseButton :loading type="submit" color="dark" size="lg" rounded="md">
                Sign Up
              </BaseButton>
            </div>
          </div>
          <!-- <div>
            <BaseCheckbox
              v-model="optin"
              rounded="md"
              label="J'accepte de recevoir la Newsletter Laast.io"
            />
          </div> -->
        </form>
      </div>
    </Transition>
  </div>
</template>
