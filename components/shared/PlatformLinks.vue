<template>
  <div :class="['flex items-center gap-3', { 'justify-center': center }]">
    <span v-if="label" class="text-sm text-base-content/50 font-body mr-1">{{ label }}</span>
    <a
      href="https://www.youtube.com/channel/UCQXc-gUDxa6JwH1_Q4UPiVA"
      target="_blank"
      rel="noopener noreferrer"
      :class="linkClass"
      aria-label="Auf YouTube anhören"
    >
      <Icon name="simple-icons:youtube" :class="iconClass" />
      <span v-if="showLabels" class="text-xs font-body">YouTube</span>
    </a>
    <a
      href="https://open.spotify.com/show/4lzuRd3U1O9PocBzTOEIu1"
      target="_blank"
      rel="noopener noreferrer"
      :class="linkClass"
      aria-label="Auf Spotify anhören"
    >
      <Icon name="simple-icons:spotify" :class="iconClass" />
      <span v-if="showLabels" class="text-xs font-body">Spotify</span>
    </a>
    <a
      href="https://letscast.fm/podcasts/big-bitcoin-business-b411321a/feed"
      target="_blank"
      rel="noopener noreferrer"
      :class="linkClass"
      aria-label="RSS Feed"
    >
      <Icon name="lucide:rss" :class="iconClass" />
      <span v-if="showLabels" class="text-xs font-body">RSS</span>
    </a>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
  center?: boolean
  showLabels?: boolean
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'md',
})

const linkClass = computed(() => [
  'flex items-center gap-1.5 transition-all duration-200',
  props.size === 'sm' && 'text-base-content/50 hover:text-primary',
  props.size === 'md' && 'btn btn-ghost btn-sm gap-1.5 text-base-content/60 hover:text-primary',
  props.size === 'lg' && 'btn btn-outline btn-primary btn-sm gap-2',
])

const iconClass = computed(() => [
  props.size === 'sm' ? 'w-4 h-4' : 'w-5 h-5',
])
</script>
