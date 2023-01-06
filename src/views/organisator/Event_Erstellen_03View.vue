<template>
  <div class="header-items">
    <router-link to='/organisator/event-erstellen-02' class="goback-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </router-link>
    <ProgressBarComponent></ProgressBarComponent>
  </div>
  <h1>Location</h1>
  <MapsComponent></MapsComponent>
  <router-link to='/organisator/event-erstellen-04' class="button-10 space-top">Weiter</router-link>
</template>

<script>
import { new_event } from '../../events/new_event.js'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
import MapsComponent from '@/components/MapsComponent.vue';



export default {
  name: 'Event_Erstellen_03View',
  components: {
    ProgressBarComponent: ProgressBarComponent,
    MapsComponent

  },
  data() {
    return {
      new_event
    }
  },
  mounted() {
    var stepProgress = document.getElementById('progressStep3');
    stepProgress.classList.add('current-item');
    var stepProgressRemove = document.getElementById('progressStep1', 'progressStep2');
    stepProgressRemove.classList.remove('current-item');
  }
}
</script>

