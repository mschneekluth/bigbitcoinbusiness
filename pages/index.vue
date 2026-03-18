<template>
  <div>
    <!-- ─── HERO ───────────────────────────────────────────── -->
    <section
      class="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-base-100 via-base-100 to-base-200"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none"
      />

      <div class="section-container relative z-10 py-32 text-center">
        <img
          src="~/assets/images/logo.png"
          alt="Big Bitcoin Business"
          class="h-44 md:h-56 lg:h-64 w-auto mx-auto drop-shadow-2xl mb-10"
        />

        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-base-content leading-none"
        >
          Big Bitcoin
        </h1>
        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-primary leading-none mt-1 mb-7"
        >
          Business
        </h1>

        <p
          class="text-base-content/50 text-lg md:text-xl font-light italic mb-12 tracking-wide"
        >
          Realtalk über den Krypto-Sektor
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.youtube.com/channel/UCQXc-gUDxa6JwH1_Q4UPiVA"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary text-primary-content font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            <Icon name="simple-icons:youtube" class="w-4 h-4" />
            Auf YouTube ansehen
          </a>
          <a
            href="https://open.spotify.com/show/4lzuRd3U1O9PocBzTOEIu1"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-base-content/15 text-base-content/70 font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
          >
            <Icon name="simple-icons:spotify" class="w-4 h-4" />
            Auf Spotify hören
          </a>
        </div>

        <div class="mt-16 animate-bounce">
          <Icon
            name="lucide:chevron-down"
            class="w-5 h-5 text-base-content/20 mx-auto"
          />
        </div>
      </div>
    </section>

    <!-- ─── ELEVATOR PITCH ─────────────────────────────────── -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <div class="max-w-2xl mx-auto text-center">
          <p class="eyebrow mb-4">Was uns ausmacht</p>
          <h2
            class="text-4xl md:text-5xl font-extrabold tracking-tight text-base-content mb-6"
          >
            Kein Hype.<br />Nur Substanz.
          </h2>
          <div
            class="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
          />
          <p class="text-base-content/60 text-lg leading-relaxed">
            Big Bitcoin Business ist der Podcast für alle, die den Krypto-Sektor
            wirklich verstehen wollen – jenseits von Hype-Zyklen und
            Social-Media-Buzz. Drei erfahrene Hosts, fundierte Analysen,
            ehrliche Meinungen und Gespräche mit den Menschen, die die Branche
            gestalten.
          </p>

          <div
            class="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-base-300/60"
          >
            <div
              v-for="stat in quickStats"
              :key="stat.label"
              class="text-center"
            >
              <div class="text-3xl font-extrabold text-primary tabular-nums">
                {{ stat.value }}
              </div>
              <div class="text-xs text-base-content/40 font-medium mt-1">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── HOSTS TEASER ───────────────────────────────────── -->
    <section class="section-py bg-base-200">
      <div class="section-container">
        <div
          class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p class="eyebrow mb-3">Die Köpfe dahinter</p>
            <h2
              class="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content"
            >
              Die Hosts
            </h2>
          </div>
          <NuxtLink
            to="/hosts"
            class="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1.5 shrink-0 transition-colors"
          >
            Alle Hosts <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <NuxtLink
            v-for="host in hosts"
            :key="host.id"
            to="/hosts"
            class="group bg-base-100 rounded-2xl border border-base-300/60 hover:border-primary/30 p-7 text-center card-hover block"
          >
            <div
              class="w-20 h-20 mx-auto mb-5 rounded-full group-hover:border-primary/30 overflow-hidden transition-colors"
            >
              <NuxtImg
                :src="host.image"
                :alt="host.name"
                class="w-full h-full object-cover"
                width="200"
                height="200"
                format="webp"
                quality="80"
              />
            </div>
            <h3
              class="font-bold text-base text-base-content group-hover:text-primary transition-colors"
            >
              {{ host.name }}
            </h3>
            <p class="text-xs text-base-content/40 mt-1.5 leading-relaxed">
              {{ host.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── THEMEN ─────────────────────────────────────────── -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <div class="mb-14">
          <p class="eyebrow mb-3">Was wir besprechen</p>
          <h2
            class="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content"
          >
            Themen
          </h2>
          <p class="text-base-content/50 mt-3 text-base max-w-lg">
            Von Bitcoin-Marktanalyse bis Blockchain-Unternehmertum.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="topic in topics"
            :key="topic.title"
            class="bg-base-200 rounded-2xl border border-base-300/60 p-6 hover:border-primary/30 card-hover"
          >
            <div
              class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4"
            >
              <Icon :name="topic.icon" class="w-5 h-5 text-primary" />
            </div>
            <h3 class="font-bold text-sm text-base-content mb-2">
              {{ topic.title }}
            </h3>
            <p class="text-xs text-base-content/50 leading-relaxed">
              {{ topic.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── NEUESTE EPISODEN ───────────────────────────────── -->
    <section class="section-py bg-base-200">
      <div class="section-container">
        <div
          class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p class="eyebrow mb-3">Frisch erschienen</p>
            <h2
              class="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content"
            >
              Neueste Episoden
            </h2>
          </div>
          <NuxtLink
            to="/episoden"
            class="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1.5 shrink-0 transition-colors"
          >
            Alle Episoden <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <EpisodesEpisodeCard
            v-for="episode in latestEpisodes"
            :key="episode.id"
            :episode="episode"
          />
        </div>
      </div>
    </section>

    <!-- ─── SPONSOR CTA ────────────────────────────────────── -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <div
          class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-base-200 to-base-300 border border-base-300/60 px-8 py-12 md:px-14 md:py-16"
        >
          <div
            class="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"
          />
          <div
            class="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <p class="eyebrow mb-4">Für Unternehmen</p>
              <h2
                class="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content mb-3"
              >
                Erreichen Sie die<br />Krypto-Entscheider
              </h2>
              <p class="text-base-content/50 text-sm max-w-md leading-relaxed">
                Positionieren Sie sich vor einer hochqualifizierten,
                kaufkräftigen Zielgruppe – Investoren, Gründer und Entscheider
                im deutschsprachigen Krypto-Raum.
              </p>
            </div>
            <a
              href="mailto:podcast@bigbitcoinbusiness.de?subject=Sponsoring%20Anfragen"
              class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-content font-semibold text-sm shrink-0 hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Jetzt anfragen
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { hosts } from "~/data/hosts";

useHead({
  title: "Big Bitcoin Business – Realtalk über den Krypto-Sektor",
  meta: [
    {
      name: "description",
      content:
        "Der deutschsprachige Krypto-Podcast mit Alexander Mayer, Marco Schneekluth und Robert Steinadler. Jetzt auf YouTube und Spotify.",
    },
  ],
});

const { data: podcastData } = await usePodcastFeed();
const latestEpisodes = computed(
  () => podcastData.value?.episodes.slice(0, 3) ?? []
);

const quickStats = [
  { value: "3", label: "Hosts" },
  { value: "5+", label: "Episoden" },
  { value: "DACH-Raum", label: "Community" },
];

const topics = [
  {
    icon: "lucide:bitcoin",
    title: "Bitcoin & Märkte",
    description: "On-Chain-Analysen und makroökonomische Einordnung.",
  },
  {
    icon: "lucide:landmark",
    title: "Regulierung",
    description: "MiCA, BaFin und was die Politik bedeutet.",
  },
  {
    icon: "lucide:building-2",
    title: "Unternehmertum",
    description: "Startups und Web3-Unternehmen aus der Branche.",
  },
  {
    icon: "lucide:cpu",
    title: "Technologie",
    description: "DeFi, Layer-2 und die Infrastruktur von morgen.",
  },
];
</script>
