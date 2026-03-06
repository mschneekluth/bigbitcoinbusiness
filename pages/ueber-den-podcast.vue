<template>
  <div>
    <!-- Page Hero -->
    <section class="relative py-20 lg:py-28 bg-base-200 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-b from-base-100 to-base-200"
      />
      <div class="absolute inset-0 opacity-5">
        <img
          src="~/assets/images/banner.png"
          alt=""
          class="w-full h-full object-cover object-center"
        />
      </div>
      <div class="section-container relative z-10 text-center space-y-4">
        <p class="text-primary font-heading text-sm tracking-brand-wide">
          Wer wir sind
        </p>
        <h1
          class="font-heading text-4xl md:text-5xl lg:text-6xl tracking-brand text-base-content"
        >
          Über den Podcast
        </h1>
        <div
          class="h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
        />
        <p class="text-base-content/60 font-body text-lg max-w-2xl mx-auto">
          Realtalk über den Krypto-Sektor – seit dem ersten Tag.
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <div class="max-w-3xl mx-auto space-y-6">
          <SharedSectionHeading
            eyebrow="Unsere Mission"
            title="Was uns antreibt"
          />
          <div
            class="space-y-4 text-base-content/70 font-body leading-relaxed text-base lg:text-lg"
          >
            <p>
              Die Krypto-Welt ist schnell, laut und oft von Interessen geleitet.
              Big Bitcoin Business ist die Gegenbewegung: ein Podcast, der sich
              Zeit nimmt, Dinge zu durchleuchten, ohne dabei die Unterhaltung zu
              vergessen.
            </p>
            <p>
              Mit Alexander Mayer, Marco Schneekluth und Robert Steinadler
              kommen drei Menschen zusammen, die den Krypto-Sektor aus den
              unterschiedlichsten Blickwinkeln kennen – als Investor, als
              Entwickler und als Journalist. Das macht jede Episode zu einem
              echten Realtalk, bei dem keine Sicht zu kurz kommt.
            </p>
            <p>
              Egal ob bullischer Markt, regulatorische Erdbeben oder stille
              Technologie-Revolutionen: Wir sind dabei und ordnen ein, was
              wirklich wichtig ist.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Topics Deep Dive -->
    <section class="section-py bg-base-200">
      <div class="section-container">
        <SharedSectionHeading
          eyebrow="Themenspektrum"
          title="Worüber wir sprechen"
          subtitle="Von der Technologie bis zur Politik – das gesamte Krypto-Ökosystem im Blick."
          align="center"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SharedIconCard
            v-for="topic in topics"
            :key="topic.title"
            :icon="topic.icon"
            :title="topic.title"
            :description="topic.description"
          />
        </div>
      </div>
    </section>

    <!-- Audience Section -->
    <section class="section-py bg-base-100">
      <div class="section-container">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div>
            <SharedSectionHeading
              eyebrow="Unsere Zuhörer"
              title="Die Zielgruppe"
              subtitle="Nicht der Krypto-Newbie, der nach dem nächsten 100x sucht. Sondern Menschen, die verstehen wollen."
            />
            <div class="space-y-4">
              <div
                v-for="audience in audienceItems"
                :key="audience.label"
                class="flex items-start gap-3"
              >
                <div
                  class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                >
                  <Icon :name="audience.icon" class="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p
                    class="font-heading text-sm tracking-brand text-base-content"
                  >
                    {{ audience.label }}
                  </p>
                  <p class="text-sm text-base-content/60 font-body mt-0.5">
                    {{ audience.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="card bg-base-200 border border-base-300 p-6 lg:p-8">
              <h3
                class="font-heading text-lg tracking-brand text-base-content mb-4"
              >
                Typischer Hörer
              </h3>
              <div class="space-y-3">
                <div
                  v-for="stat in audienceStats"
                  :key="stat.label"
                  class="flex justify-between items-center"
                >
                  <span class="text-sm text-base-content/60 font-body">{{
                    stat.label
                  }}</span>
                  <span
                    class="text-sm font-heading text-primary tracking-wide"
                    >{{ stat.value }}</span
                  >
                </div>
              </div>
            </div>
            <div class="card bg-primary/10 border border-primary/20 p-6">
              <div class="flex items-start gap-3">
                <Icon
                  name="lucide:quote"
                  class="w-8 h-8 text-primary/40 shrink-0 mt-1"
                />
                <p
                  class="text-base-content/70 font-body italic text-sm leading-relaxed"
                >
                  "Big Bitcoin Business ist der einzige Krypto-Podcast, den ich
                  nie überspringen würde – weil ich weiß, dass am Ende immer
                  etwas hängen bleibt, das mich wirklich weiterbringt."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tone Section -->
    <section class="section-py bg-base-200">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center space-y-8">
          <SharedSectionHeading
            eyebrow="Unsere Haltung"
            title="Tonalität & Format"
            align="center"
          />
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              class="card bg-base-100 border border-base-300 p-5 text-center"
            >
              <Icon
                name="lucide:brain"
                class="w-8 h-8 text-primary mx-auto mb-3"
              />
              <h3 class="font-heading text-sm tracking-brand text-base-content">
                Fundiert
              </h3>
              <p class="text-xs text-base-content/50 font-body mt-2">
                Recherche vor Meinung. Fakten vor Hype.
              </p>
            </div>
            <div
              class="card bg-base-100 border border-base-300 p-5 text-center"
            >
              <Icon
                name="lucide:message-square"
                class="w-8 h-8 text-primary mx-auto mb-3"
              />
              <h3 class="font-heading text-sm tracking-brand text-base-content">
                Direkt
              </h3>
              <p class="text-xs text-base-content/50 font-body mt-2">
                Klare Meinungen, keine ausweichenden Antworten.
              </p>
            </div>
            <div
              class="card bg-base-100 border border-base-300 p-5 text-center"
            >
              <Icon
                name="lucide:laugh"
                class="w-8 h-8 text-primary mx-auto mb-3"
              />
              <h3 class="font-heading text-sm tracking-brand text-base-content">
                Unterhaltsam
              </h3>
              <p class="text-xs text-base-content/50 font-body mt-2">
                Kein trockenes Fachgespräch – echte Unterhaltung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-py bg-base-100">
      <div class="section-container text-center space-y-6">
        <h2
          class="font-heading text-2xl md:text-3xl tracking-brand text-base-content"
        >
          Jetzt reinhören
        </h2>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.youtube.com/channel/UCQXc-gUDxa6JwH1_Q4UPiVA"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-lg font-heading tracking-brand text-sm gap-3"
          >
            <Icon name="simple-icons:youtube" class="w-5 h-5" />
            YouTube
          </a>
          <a
            href="https://open.spotify.com/show/4lzuRd3U1O9PocBzTOEIu1"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline btn-lg font-heading tracking-brand text-sm gap-3 border-primary/40 hover:btn-primary"
          >
            <Icon name="simple-icons:spotify" class="w-5 h-5" />
            Spotify
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Über den Podcast – Big Bitcoin Business",
  meta: [
    {
      name: "description",
      content:
        "Erfahre mehr über den Big Bitcoin Business Podcast – Mission, Themen, Zielgruppe und Tonalität.",
    },
  ],
});

