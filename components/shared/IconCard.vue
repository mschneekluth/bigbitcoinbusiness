<template>
  <div class="bg-base-200 rounded-2xl border border-base-300/60 hover:border-primary/30 card-hover p-6 lg:p-7">
    <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
      <Icon :name="icon" class="w-5 h-5 text-primary" />
    </div>
    <h3 class="font-bold text-sm text-base-content mb-2">{{ title }}</h3>
    <p class="text-sm text-base-content/50 leading-relaxed">{{ description }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
