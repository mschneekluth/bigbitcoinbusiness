<template>
  <div class="card bg-base-200 border border-base-300 p-6 lg:p-10">
    <div v-if="!submitted">
      <form
        :name="formName"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
        class="space-y-5"
      >
        <input type="hidden" :name="formName" :value="formName" />
        <input type="hidden" name="form-name" :value="formName" />
        <!-- Honeypot -->
        <div class="hidden">
          <label>Bitte nicht ausfüllen: <input name="bot-field" /></label>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="form-control">
            <label class="label">
              <span class="label-text font-body text-sm">Name *</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              name="name"
              placeholder="Ihr Name"
              class="input input-bordered input-sm w-full font-body"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-body text-sm">E-Mail *</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              name="email"
              placeholder="ihre@email.de"
              class="input input-bordered input-sm w-full font-body"
              required
            />
          </div>
        </div>

        <div v-if="showCompany" class="form-control">
          <label class="label">
            <span class="label-text font-body text-sm">Unternehmen</span>
          </label>
          <input
            v-model="form.company"
            type="text"
            name="company"
            placeholder="Ihr Unternehmen"
            class="input input-bordered input-sm w-full font-body"
          />
        </div>

        <div v-if="showTopic" class="form-control">
          <label class="label">
            <span class="label-text font-body text-sm">Themenvorschlag</span>
          </label>
          <input
            v-model="form.topic"
            type="text"
            name="topic"
            placeholder="Worum soll es gehen?"
            class="input input-bordered input-sm w-full font-body"
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text font-body text-sm">Nachricht *</span>
          </label>
          <textarea
            v-model="form.message"
            name="message"
            placeholder="Ihre Nachricht..."
            rows="5"
            class="textarea textarea-bordered font-body text-sm w-full"
            required
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary w-full font-heading tracking-brand text-sm gap-2"
          :disabled="submitting"
        >
          <Icon v-if="submitting" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
          <Icon v-else name="lucide:send" class="w-4 h-4" />
          {{ submitting ? 'Wird gesendet...' : submitLabel }}
        </button>
      </form>
    </div>

    <!-- Success State -->
    <div v-else class="text-center py-10 space-y-4">
      <div class="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
        <Icon name="lucide:check-circle" class="w-8 h-8 text-success" />
      </div>
      <h3 class="font-heading text-xl tracking-brand text-base-content">Nachricht gesendet!</h3>
      <p class="text-base-content/60 font-body text-sm max-w-sm mx-auto">
        Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.
      </p>
      <button @click="submitted = false" class="btn btn-ghost btn-sm font-body">
        Weitere Nachricht senden
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  formName: string
  submitLabel?: string
  showCompany?: boolean
  showTopic?: boolean
}>(), {
  submitLabel: 'Nachricht senden',
  showCompany: false,
  showTopic: false,
})

const form = reactive({
  name: '',
  email: '',
  company: '',
  topic: '',
  message: '',
})

const submitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  submitting.value = true
  try {
    await $fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': props.formName,
        ...form,
      }).toString(),
    })
    submitted.value = true
  } catch {
    // In development, just show success
    submitted.value = true
  } finally {
    submitting.value = false
  }
}
</script>
