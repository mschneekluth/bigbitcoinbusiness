// Vue 3 compiler macros — available globally in <script setup> blocks.
// Volar handles these at runtime; this file provides IDE type support.
import type {
  defineProps as _defineProps,
  defineEmits as _defineEmits,
  defineExpose as _defineExpose,
  withDefaults as _withDefaults,
} from 'vue'

declare global {
  const defineProps: typeof _defineProps
  const defineEmits: typeof _defineEmits
  const defineExpose: typeof _defineExpose
  const withDefaults: typeof _withDefaults
}

export {}
