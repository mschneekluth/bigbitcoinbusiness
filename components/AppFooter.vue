<template>
  <footer class="bg-base-200 border-t border-base-300/60 mt-auto">
    <div class="section-container py-14 lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

        <!-- Brand -->
        <div class="space-y-5">
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <img src="~/assets/images/logo.png" alt="Big Bitcoin Business" class="h-9 w-auto" />
            <div class="leading-tight">
              <div class="text-[11px] font-bold tracking-[0.28em] uppercase text-base-content/80">Big Bitcoin</div>
              <div class="text-[11px] font-bold tracking-[0.28em] uppercase text-primary -mt-0.5">Business</div>
            </div>
          </NuxtLink>
          <p class="text-sm text-base-content/50 leading-relaxed max-w-xs">
            Realtalk über den Krypto-Sektor. Fundiert, meinungsstark, unterhaltsam.
          </p>
          <div class="flex items-center gap-1">
            <a href="https://www.youtube.com/channel/UCQXc-gUDxa6JwH1_Q4UPiVA" target="_blank" rel="noopener noreferrer"
              class="w-8 h-8 flex items-center justify-center rounded-lg text-base-content/30 hover:text-red-500 hover:bg-red-500/10 transition-all"
              aria-label="YouTube">
              <Icon name="simple-icons:youtube" class="w-4 h-4" />
            </a>
            <a href="https://open.spotify.com/show/4lzuRd3U1O9PocBzTOEIu1" target="_blank" rel="noopener noreferrer"
              class="w-8 h-8 flex items-center justify-center rounded-lg text-base-content/30 hover:text-green-500 hover:bg-green-500/10 transition-all"
              aria-label="Spotify">
              <Icon name="simple-icons:spotify" class="w-4 h-4" />
            </a>
            <a href="https://letscast.fm/podcasts/big-bitcoin-business-b411321a/feed" target="_blank" rel="noopener noreferrer"
              class="w-8 h-8 flex items-center justify-center rounded-lg text-base-content/30 hover:text-orange-500 hover:bg-orange-500/10 transition-all"
              aria-label="RSS Feed">
              <Icon name="lucide:rss" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-base-content/30 mb-5">Navigation</p>
          <ul class="space-y-2.5">
            <li v-for="item in navItems" :key="item.to">
              <NuxtLink :to="item.to" class="text-sm text-base-content/55 hover:text-primary transition-colors">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kontakt -->
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-base-content/30 mb-5">Kontakt</p>
          <ul class="space-y-3">
            <li>
              <a href="mailto:podcast@bigbitcoinbusiness.de?subject=Sponsoring%20Anfragen" class="text-sm text-base-content/55 hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="lucide:handshake" class="w-3.5 h-3.5 text-primary/60 shrink-0" />
                Sponsoring anfragen
              </a>
            </li>
            <li>
              <NuxtLink to="/fuer-gaeste" class="text-sm text-base-content/55 hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="lucide:mic" class="w-3.5 h-3.5 text-primary/60 shrink-0" />
                Als Gast bewerben
              </NuxtLink>
            </li>
            <li>
              <a href="mailto:podcast@bigbitcoinbusiness.de" class="text-sm text-base-content/55 hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="lucide:mail" class="w-3.5 h-3.5 text-primary/60 shrink-0" />
                podcast@bigbitcoinbusiness.de
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-base-300/40">
      <div class="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-base-content/30">
          © {{ new Date().getFullYear() }} Big Bitcoin Business. Alle Rechte vorbehalten.
        </p>
        <div class="flex items-center gap-5">
          <NuxtLink to="/impressum" class="text-xs text-base-content/30 hover:text-primary transition-colors">Impressum</NuxtLink>
          <NuxtLink to="/datenschutz" class="text-xs text-base-content/30 hover:text-primary transition-colors">Datenschutz</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { navItems } from '~/data/navigation'
</script>
