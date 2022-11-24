<template>
    <ProgressBarComponent></ProgressBarComponent>

  <h1>Location</h1>
  <input type="text" placeholder="Wo findet das Brötle-Event statt?" v-model="new_event.ort">
    <div>Maps-Platzhalter</div>
    <router-link to='/organisator/event-erstellen-04' class="button-10 space-top">Weiter</router-link>

</template>

<script>
<<<<<<< Updated upstream
import { new_event } from '../../events/new_event.js'
=======
import { new_event } from '../../new_event.js'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
>>>>>>> Stashed changes


export default {
  name: 'Event_Erstellen_03View', 
  components: {
<<<<<<< Updated upstream
    
  },
  data(){
  return{
    new_event
=======
    ProgressBarComponent: ProgressBarComponent

>>>>>>> Stashed changes
  }
},
}
</script>