const topics = [
  {
    icon: "lucide:bitcoin",
    title: "Bitcoin & Krypto-Märkte",
    description:
      "Preisbewegungen, On-Chain-Daten, Marktpsychologie und makroökonomische Einordnung.",
  },
  {
    icon: "lucide:landmark",
    title: "Regulierung & Recht",
    description:
      "MiCA, BaFin, SEC – wie Gesetze und Regulierungen den Sektor formen.",
  },
  {
    icon: "lucide:building-2",
    title: "Unternehmertum & Startups",
    description:
      "Gründergeschichten, Web3-Business-Modelle und Wachstumsstrategien.",
  },
  {
    icon: "lucide:cpu",
    title: "DeFi & Protokolle",
    description:
      "Dezentrale Finanzen, Smart Contracts und die technische Infrastruktur.",
  },
  {
    icon: "lucide:globe",
    title: "Internationale Trends",
    description:
      "Was in den USA, Asien und Europa passiert und was das für DACH bedeutet.",
  },
  {
    icon: "lucide:users",
    title: "Persönlichkeiten & Gäste",
    description:
      "Gespräche mit Gründern, Investoren, Entwicklern und Regulatoren.",
  },
];

const audienceItems = [
  {
    icon: "lucide:trending-up",
    label: "Erfahrene Krypto-Anleger",
    description:
      "Die bereits im Markt aktiv sind und tiefere Einblicke suchen.",
  },
  {
    icon: "lucide:briefcase",
    label: "Unternehmer & Manager",
    description:
      "Die verstehen wollen, wie Blockchain ihr Geschäftsfeld verändert.",
  },
  {
    icon: "lucide:code-2",
    label: "Entwickler & Technologen",
    description:
      "Die die technischen Hintergründe mit Business-Kontext verbinden wollen.",
  },
  {
    icon: "lucide:newspaper",
    label: "Krypto-Interessierte",
    description: "Die fundierte Inhalte statt reiner Spekulation bevorzugen.",
  },
];

const audienceStats = [
  { label: "Altersgruppe", value: "25 – 45 Jahre" },
  { label: "Geschlecht", value: "ca. 75 % männlich" },
  { label: "Ausbildung", value: "Überwiegend Hochschulabschluss" },
  { label: "Krypto-Erfahrung", value: "3+ Jahre" },
  { label: "Sprache", value: "Deutsch (DACH)" },
];
</script>
