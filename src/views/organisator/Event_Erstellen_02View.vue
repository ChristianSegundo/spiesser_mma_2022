<template>
  <div class="header-items">
    <router-link to='/organisator/event-erstellen-01' class="goback-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </router-link>
    <ProgressBarComponent></ProgressBarComponent>
  </div>

  <h1 v-if="new_event.eventname">Wann findet "{{ new_event.eventname }}" statt?</h1>
  <h1 v-else>Wann findet's statt?</h1>
  <h2 v-if="new_event.eventdatum != undefied">{{ getDate }}</h2>

  <div id="kalenderanzeige">
    <vc-date-picker mode='dateTime' color="orange" id="date-input-1" v-model="new_event.eventdatum" is24hr
      :model-config="modelConfig" timezone="UTC" @change="formatdata()" />
  </div>

  <div id="zusage-toggle">
    <label class="content">
      <input type="checkbox" style="display:none" />
      <div class="toggle">
        <div class="btn ui button toggle" id="toggle-button" @click="toggle_it"></div>
      </div>
    </label>
    <p>Zusage bis zum:</p>
  </div>

  <vc-date-picker v-show='toggle' color="orange" id="date-input-2" v-model="new_event.zusagedatum" />

  <router-link to='/organisator/event-erstellen-03' class="button-10 space-top">Weiter</router-link>


</template>


<script>
import { new_event } from '../../events/new_event.js'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
import 'v-calendar/dist/style.css'
import { SpiesserTime } from '../../events/SpiesserTime.js'

export default {
  name: 'Event_Erstellen_02View',
  data() {
    return {
      new_event,
      isActive: false,
      toggle: false,
      modelConfig: {
        type: "string"
      },
      // active_date : setDate()
    };
  },
  methods: {
    toggle_it() {
      // Zusage-Calendar display or not
      this.isActive = !this.isActive; this.toggle = !this.toggle
      if (this.toggle == false) {
        new_event.zusagedatum = false;
        // if switched back, also switch new_event-Object back to false
      }
    },

    formatdata() {
      var date = new SpiesserTime(new_event.eventdatum)
      new_event.startzeit = date.time;
    }

  }, // END METHODS
  computed: {
    getDate() {
      var date = new SpiesserTime(new_event.eventdatum)
      return date.fulldate;
    }
  },
  components: {
    ProgressBarComponent: ProgressBarComponent
  },
  mounted() {
    var stepProgress = document.getElementById('progressStep2');
    stepProgress.classList.add('current-item');
    var stepProgressRemove = document.getElementById('progressStep1');
    stepProgressRemove.classList.remove('current-item');
  }

}


</script>