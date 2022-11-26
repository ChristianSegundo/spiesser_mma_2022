<template>
  <h1>Event_UebersichtView - Spiesser</h1>
  <h2>{{event.eventname}}</h2>
  <p>Vorschau</p>
  <p>{{event.eventdatum}}</p>
  <p>{{event.startzeit}}</p>
  <p> -- Google Maps Einbindung -- </p>
  <p>{{event.eventbeschreibung}}</p>
  <a href="/gast/zusage-teilen">
    <button>Gäste einladen</button>
  </a><br>
  <a href="/dashboard/event-monitoring">
    <button>Zum Monitoring</button>
  </a>
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

