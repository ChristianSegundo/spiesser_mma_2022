<template>
  <h1>Zusage_Mitbring_Dinge_02View - Spiesser</h1>
  <h2>Mitbring-Dinge</h2>
  <p>Dein*e Gastgeber*in braucht folgende Dinge:</p>
  <input type="checkbox" id="mitbring-dinge-holz" name="mitbring-dinge-holz">
  <label for="mitbring-dinge-holz">Holz</label><br>
  <input type="checkbox" id="mitbring-dinge-gurkensalat" name="mitbring-dinge-gurkensalat">
  <label for="mitbring-dinge-gurkensalat">Gurkensalat</label><br>
  <input type="checkbox" id="mitbring-dinge-2x-gascho-bier" name="mitbring-dinge-2x-gascho-bier" checked>
  <label for="mitbring-dinge-2x-gascho-bier">2x Gascho Bier</label>
  <p>Etwas fehlt? Bring es mit!</p>
  <input type="text" id="mitbring-ding-hinzufuegen" name="mitbring-ding-hinzufuegen" placeholder="Hörnlisalat (+)"><br>
  <a href="/gast/zusage-mitbring-dinge-03">
    <button>weiter</button>
  </a>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Zusage_Mitbring_Dinge_02View',
  components: {
    FirstComponent
  }
}
</script>

