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
		margin-top: 300px;
		display: block;
		position: absolute;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background-image: conic-gradient(
			pink 70deg,
			lightblue 0 235deg,
			orange 0);
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

