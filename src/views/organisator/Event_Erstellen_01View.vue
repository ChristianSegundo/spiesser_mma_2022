<template>
    <ProgressBarComponent></ProgressBarComponent>
  <div>
    <p>{{new_event}}</p>

    <input type="text" v-model="new_event.eventname" placeholder="Wie heisst dein Brötle-Event?">
    <textarea type="text" placeholder="Beschreibe dein Brötle-Event" v-model="new_event.eventbeschreibung"></textarea>
</div>
  <router-link to='/organisator/event-erstellen-02' class="button-10 space-top">Weiter</router-link>
  <NavigationComponent></NavigationComponent>

</template>

<script>
import { new_event } from '../../new_event.js'
import NavigationComponent from '@/components/NavigationComponent.vue';
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';


export default {
  name: 'Event_Erstellen_01View',
  components: {
    NavigationComponent : NavigationComponent,
    ProgressBarComponent : ProgressBarComponent
  },
  data() {
    return {
      new_event,
    }
  },
}
</script>

