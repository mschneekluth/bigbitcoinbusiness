<template>
  <div :class="['mb-12 lg:mb-16', align === 'center' ? 'text-center' : 'text-left']">
    <p v-if="eyebrow" class="eyebrow mb-3">{{ eyebrow }}</p>
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-base-content">
      {{ title }}
    </h2>
    <div :class="['h-px mt-5 bg-gradient-to-r from-primary to-transparent', align === 'center' ? 'w-14 mx-auto' : 'w-14']" />
    <p v-if="subtitle" class="mt-5 text-base-content/55 text-base lg:text-lg leading-relaxed max-w-xl" :class="{ 'mx-auto': align === 'center' }">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true as const },
  subtitle: String,
  eyebrow: String,
  align: { type: String as () => 'left' | 'center', default: 'left' },
})
</script>
