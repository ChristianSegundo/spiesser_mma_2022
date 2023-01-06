<template>

  <div class="margin-auto">
    <h1>Anzahl Personen</h1>

    <div class="teilnehmer-zusage-alleine">
      <input type="radio" id="teilnehmer-allein" name="teilnehmer" value="teilnehmer-allein" checked>
      <label for="teilnehmer-allein">Ich komme allein</label><br>
    </div>

    <div class="teilnehmer-zusage-gruppe">
      <input type="radio" id="teilnehmer-mehrere" name="teilnehmer" value="teilnehmer-mehrere">
      <label for="teilnehmer-mehrere">

        Wir sind
        <input type="number" id="teilnehmer-zahl" name="teilnehmer-zahl" min="2" max="20" pattern="\d*" required>
        Personen
      </label>
    </div>
    <router-link to='/gast/zusage-teilen' class="button-10 space-top">Weiter</router-link>

  </div>

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

