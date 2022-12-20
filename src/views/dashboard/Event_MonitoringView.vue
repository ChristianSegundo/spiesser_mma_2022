<template>
  <h1>Monitoring</h1>
	<div class="piechart"></div>

  
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

<style scoped>
	.piechart {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		background-image: conic-gradient(
			black 20deg,
			#d1d1d1 0);
	}

</style>
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

