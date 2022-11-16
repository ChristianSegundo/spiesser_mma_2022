<template>
  <ProgressBarComponent></ProgressBarComponent>
  <p>{{new_event}}</p>
  <h1>Wann findet dein Brötle-Event statt?</h1>

  <div id="time-choose">
    <input type="time" min="1" max="24" value="13:30" v-model="new_event.startzeit.stunde">
  </div>
  <input type="date" id="date-input">

  <div>Kalenderplatzhalter</div>

  <div id="zusage-toggle">
    <label class="content">
      <input type="checkbox" style="display:none" id="toggle-button" />
      <div class="toggle">
        <div class="btn"></div>
      </div>
    </label>

    <p>Zusage bis zum:</p>
  </div>

  <input type="date" id="date-input-2" >

  <router-link to='/organisator/event-erstellen-03' class="button-10 space-top">Weiter</router-link>
  <NavigationComponent></NavigationComponent>


</template>

<script>
import { new_event } from '../../new_event.js'
import NavigationComponent from '@/components/NavigationComponent.vue';
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';

export default {
  methods: {
    
    
    },

    name: 'Event_Erstellen_02View',
    data(){
    return{
      new_event
    }
  },
    components: {
      NavigationComponent: NavigationComponent,
      ProgressBarComponent: ProgressBarComponent

    }
  }
</script>

