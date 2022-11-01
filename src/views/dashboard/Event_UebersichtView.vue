<template>
  <h1>Event_UebersichtView - Spiesser</h1>
  <h2>Eventname</h2>
  <p>Vorschau</p>
  <p>MO 16. Juni 2020</p>
  <p>13:30 Uhr</p>
  <p> -- Google Maps Einbindung -- </p>
  <p>Gerne lade ich euch zur Abschlussfeier meines Bachelors ein. Dieser findet in New-York statt und „bröötlet“ zusammen.</p>
  <a href="/gast/zusage-teilen">
    <button>Gäste einladen</button>
  </a><br>
  <a href="/dashboard/event-monitoring">
    <button>Zum Monitoring</button>
  </a>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Event_UebersichtView',
  components: {
    FirstComponent
  }
}
</script>

