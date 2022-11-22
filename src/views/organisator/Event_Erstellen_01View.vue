<template>
    <ProgressBarComponent></ProgressBarComponent>
  <div>
    <h1>{{new_event.eventname}}</h1>

    <input type="text" placeholder="Wie heisst dein Brötle-Event?" v-model="new_event.eventname">
    <textarea type="text" placeholder="Beschreibe dein Brötle-Event" v-model="new_event.eventbeschreibung"></textarea>
</div>
  <router-link to='/organisator/event-erstellen-02' class="button-10 space-top">Weiter</router-link>

</template>

<script>
import { new_event } from '../../new_event.js'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';


export default {
  name: 'Event_Erstellen_01View',
  components: {
    ProgressBarComponent : ProgressBarComponent
  },
  data() {
    return {
      new_event,
    }
  },
}
</script>

