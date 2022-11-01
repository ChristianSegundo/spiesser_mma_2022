<template>
  <h1>Zusage_Mitbring_Dinge_01View - Spiesser</h1>
  <h2>Mitbring-Dinge</h2>
  <p>Dein*e Gastgeber*in braucht folgende Dinge:</p>
  <input type="checkbox" class="mitbring-ding" name="mitbring-ding-holz">
  <label for="mitbring-ding-holz">Holz</label><br>
  <input type="checkbox" class="mitbring-ding" name="mitbring-ding-gurkensalat">
  <label for="mitbring-dinge-gurkensalat">Gurkensalat</label><br>
  <input type="checkbox" class="mitbring-ding" name="mitbring-ding-2x-gascho-bier" checked>
  <label for="mitbring-ding-2x-gascho-bier">2x Gascho Bier</label>
  <p>Etwas fehlt? Bring es mit!</p>
  <input type="text" class="mitbring-ding-hinzufuegen" name="mitbring-ding-hinzufuegen" placeholder="Ich nehme mit... (+)"><br>
  <a href="/gast/zusage-mitbring-dinge-02">
    <button>weiter</button>
  </a>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Zusage_Mitbring_Dinge_01View',
  components: {
    FirstComponent
  }
}
</script>

