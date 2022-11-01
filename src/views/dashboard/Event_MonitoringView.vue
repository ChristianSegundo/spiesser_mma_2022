<template>
  <h1>Event_MonitoringView - Spiesser</h1>
  <h2>Monitoring</h2>
  <div> (( Kreisgrafik Teilnehmer ))</div>
  <p>Teilnahmen</p>
  <p>
    Regula<br>
    Sandro<br>
    Reto
  </p>
  <p> --------------- </p>
  <router-link to='/dashboard/event-mitbring-dinge'>Mitbring-Dinge ansehen</router-link>
  
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Event_MonitoringView',
  components: {
    FirstComponent
  }
}
</script>

