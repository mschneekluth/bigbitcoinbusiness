<template>
  <div>
    <!-- Page Hero -->
    <section class="relative py-20 lg:py-28 bg-base-200 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-base-100 to-base-200" />
      <div class="section-container relative z-10 text-center space-y-4">
        <p class="text-primary font-heading text-sm tracking-brand-wide">Wer wir sind</p>
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl tracking-brand text-base-content">
          Die Hosts
        </h1>
        <div class="h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        <p class="text-base-content/60 font-body text-lg max-w-xl mx-auto">
          Drei Perspektiven, ein gemeinsamer Antrieb: den Krypto-Sektor verständlich machen.
        </p>
      </div>
    </section>

    <!-- Hosts -->
    <section class="section-py bg-base-100">
      <div class="section-container space-y-20 lg:space-y-28">
        <HostsHostCard
          v-for="(host, index) in hosts"
          :key="host.id"
          :host="host"
          :reversed="index % 2 === 1"
        />
      </div>
    </section>

    <!-- CTA -->
    <section class="section-py bg-base-200">
      <div class="section-container text-center space-y-6">
        <h2 class="font-heading text-2xl md:text-3xl tracking-brand text-base-content">
          Du möchtest mit uns sprechen?
        </h2>
        <p class="text-base-content/60 font-body max-w-lg mx-auto">
          Als Gast im Podcast oder für Sponsoring-Anfragen – wir freuen uns auf den Austausch.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/fuer-gaeste" class="btn btn-primary btn-lg font-heading tracking-brand text-sm gap-2">
            <Icon name="lucide:mic" class="w-5 h-5" />
            Als Gast bewerben
          </NuxtLink>
          <a href="mailto:podcast@bigbitcoinbusiness.de?subject=Sponsoring%20Anfragen" class="btn btn-outline btn-lg font-heading tracking-brand text-sm gap-2 border-primary/40 hover:btn-primary">
            <Icon name="lucide:handshake" class="w-5 h-5" />
            Sponsoring anfragen
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { hosts } from '~/data/hosts'

useHead({
  title: 'Die Hosts – Big Bitcoin Business',
  meta: [{ name: 'description', content: 'Lerne Alexander Mayer, Marco Schneekluth und Robert Steinadler kennen – die drei Hosts des Big Bitcoin Business Podcasts.' }],
})
</script>
