<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'bg-base-100/95 backdrop-blur-lg border-b border-base-300/60 shadow-lg shadow-black/10'
        : 'bg-base-100/80 backdrop-blur-md border-b border-base-300/30'
    "
  >
    <div class="section-container">
      <div class="flex items-center justify-between h-[68px] lg:h-[76px]">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 shrink-0 group">
          <img
            src="~/assets/images/logo.png"
            alt="Big Bitcoin Business"
            class="h-9 lg:h-10 w-auto transition-transform duration-200 group-hover:scale-105"
          />
          <div class="hidden sm:block leading-tight">
            <div
              class="text-[11px] lg:text-xs font-bold tracking-[0.3em] uppercase text-base-content/90"
            >
              Big Bitcoin
            </div>
            <div
              class="text-[11px] lg:text-xs font-bold tracking-[0.3em] uppercase text-primary -mt-0.5"
            >
              Business
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-0.5">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="relative px-4 py-2 text-sm font-medium text-base-content/60 hover:text-base-content transition-colors duration-200 rounded-lg hover:bg-base-300/40 group"
            active-class="!text-primary"
          >
            {{ item.label }}
            <span
              class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100"
            />
          </NuxtLink>
        </nav>

        <!-- Right Side -->
        <div class="flex items-center gap-1.5">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="w-9 h-9 flex items-center justify-center rounded-xl text-base-content/50 hover:text-primary hover:bg-base-300/50 transition-all duration-200"
            :aria-label="isDark ? 'Helles Theme' : 'Dunkles Theme'"
          >
            <Icon v-if="isDark" name="lucide:sun" class="w-[18px] h-[18px]" />
            <Icon v-else name="lucide:moon" class="w-[18px] h-[18px]" />
          </button>

          <!-- CTA -->
          <NuxtLink
            to="/episoden"
            class="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-content text-xs font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
          >
            Alle Episoden
          </NuxtLink>

          <!-- Mobile Hamburger -->
          <button
            class="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-base-content/60 hover:text-base-content hover:bg-base-300/50 transition-all duration-200"
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-label="Menü"
          >
            <Icon
              :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
              class="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden border-t border-base-300/50 bg-base-100"
      >
        <nav class="section-container py-5 flex flex-col gap-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="flex items-center px-4 py-3 text-sm font-medium text-base-content/70 hover:text-primary hover:bg-base-300/40 rounded-xl transition-all duration-150"
            active-class="text-primary bg-primary/5"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>

          <div class="my-3 h-px bg-base-300/60" />

          <a
            href="mailto:podcast@bigbitcoinbusiness.de?subject=Sponsoring%20Anfragen"
            class="flex items-center justify-center px-4 py-3 rounded-xl bg-primary text-primary-content text-sm font-semibold hover:bg-primary/90 transition-colors"
            @click="mobileMenuOpen = false"
          >
            Sponsoring anfragen
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { navItems } from "~/data/navigation";

const { isDark, toggleTheme } = useTheme();
const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const route = useRoute();
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
  }
);

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onUnmounted(() => window.removeEventListener("scroll", onScroll));
});
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
