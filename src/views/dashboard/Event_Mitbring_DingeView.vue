<template>
  <h1>Event_Mitbring_DingeView - Spiesser</h1>
  <h2>Mitbring-Dinge</h2>
  <p>Deine Gäste bringen mit:</p>
  <input type="checkbox" class="mitbring-ding" name="mitbring-ding-holz" checked>
  <label for="mitbring-ding-holz">Holz (( Regula )) </label><br>
  <input type="checkbox" class="mitbring-ding" name="mitbring-ding-gurkensalat" checked>
  <label for="mitbring-ding-gurkensalat">Gurkensalat (( Sandro )) </label><br>
  <input type="checkbox" class="mitbring-ding" name="mitbring-ding-2x-gascho-bier" checked>
  <label for="mitbring-ding-2x-gascho-bier">2x Gascho Bier (( Sandro )) </label>
  <p>Mitbring-Ding hinzufügen</p>
  <input type="text" class="mitbring-ding-hinzufuegen" name="mitbring-ding-hinzufuegen" placeholder="... (+)">
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Event_Mitbring_DingeView',
  components: {
    FirstComponent
  }
}
</script>

