<template>
  <div
    :class="[
      'flex flex-col gap-8',
      reversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
    ]"
  >
    <!-- Image -->
    <div class="lg:w-2/5 xl:w-1/3">
      <div class="relative aspect-square max-w-xs mx-auto lg:mx-0">
        <div class="absolute inset-0 rounded-2xl" />
        <NuxtImg
          :src="host.image"
          :alt="host.name"
          width="400"
          height="400"
          format="webp"
          quality="80"
          class="w-full h-full object-cover rounded-2xl border border-primary/20"
          loading="lazy"
          @error="onImageError"
        />
        <!-- Placeholder if no image -->
        <div
          v-if="imageError"
          class="absolute inset-0 bg-base-300 rounded-2xl flex items-center justify-center"
        >
          <div class="text-center space-y-2">
            <div
              class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto"
            >
              <Icon name="lucide:user" class="w-10 h-10 text-primary/60" />
            </div>
            <p class="text-xs text-base-content/40 font-body">Foto folgt</p>
          </div>
        </div>
        <!-- Gold corner accent -->
        <div
          class="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg"
        >
          <Icon name="lucide:mic" class="w-4 h-4 text-primary-content" />
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="lg:w-3/5 xl:w-2/3 space-y-4">
      <div>
        <p class="text-primary font-heading text-xs tracking-brand-wide mb-1">
          Host
        </p>
        <h2
          class="font-heading text-2xl md:text-3xl lg:text-4xl tracking-brand text-base-content"
        >
          {{ host.name }}
        </h2>
        <p class="text-primary/70 font-body text-sm mt-1">{{ host.title }}</p>
      </div>

      <div class="h-0.5 w-12 bg-gradient-to-r from-primary to-transparent" />

      <p
        class="text-base-content/70 font-body leading-relaxed text-sm lg:text-base"
      >
        {{ host.bio }}
      </p>

      <!-- Social Links -->
      <div
        v-if="Object.keys(host.socials).length"
        class="flex items-center gap-2 pt-2"
      >
        <a
          v-if="host.socials.twitter"
          :href="host.socials.twitter"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost btn-sm btn-circle text-base-content/40 hover:text-sky-400 hover:bg-sky-400/10"
          aria-label="X / Twitter"
        >
          <Icon name="simple-icons:x" class="w-4 h-4" />
        </a>
        <a
          v-if="host.socials.linkedin"
          :href="host.socials.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost btn-sm btn-circle text-base-content/40 hover:text-blue-500 hover:bg-blue-500/10"
          aria-label="LinkedIn"
        >
          <Icon name="simple-icons:linkedin" class="w-4 h-4" />
        </a>
        <a
          v-if="host.socials.website"
          :href="host.socials.website"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost btn-sm btn-circle text-base-content/40 hover:text-primary hover:bg-primary/10"
          aria-label="Website"
        >
          <Icon name="lucide:globe" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Host } from "~/data/hosts";

defineProps<{
  host: Host;
  reversed?: boolean;
}>();

const imageError = ref(false);
const onImageError = () => {
  imageError.value = true;
};
</script>
