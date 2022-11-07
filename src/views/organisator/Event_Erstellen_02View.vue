<template>
  <p>{{new_event}}</p>
  <h1>Wann findet dein Brötle-Event statt?</h1>
  <input type="text" placeholder="13" v-model="new_event.startzeit.stunde">
  <p>:</p>
  <input type="text" placeholder="30" v-model="new_event.startzeit.minute">
  <input type="date">
  <div>((Kalenderplatzhalter))</div>
  <input type="checkbox" class="zusagedatum" name="zusagedatum"> <!-- Toggle für Deadline -->
  <p>Zusage bis zum:</p>
  <input type="date">
  <router-link to='/organisator/event-erstellen-03' class="button-10 space-top">Weiter</router-link>
</template>

<script>
import { new_event } from '../../new_event.js'

export default {
  name: 'Event_Erstellen_02View',
  components: {

  },
  data() {
    return {
      new_event,
    }
  },
}
</script>

