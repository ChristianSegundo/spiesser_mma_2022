<template>
  <h1>Zusage_erfolgreichView - Spiesser</h1>
  <h2>Juhu!</h2>
  <p>Wir haben den Organisator informiert</p>
  <a href="/gast/einladung-01">
    <button>zurück zur Übersicht</button>
  </a><br>
  <a href="">
    <button>Zum Kalender hinzufügen</button>
  </a>
  <p> ---------------------------- </p>
  <a href="/gast/zusage-teilen">
    <button>Event teilen</button>
  </a>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Zusage_erfolgreichView',
  components: {
    FirstComponent
  }
}
</script>

