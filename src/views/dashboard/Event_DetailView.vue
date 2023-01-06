<template>
  <div class="header-items-2">
    <router-link to='/dashboard/dashboard-events' class="goback-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </router-link>
  </div>
  <h1>{{ event.eventname }}</h1>

  <div class="preview-date">
    <p id="date">{{ getSpiesserDate(event.eventdatum, event.startzeit) }}</p>
    <p id="time">{{ event.startzeit }} Uhr</p>
  </div>

  <MapsComponent vorschau :latitude="event.ort.latitude" :longitude="event.ort.longitude"></MapsComponent>

  <p class="preview-text">{{ event.eventbeschreibung }}</p>

  <router-link to='/gast/zusage-teilen' class="button-10 space-top">Gäste einladen</router-link>
  <router-link to='/dashboard/event-monitoring' class="button-10 space-top space-bottom invert-button">Zum
    Monitoring</router-link>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'
import MapsComponent from '@/components/MapsComponent.vue';
import { SpiesserTime } from '../../events/SpiesserTime.js'

export default {
  name: 'Event_UebersichtView',
  components: {
    FirstComponent,
    MapsComponent, MapsComponent
  },
  data() {
    return {
      ID: this.$route.params.id
    }
  },
  methods: {
    getSpiesserDate(eventdatum, eventtime) {
      var stamp = eventdatum + "T" + eventtime;
      var date = new SpiesserTime(stamp);
      return date.fulldate;
    },
  },
  computed: {
    event() {
      return this.$store.getters.get_eventbyID(this.ID)
    }
  }
}
</script>

