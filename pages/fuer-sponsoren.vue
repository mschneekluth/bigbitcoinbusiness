<template>
  <div>
    <!-- Page Hero -->
    <section class="relative py-20 lg:py-28 bg-base-200 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-base-100 to-base-200" />
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div class="section-container relative z-10 space-y-4">
        <p class="text-primary font-heading text-sm tracking-brand-wide">Werbung & Kooperationen</p>
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl tracking-brand text-base-content max-w-2xl">
          Erreichen Sie die Krypto-Entscheider
        </h1>
        <div class="h-0.5 w-20 bg-gradient-to-r from-primary to-transparent" />
        <p class="text-base-content/60 font-body text-lg max-w-2xl leading-relaxed">
          Positionieren Sie Ihre Marke vor einer hochqualifizierten, kaufkräftigen Zielgruppe im deutschsprachigen Krypto-Raum.
        </p>
      </div>
    </section>

    <!-- Reach Stats -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <SharedSectionHeading
          eyebrow="Unsere Reichweite"
          title="Zahlen & Fakten"
          subtitle="Echte Menschen, echte Reichweite – keine aufgeblähten Metriken."
          align="center"
        />
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <SharedStatCard
            v-for="stat in stats"
            :key="stat.label"
            :value="stat.value"
            :label="stat.label"
            :sublabel="stat.sublabel"
          />
        </div>
      </div>
    </section>

    <!-- Audience Profile -->
    <section class="section-py bg-base-200">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <SharedSectionHeading
              eyebrow="Zielgruppe"
              title="Wer uns zuhört"
              subtitle="Unsere Hörer sind keine passiven Konsumenten – sie sind aktive Entscheider."
            />
            <div class="space-y-3">
              <div
                v-for="item in audienceItems"
                :key="item.label"
                class="flex items-center gap-3 p-4 bg-base-100 rounded-xl border border-base-300"
              >
                <div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon :name="item.icon" class="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p class="font-heading text-sm tracking-brand text-base-content">{{ item.label }}</p>
                  <p class="text-xs text-base-content/50 font-body">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="card bg-base-100 border border-primary/20 p-6 lg:p-8">
              <div class="flex items-start gap-3 mb-4">
                <Icon name="lucide:target" class="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <h3 class="font-heading text-lg tracking-brand text-base-content">Der ideale Werbepartner</h3>
              </div>
              <p class="text-base-content/60 font-body text-sm leading-relaxed mb-4">
                Unternehmen aus dem Krypto-Umfeld, FinTech-Startups, Exchanges, Hardware-Wallet-Hersteller, Steuerberater für digitale Assets und alle, die ihre Marke bei der kaufkräftigen Krypto-Community etablieren möchten.
              </p>
              <div class="divider my-3" />
              <p class="text-xs text-base-content/40 font-body italic">
                Wir wählen unsere Werbepartner sorgfältig aus und arbeiten nur mit seriösen Unternehmen zusammen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ad Formats -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <SharedSectionHeading
          eyebrow="Buchungsoptionen"
          title="Werbeformate"
          subtitle="Flexible Formate für jedes Budget und jedes Ziel."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="format in adFormats"
            :key="format.title"
            :class="['card border card-hover p-6 lg:p-8 space-y-4', format.featured ? 'bg-primary/5 border-primary/30' : 'bg-base-200 border-base-300']"
          >
            <div class="flex items-start justify-between">
              <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon :name="format.icon" class="w-5 h-5 text-primary" />
              </div>
              <span v-if="format.featured" class="badge badge-primary badge-sm font-heading tracking-wide text-xs">
                Beliebt
              </span>
            </div>
            <div>
              <h3 class="font-heading text-base lg:text-lg tracking-brand text-base-content">{{ format.title }}</h3>
              <p class="text-sm text-base-content/60 font-body mt-2 leading-relaxed">{{ format.description }}</p>
            </div>
            <ul class="space-y-1.5">
              <li
                v-for="feature in format.features"
                :key="feature"
                class="flex items-center gap-2 text-sm text-base-content/60 font-body"
              >
                <Icon name="lucide:check" class="w-4 h-4 text-primary shrink-0" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="section-py bg-base-200">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <SharedSectionHeading
              eyebrow="Jetzt anfragen"
              title="Sponsoring anfragen"
              subtitle="Senden Sie uns Ihre Anfrage und wir melden uns innerhalb von 48 Stunden bei Ihnen."
            />
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <Icon name="lucide:clock" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="font-heading text-sm tracking-brand text-base-content">Schnelle Antwort</p>
                  <p class="text-sm text-base-content/60 font-body">Innerhalb von 48 Stunden antworten wir auf jede Anfrage.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:file-text" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="font-heading text-sm tracking-brand text-base-content">Transparente Preise</p>
                  <p class="text-sm text-base-content/60 font-body">Klare Konditionen ohne versteckte Kosten.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:shield-check" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="font-heading text-sm tracking-brand text-base-content">Qualitätssicherung</p>
                  <p class="text-sm text-base-content/60 font-body">Wir arbeiten nur mit Partnern, hinter denen wir stehen.</p>
                </div>
              </div>
            </div>
          </div>
          <SharedContactForm
            form-name="sponsor-anfrage"
            submit-label="Anfrage senden"
            :show-company="true"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Für Sponsoren – Big Bitcoin Business',
  meta: [{ name: 'description', content: 'Werbemöglichkeiten beim Big Bitcoin Business Podcast. Erreichen Sie die deutschsprachige Krypto-Community.' }],
})

