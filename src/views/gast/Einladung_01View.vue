<template>
  <h1>Einladung_01View - Spiesser</h1>
  <h2>Eventname</h2>
  <p>MO 16. Juni 2023</p>
  <p>13:30 Uhr</p>
  <p> -- Google Maps Einbindung -- </p>
  <p>Gerne lade ich euch zur Abschlussfeier meines Bachelors ein. Dieser findet in New-York statt und „bröötlet“ zusammen.</p>
  <p>
    6. Juni 2023<br>
    Deadline für die Zusage
  </p>
  <p>
    Mitbring-Dinge<br>
    Wird nach Zusage angezeigt
  </p>
  <a href="/gast/zusage-00">
    <button>Zusage c:</button>
  </a>
  <a href="/gast/absage">
    <button>Absage D:</button>
  </a>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Einladung_01View',
  components: {
    FirstComponent
  }
}
</script>

