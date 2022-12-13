<template>
  <ProgressBarComponent></ProgressBarComponent>
  <h1>Wann findet {{new_event.eventname}} statt?</h1>

  <div id="time-choose">
    <input type="time" min="1" max="24" v-model="new_event.startzeit">
  </div>
  <div id="kalenderanzeige">
    <vc-date-picker color="orange" id="date-input-1" v-model="new_event.eventdatum" />
    <!-- <input type="date" id="date-input-1" v-model="new_event.eventdatum"> -->
  </div>

  <div id="zusage-toggle">
    <label class="content">
      <input type="checkbox" style="display:none"  />
      <div class="toggle">
        <div class="btn ui button toggle" id="toggle-button" @click="isActive = !isActive; toggle = !toggle"></div>
      </div>
    </label>

    <p>Zusage bis zum:</p>
  </div>

  <vc-date-picker v-show='toggle' color="orange" id="date-input-2" v-model="new_event.zusagedatum" />

  <!-- <input type="date" id="date-input-2" v-model="new_event.zusagedatum"> -->

  <router-link to='/organisator/event-erstellen-03' class="button-10 space-top">Weiter</router-link>


</template>

<script>
import { new_event } from '../../events/new_event.js'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
import 'v-calendar/dist/style.css'

export default {
  methods: {
    toggle() {
    this.isActive = !this.enable;
    },
  },

  name: 'Event_Erstellen_02View',
    data(){
      return{
        new_event,
        isActive: false,
        toggle: false,
      };
  },
  components: {
      ProgressBarComponent: ProgressBarComponent
  }
}
</script>