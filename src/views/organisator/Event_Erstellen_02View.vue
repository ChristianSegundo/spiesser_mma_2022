<template>
  <p>{{new_event}}</p>
  <h1>Wann findet dein Brötle-Event statt?</h1>
  <input type="text" placeholder="13">
  <p>:</p>
  <input type="text" placeholder="30">
  <input type="date">
  <div>Kalenderplatzhalter</div>
  <button>Switch</button>
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

