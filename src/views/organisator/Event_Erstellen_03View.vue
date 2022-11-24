<template>
    <ProgressBarComponent></ProgressBarComponent>

  <h1>Location</h1>
  <input type="text" placeholder="Wo findet das Brötle-Event statt?" v-model="new_event.ort">
    <div>Maps-Platzhalter</div>
    <router-link to='/organisator/event-erstellen-04' class="button-10 space-top">Weiter</router-link>

</template>

<script>
import { new_event } from '../../events/new_event.js'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';


export default {
  name: 'Event_Erstellen_03View', 
  components: {
    ProgressBarComponent: ProgressBarComponent
  },
  data(){
    return{
      new_event
    }
  }
}
</script>

