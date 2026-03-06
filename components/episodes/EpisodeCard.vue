<template>
  <div class="card bg-base-200 border border-base-300 hover:border-primary/30 card-hover overflow-hidden">
    <!-- Thumbnail / Embed -->
    <div class="relative aspect-video bg-base-300 overflow-hidden cursor-pointer" @click="togglePlay">
      <!-- YouTube embed -->
      <iframe
        v-if="episode.youtubeId && showEmbed"
        :src="`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1`"
        class="absolute inset-0 w-full h-full"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <!-- Audio player -->
      <template v-else-if="episode.audioUrl && showEmbed">
        <img
          :src="coverImage"
          :alt="episode.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 p-4">
          <audio
            ref="audioEl"
            :src="episode.audioUrl"
            controls
            class="w-full max-w-xs"
            @click.stop
          />
          <span v-if="episode.duration" class="text-white/60 text-xs font-body">{{ episode.duration }}</span>
        </div>
      </template>
      <!-- Thumbnail preview -->
      <template v-else>
        <img
          :src="coverImage"
          :alt="episode.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <!-- Play Button Overlay -->
        <div class="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors">
          <div class="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
            <Icon name="lucide:play" class="w-6 h-6 text-primary-content ml-0.5" />
          </div>
        </div>
        <!-- Platform badge -->
        <div class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-body">
          <template v-if="episode.youtubeId">
            <Icon name="lucide:youtube" class="w-3 h-3 inline mr-1 text-red-500" />
            YouTube
          </template>
          <template v-else>
            <Icon name="lucide:mic" class="w-3 h-3 inline mr-1 text-primary" />
            Podcast
          </template>
        </div>
      </template>
    </div>

    <!-- Content -->
    <div class="p-5 lg:p-6 space-y-3">
      <!-- Tags -->
      <div v-if="episode.tags?.length" class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in episode.tags?.slice(0, 3)"
          :key="tag"
          class="badge badge-sm badge-outline border-primary/30 text-primary/70 font-body text-xs"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="font-heading text-base lg:text-lg tracking-brand text-base-content line-clamp-2">
        {{ episode.title }}
      </h3>

      <!-- Description -->
      <p class="text-sm text-base-content/60 font-body leading-relaxed line-clamp-3">
        {{ stripHtml(episode.description) }}
      </p>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-2 border-t border-base-300">
        <span class="text-xs text-base-content/40 font-body flex items-center gap-1.5">
          <Icon name="lucide:calendar" class="w-3.5 h-3.5" />
          {{ formatDate(episode.date) }}
          <span v-if="episode.duration" class="ml-1 text-base-content/30">· {{ episode.duration }}</span>
        </span>
        <div class="flex items-center gap-2">
          <button
            v-if="episode.youtubeId || episode.audioUrl"
            @click="togglePlay"
            class="btn btn-primary btn-xs font-heading tracking-brand gap-1.5"
          >
            <Icon :name="showEmbed ? 'lucide:x' : 'lucide:play'" class="w-3.5 h-3.5" />
            {{ showEmbed ? 'Schließen' : 'Anhören' }}
          </button>
          <a
            v-if="episode.link && !episode.youtubeId"
            :href="episode.link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost btn-xs"
            aria-label="Zur Episode"
          >
            <Icon name="lucide:external-link" class="w-4 h-4" />
          </a>
          <a
            v-if="episode.spotifyUrl"
            :href="episode.spotifyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost btn-xs text-green-500 hover:bg-green-500/10"
            aria-label="Auf Spotify"
          >
            <Icon name="simple-icons:spotify" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Episode } from '~/data/episodes'
import type { PodcastEpisode } from '~/composables/usePodcastFeed'

const props = defineProps<{
  episode: Episode | PodcastEpisode
}>()

const showEmbed = ref(false)
const audioEl = ref<HTMLAudioElement | null>(null)

const coverImage = computed(() => {
  if ('image' in props.episode && props.episode.image) return props.episode.image
  if ('thumbnail' in props.episode && props.episode.thumbnail) return props.episode.thumbnail
  if ('youtubeId' in props.episode && props.episode.youtubeId)
    return `https://img.youtube.com/vi/${props.episode.youtubeId}/maxresdefault.jpg`
  return '/podcast-cover.jpg'
})

function togglePlay() {
  showEmbed.value = !showEmbed.value
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim()
}

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
</script>
