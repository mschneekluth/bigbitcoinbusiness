<template>
  <div>
    <!-- Page Hero -->
    <section class="relative py-20 lg:py-28 bg-base-200 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-base-100 to-base-200" />
      <div class="section-container relative z-10 space-y-4">
        <p class="text-primary font-heading text-sm tracking-brand-wide">Gastauftritte</p>
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl tracking-brand text-base-content max-w-2xl">
          Werden Sie Gast
        </h1>
        <div class="h-0.5 w-20 bg-gradient-to-r from-primary to-transparent" />
        <p class="text-base-content/60 font-body text-lg max-w-2xl leading-relaxed">
          Teilen Sie Ihr Wissen und Ihre Geschichte mit der deutschsprachigen Krypto-Community.
        </p>
      </div>
    </section>

    <!-- Why Be a Guest -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <SharedSectionHeading
          eyebrow="Warum Gast werden?"
          title="Ihre Vorteile"
          subtitle="Ein Auftritt bei Big Bitcoin Business bringt mehr als nur Sichtbarkeit."
          align="center"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SharedIconCard
            v-for="benefit in benefits"
            :key="benefit.title"
            :icon="benefit.icon"
            :title="benefit.title"
            :description="benefit.description"
          />
        </div>
      </div>
    </section>

    <!-- Process / Steps -->
    <section class="section-py bg-base-200">
      <div class="section-container">
        <SharedSectionHeading
          eyebrow="So funktioniert es"
          title="Der Ablauf"
          subtitle="Von der Bewerbung bis zur veröffentlichten Episode – transparent und unkompliziert."
          align="center"
        />
        <div class="max-w-3xl mx-auto">
          <div class="space-y-0">
            <div
              v-for="(step, index) in steps"
              :key="step.title"
              class="flex gap-6 lg:gap-8"
            >
              <!-- Step indicator -->
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                  <span class="font-heading text-sm text-primary">{{ index + 1 }}</span>
                </div>
                <div v-if="index < steps.length - 1" class="w-0.5 h-12 bg-gradient-to-b from-primary/30 to-transparent mt-1" />
              </div>
              <!-- Step content -->
              <div :class="['pb-8', index === steps.length - 1 ? 'pb-0' : '']">
                <div class="flex items-center gap-3 mb-2">
                  <Icon :name="step.icon" class="w-5 h-5 text-primary" />
                  <h3 class="font-heading text-base tracking-brand text-base-content">{{ step.title }}</h3>
                </div>
                <p class="text-sm text-base-content/60 font-body leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Look For -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <SharedSectionHeading
              eyebrow="Passende Gäste"
              title="Wen wir suchen"
              subtitle="Wir suchen keine PR-Phrasen, sondern echte Expertise und authentische Stimmen."
            />
            <div class="space-y-3">
              <div
                v-for="item in guestTypes"
                :key="item"
                class="flex items-center gap-3"
              >
                <Icon name="lucide:check-circle-2" class="w-5 h-5 text-primary shrink-0" />
                <span class="text-sm text-base-content/70 font-body">{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="card bg-base-200 border border-base-300 p-6 lg:p-8 space-y-4">
            <h3 class="font-heading text-lg tracking-brand text-base-content">Praktische Infos</h3>
            <div class="space-y-3">
              <div
                v-for="info in practicalInfo"
                :key="info.label"
                class="flex justify-between items-center py-2 border-b border-base-300 last:border-0"
              >
                <span class="text-sm text-base-content/60 font-body">{{ info.label }}</span>
                <span class="text-sm font-heading text-primary tracking-wide text-right max-w-48">{{ info.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Form -->
    <section class="section-py bg-base-200">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <SharedSectionHeading
              eyebrow="Jetzt bewerben"
              title="Gastbewerbung"
              subtitle="Erzählen Sie uns von sich und was Sie zum Podcast beitragen möchten."
            />
            <div class="card bg-primary/5 border border-primary/20 p-5 space-y-2">
              <div class="flex items-center gap-2">
                <Icon name="lucide:info" class="w-5 h-5 text-primary" />
                <p class="font-heading text-sm tracking-brand text-base-content">Hinweis</p>
              </div>
              <p class="text-sm text-base-content/60 font-body leading-relaxed">
                Wir lesen jede Bewerbung sorgfältig. Aufgrund des Volumens können wir nicht immer sofort antworten, melden uns aber bei passenden Kandidaten.
              </p>
            </div>
          </div>
          <SharedContactForm
            form-name="gast-bewerbung"
            submit-label="Bewerbung einreichen"
            :show-company="true"
            :show-topic="true"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Für Gäste – Big Bitcoin Business',
  meta: [{ name: 'description', content: 'Bewerben Sie sich als Gast beim Big Bitcoin Business Podcast. Teilen Sie Ihr Wissen mit der deutschsprachigen Krypto-Community.' }],
})

const benefits = [
  { icon: 'lucide:radio', title: 'Reichweite', description: 'Erreichen Sie tausende Krypto-Interessierte im DACH-Raum – auf YouTube und Spotify.' },
  { icon: 'lucide:award', title: 'Glaubwürdigkeit', description: 'Ein Auftritt beim BBB-Podcast stärkt Ihr Standing in der Krypto-Community.' },
  { icon: 'lucide:users', title: 'Netzwerk', description: 'Werden Sie Teil des BBB-Netzwerks aus Gründern, Investoren und Experten.' },
  { icon: 'lucide:video', title: 'Content', description: 'Sie erhalten das fertige Video zum eigenem Teilen – für Ihre eigenen Kanäle.' },
  { icon: 'lucide:link', title: 'SEO & Sichtbarkeit', description: 'Backlinks, Erwähnungen und dauerhafte Präsenz im Podcast-Archiv.' },
  { icon: 'lucide:message-circle', title: 'Echtes Gespräch', description: 'Keine PR-Interviews: Authentische Unterhaltungen, die in Erinnerung bleiben.' },
]

const steps = [
  { icon: 'lucide:file-edit', title: 'Bewerbung einreichen', description: 'Fülle das Formular aus und erkläre kurz, wer du bist und warum dich die Community interessieren sollte.' },
  { icon: 'lucide:phone', title: 'Vorgespräch', description: 'Bei gegenseitigem Interesse laden wir zu einem kurzen Kennenlern-Call ein, um Themen und Format abzustimmen.' },
  { icon: 'lucide:mic', title: 'Aufnahme', description: 'Die Aufzeichnung findet remote via Video-Call statt. Ca. 60–90 Minuten. Keine Vorbereitung nötig – sei einfach du selbst.' },
  { icon: 'lucide:upload-cloud', title: 'Veröffentlichung', description: 'Die Episode wird auf YouTube und Spotify veröffentlicht. Du bekommst rechtzeitig Bescheid und das fertige Video zum Teilen.' },
]

const guestTypes = [
  'Bitcoin- und Krypto-Experten mit echter Expertise',
  'Gründer und CEOs aus dem Web3- und FinTech-Bereich',
  'Regulatoren, Juristen und politische Akteure',
  'Entwickler hinter relevanten Protokollen und Projekten',
  'Investoren und VCs mit Krypto-Fokus',
  'Journalisten und Analysten der Branche',
]

const practicalInfo = [
  { label: 'Format', value: 'Remote (Video-Call)' },
  { label: 'Dauer', value: '60 – 90 Minuten' },
  { label: 'Technische Anforderungen', value: 'Kopfhörer + ruhige Umgebung' },
  { label: 'Sprache', value: 'Deutsch' },
  { label: 'Vorbereitung', value: 'Keine spezifische nötig' },
  { label: 'Honorar', value: 'Kostenlos (gegenseitiger Benefit)' },
]
</script>
