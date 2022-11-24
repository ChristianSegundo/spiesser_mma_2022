<template>
  <h1>Dashboard_EventsView - Spiesser</h1>
  <h2>Deine Brötle-Events</h2>
  <div id="tabpanel">
    <ul role="tablist" id="tablist">
      <li id="tab-liste" role="tab" aria-controls="panel-1" aria-selected="true">liste</li>
      <li id="tab-kalender" role="tab" aria-controls="panel-2" aria-selected="false">kalender</li>
    </ul>
  </div>
  <div id="tabcontent">
    <div id="liste-events" role="tabpanel" aria-labelledby="link1" aria-hidden="false">

<ul>

<li v-for="event in alle_events">
  <p>Event:{{event.eventname}}</p> <br>
  <p>Zeit:{{event.startzeit}}</p> <br>
  <p>Datum:{{event.eventdatum}}</p> <br>
</li>


</ul>


    </div>
    <div id="kalender-events" role="tabpanel" aria-labelledby="link2" aria-hidden="true" hidden> <!-- wenn Tab "Kalender" aktiviert, wird Inhalt angezeigt -->
    <h3>Kalender</h3>
      <p> (( Einbindung Kalender )) </p>
    </div>
  </div>
  <router-link to='/dashboard/event-uebersicht'>Event_UebersichtView</router-link>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Dashboard_EventsView',
  components: {
    FirstComponent
  },
  computed:{
    alle_events(){
      return this.$store.state.alle_events
    }
  }
  }
</script>

