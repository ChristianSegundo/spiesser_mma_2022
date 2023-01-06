<template>
  <div class="header-items">
    <router-link to='/' class="goback-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </router-link>

    <ProgressBarComponent></ProgressBarComponent>
  </div>

  <div>
    <p>Du organisierst:</p>
    <h1 v-if="new_event.eventname === null || new_event.eventname === undefined">Eventname</h1>
    <h1 v-else>{{ new_event.eventname }}</h1>
    <input type="text" placeholder="Wie heisst dein Brötle-Event?" v-model="new_event.eventname" required>
    <textarea type="text" placeholder="Beschreibe dein Brötle-Event" v-model="new_event.eventbeschreibung"
      required></textarea>
  </div>
  <router-link to='/organisator/event-erstellen-02' class="button-10 space-top">Weiter</router-link>

</template>

<script>
import { new_event } from '../../events/new_event.js'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';


export default {
  name: 'Event_Erstellen_01View',
  components: {
    ProgressBarComponent: ProgressBarComponent
  },
  data() {
    return {
      new_event,
    }
  },
  mounted() {
    var stepProgress = document.getElementById('progressStep1');
    stepProgress.classList.add('current-item');
  }
}
</script>

