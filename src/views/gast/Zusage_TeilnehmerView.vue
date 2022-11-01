<template>
  <h1>Zusage_TeilnehmerView - Spiesser</h1>
  <h2>Anzahl Personen</h2>
  <input type="radio" id="teilnehmer-allein" name="teilnehmer" value="teilnehmer-allein">
  <label for="teilnehmer-allein">Ich komme allein</label><br>
  <input type="radio" id="teilnehmer-mehrere" name="teilnehmer" value="teilnehmer-mehrere">
  <label for="teilnehmer-mehrere">
    Wir sind 
    <input type="number" id="teilnehmer-zahl" name="teilnehmer-zahl" min="2" max="20" required>
     Personen (i)
  </label><br>
  <a href="/gast/zusage-erfolgreich">
    <button>weiter</button>
  </a>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Zusage_TeilnehmerView',
  components: {
    FirstComponent
  }
}
</script>

