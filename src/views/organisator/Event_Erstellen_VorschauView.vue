<template>
  <ProgressBarComponent></ProgressBarComponent>

<p>{{new_event}}</p>


<h1 v-if="new_event.eventname !== undefined">{{new_event.eventname}}</h1>
<h1 v-else>Eventname</h1>
<h2>Vorschau</h2>

  <div class="preview-date">
    <p v-if="new_event.eventdatum !== undefined" id="date" >{{new_event.eventdatum}}</p>
    <p v-else id="date" >Kein Datum definiert</p>
   
    <p v-if="new_event.startzeit !== undefined" id="time">{{new_event.startzeit}}</p>
    <p v-else id="time" >Keine Zeit definiert</p>
  </div>

  <MapsComponent></MapsComponent>

  <p v-if="new_event.eventbeschreibung !== undefined" class="preview-text">{{new_event.eventbeschreibung}}</p>
  <p v-else class="preview-text" >Keine Beschreibung definiert</p>
  <router-link to='/organisator/event-erstellen-einladung' class="button-10 space-top">Gäste einladen</router-link>
  <button class="button-10 space-top">Zum Kalender hinzufügen</button>

</template>

<script>
import { new_event } from '../../events/new_event.js';
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
import MapsComponent from '@/components/MapsComponent.vue';


export default {
  name: 'Event_Erstellen_VorschauView',
  components: {
    ProgressBarComponent: ProgressBarComponent,
    MapsComponent: MapsComponent
  },
  data(){
    return {new_event}
  }
}
</script>

