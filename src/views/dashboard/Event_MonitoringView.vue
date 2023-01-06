<template>
  <h1>Monitoring</h1>
  <div class="piechart"></div>
  <div class="legende-piechart">
    <p>Zusage</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
    </svg>
    <p>Absage</p>
    <svg style="fill:white;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
    </svg>
  </div>
  <div class="teilnahmen-wrapper">
    <h2><b>Teilnahmen</b></h2>
    <ul>
      <li>Regula</li>
      <li>Sandro</li>
      <li>Reto</li>
    </ul>
  </div>
  <span style="padding: 0px 0 20px; width: 80%;">
    <hr>
  </span>
  <router-link to='/dashboard/event-mitbring-dinge' class="button-10">Mitbring-Dinge ansehen</router-link>

</template>

<style scoped>
.piechart {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: conic-gradient(white 40deg,
      black 0);
  border: 2px solid black;
}

.legende-piechart svg {
  width: 24px;
  margin: 0 10px;
}

.legende-piechart {
  padding: 20px 0;
  display: flex;
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

