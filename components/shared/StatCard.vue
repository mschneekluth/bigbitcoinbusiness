<template>
  <div class="text-center p-6 lg:p-8 bg-base-200 border border-base-300 hover:border-primary/30 rounded-xl card-hover">
    <div class="font-heading text-4xl lg:text-5xl text-primary tracking-brand mb-2">
      {{ value }}
    </div>
    <div class="text-sm text-base-content/60 font-body">{{ label }}</div>
    <div v-if="sublabel" class="text-xs text-base-content/40 font-body mt-1">{{ sublabel }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  label: string
  sublabel?: string
}>()
</script>
