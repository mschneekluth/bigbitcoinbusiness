<template>
  <div>
    <!-- Page Hero -->
    <section class="relative py-20 lg:py-24 bg-base-200 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-b from-base-100 to-base-200"
      />
      <div class="section-container relative z-10 space-y-4">
        <p class="text-primary font-heading text-sm tracking-brand-wide">
          Alle Folgen
        </p>
        <h1
          class="font-heading text-4xl md:text-5xl lg:text-6xl tracking-brand text-base-content"
        >
          Episoden
        </h1>
        <div class="h-0.5 w-20 bg-gradient-to-r from-primary to-transparent" />
        <div
          class="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <p class="text-base-content/60 font-body text-base max-w-lg">
            Alle Folgen von Big Bitcoin Business – jetzt auf YouTube und
            Spotify.
          </p>
          <div class="flex items-center gap-2 shrink-0">
            <a
              href="https://www.youtube.com/channel/UCQXc-gUDxa6JwH1_Q4UPiVA"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sm btn-ghost gap-2 text-red-500 hover:bg-red-500/10"
            >
              <Icon name="simple-icons:youtube" class="w-4 h-4" />
              YouTube
            </a>
            <a
              href="https://open.spotify.com/show/4lzuRd3U1O9PocBzTOEIu1"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sm btn-ghost gap-2 text-green-500 hover:bg-green-500/10"
            >
              <Icon name="simple-icons:spotify" class="w-4 h-4" />
              Spotify
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Tag Filter -->
    <section
      class="bg-base-100 border-b border-base-300 sticky top-16 lg:top-20 z-40"
    >
      <div class="section-container py-3">
        <div class="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <button
            @click="activeTag = null"
            :class="[
              'btn btn-xs font-heading tracking-wide shrink-0',
              activeTag === null
                ? 'btn-primary'
                : 'btn-ghost border border-base-300',
            ]"
          >
            Alle
          </button>
          <button
            v-for="tag in allTags"
            :key="tag"
            @click="activeTag = activeTag === tag ? null : tag"
            :class="[
              'btn btn-xs font-body shrink-0',
              activeTag === tag
                ? 'btn-primary'
                : 'btn-ghost border border-base-300',
            ]"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </section>

    <!-- Episode Grid -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <div class="mb-6 text-sm text-base-content/40 font-body">
          {{ filteredEpisodes.length }} Episode{{
            filteredEpisodes.length !== 1 ? "n" : ""
          }}
          <span v-if="activeTag"> mit Tag "{{ activeTag }}"</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EpisodesEpisodeCard
            v-for="episode in filteredEpisodes"
            :key="episode.id"
            :episode="episode"
          />
        </div>
        <div v-if="filteredEpisodes.length === 0" class="text-center py-20">
          <Icon
            name="lucide:search-x"
            class="w-12 h-12 text-base-content/20 mx-auto mb-4"
          />
          <p class="text-base-content/40 font-body">
            Keine Episoden für diesen Filter gefunden.
          </p>
          <button
            @click="activeTag = null"
            class="btn btn-ghost btn-sm mt-4 font-body"
          >
            Filter zurücksetzen
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { PodcastEpisode } from "~/composables/usePodcastFeed";

useHead({
  title: "Episoden – Big Bitcoin Business",
  meta: [
    {
      name: "description",
      content:
        "Alle Episoden des Big Bitcoin Business Podcasts – auf YouTube und Spotify.",
    },
  ],
});

const { data, pending } = await usePodcastFeed();
const episodes = computed(() => data.value?.episodes ?? []);

const activeTag = ref<string | null>(null);

const allTags = computed<string[]>(() => []);

const filteredEpisodes = computed(() => episodes.value);
</script>