const stats = [
  { value: '50k+', label: 'YouTube-Aufrufe', sublabel: 'monatlich' },
  { value: '10k+', label: 'Spotify-Streams', sublabel: 'monatlich' },
  { value: '5k+', label: 'Abonnenten', sublabel: 'gesamt' },
  { value: '100+', label: 'Episoden', sublabel: 'Gesamtarchiv' },
]

const audienceItems = [
  { icon: 'lucide:trending-up', label: 'Aktive Krypto-Anleger', value: '~70% der Zuhörer' },
  { icon: 'lucide:briefcase', label: 'Unternehmer & Manager', value: '~40% selbstständig oder C-Level' },
  { icon: 'lucide:map-pin', label: 'DACH-Region', value: 'Deutschland, Österreich, Schweiz' },
  { icon: 'lucide:user', label: 'Altersgruppe', value: 'Hauptsächlich 25 – 45 Jahre' },
]

const adFormats = [
  {
    icon: 'lucide:play-circle',
    title: 'Pre-Roll',
    description: '30-60 Sekunden am Anfang der Episode. Maximale Aufmerksamkeit beim ersten Höreindruck.',
    features: ['30–60 Sekunden', 'Host-Read Werbung', 'Beide Plattformen (YT + Spotify)', 'Einmaliger Einsatz'],
    featured: false,
  },
  {
    icon: 'lucide:pause-circle',
    title: 'Mid-Roll',
    description: 'Integriertes Segment mitten in der Episode – die effektivste Platzierung mit höchster Aufmerksamkeit.',
    features: ['60–90 Sekunden', 'Host-Read + persönliche Empfehlung', 'Beide Plattformen', 'Höchste Conversion'],
    featured: true,
  },
  {
    icon: 'lucide:package',
    title: 'Sponsored Segment',
    description: 'Ein vollständiges, moderiertes Segment rund um Ihr Unternehmen oder Produkt.',
    features: ['3–5 Minuten', 'Moderiertes Gespräch', 'Tiefe Produktvorstellung', 'Artikel + Social Media'],
    featured: false,
  },
  {
    icon: 'lucide:share-2',
    title: 'Social Media Bundle',
    description: 'Begleitende Erwähnung auf unseren Social-Media-Kanälen zusätzlich zur Episode.',
    features: ['Post auf X / LinkedIn', 'Story-Content', 'Link in Beschreibung', 'Community-Reichweite'],
    featured: false,
  },
  {
    icon: 'lucide:calendar',
    title: 'Exklusiv-Paket',
    description: 'Exklusiver Werbepartner für eine gesamte Episode oder einen ganzen Monat.',
    features: ['Alle Formate kombiniert', 'Exklusivität in der Episode', 'Newsletter-Mention', 'Best Value'],
    featured: false,
  },
]
</script>
