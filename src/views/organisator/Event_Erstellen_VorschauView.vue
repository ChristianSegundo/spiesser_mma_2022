<template>
  <div class="header-items">
    <router-link to='/organisator/event-erstellen-04' class="goback-arrow">
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </router-link>
    <ProgressBarComponent></ProgressBarComponent>
  </div>

  <!-- Debugging: -->
  <p>{{ new_event }}</p>


  <h1 v-if="new_event.eventname !== undefined">{{ new_event.eventname }}</h1>
  <h1 v-else>Eventname</h1>
  <h2>Vorschau</h2>

  <div class="preview-date">
    <p v-if="new_event.eventdatum !== undefined" id="date">{{ getDate }}</p>
    <p v-else id="date">Kein Datum definiert</p>

    <p v-if="new_event.startzeit !== undefined" id="time">{{ new_event.startzeit }}</p>
    <p v-else id="time">Keine Zeit definiert</p>
  </div>

  <MapsComponent></MapsComponent>

  <p v-if="new_event.eventbeschreibung !== undefined" class="preview-text">{{ new_event.eventbeschreibung }}</p>
  <p v-else class="preview-text">Keine Beschreibung definiert</p>
  <router-link to='/organisator/event-erstellen-einladung' class="button-10 space-top">Gäste einladen</router-link>
  <button class="button-10 space-top invert-button">Zum Kalender hinzufügen</button>

</template>

<script>
import { new_event } from '../../events/new_event.js';
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
import MapsComponent from '@/components/MapsComponent.vue';
import {SpiesserTime} from '../../events/SpiesserTime.js'

export default {
  name: 'Event_Erstellen_VorschauView',
  components: {
    ProgressBarComponent: ProgressBarComponent,
    MapsComponent: MapsComponent
  },
  data() {
    return { new_event }
  },
  computed: {
    getDate(){
        var date = new SpiesserTime(new_event.eventdatum)
        return date.fulldate;
      }
  },
  mounted() {
    var stepProgress = document.getElementById('progressStep5');
    stepProgress.classList.add('current-item');
    var stepProgressRemove = document.getElementById('progressStep1', 'progressStep2', 'progressStep3', 'progressStep4');
    stepProgressRemove.classList.remove('current-item');
  }
}
</script>

