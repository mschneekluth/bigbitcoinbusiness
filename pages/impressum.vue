<template>
  <div>
    <section class="relative py-20 bg-base-200">
      <div class="absolute inset-0 bg-gradient-to-b from-base-100 to-base-200" />
      <div class="section-container relative z-10">
        <h1 class="font-heading text-4xl tracking-brand text-base-content mb-4">Impressum</h1>
        <div class="h-0.5 w-20 bg-gradient-to-r from-primary to-transparent" />
      </div>
    </section>

    <section class="section-py bg-base-100">
      <div class="section-container">
        <div class="max-w-2xl space-y-8 font-body text-base-content/70 text-sm leading-relaxed">
          <div>
            <h2 class="font-heading text-lg tracking-brand text-base-content mb-3">Angaben gemäß § 5 TMG</h2>
            <p>Big Bitcoin Business Podcast<br />
            [Straße und Hausnummer]<br />
            [PLZ Ort]<br />
            Deutschland</p>
          </div>
          <div>
            <h2 class="font-heading text-lg tracking-brand text-base-content mb-3">Vertreten durch</h2>
            <p>Alexander Mayer, Marco Schneekluth, Robert Steinadler</p>
          </div>
          <div>
            <h2 class="font-heading text-lg tracking-brand text-base-content mb-3">Kontakt</h2>
            <p>E-Mail: podcast@bigbitcoinbusiness.de</p>
          </div>
          <div>
            <h2 class="font-heading text-lg tracking-brand text-base-content mb-3">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht obligiert, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          </div>
          <div>
            <h2 class="font-heading text-lg tracking-brand text-base-content mb-3">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Impressum – Big Bitcoin Business',
})
</script>
