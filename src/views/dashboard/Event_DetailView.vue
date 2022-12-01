<template>
  <h1>{{event.eventname}}</h1>
  <p>Vorschau</p>

  <div class="preview-date">
    <p id="date">{{event.eventdatum}}</p>
    <p id="time">{{event.startzeit}} Uhr</p>
  </div>

  <div class="preview-map">Maps-Platzhalter</div>
  <p class="preview-text">{{event.eventbeschreibung}}</p>

  <router-link to='/gast/zusage-teilen' class="button-10 space-top">Gäste einladen</router-link>
  <router-link to='/dashboard/event-monitoring' class="button-10 space-top space-bottom invert-button">Zum Monitoring</router-link>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Event_UebersichtView',
  components: {
    FirstComponent
  },
  data(){
    return{
      ID: this.$route.params.id
    }
  },
  computed:{
    event(){
      return this.$store.getters.get_eventbyID(this.ID)
    }
  }
}
</script>

