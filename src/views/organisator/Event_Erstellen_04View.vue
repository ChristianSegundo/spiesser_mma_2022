<template>
  <ProgressBarComponent></ProgressBarComponent>
  <h1>Was dürfen deine Gäste mitbringen?</h1>
  <h2>Mitbring-Dinge hinzufügen</h2>

  <div class="mitbringliste">
    <ul>
      <li v-for="dingsel in mitbringseldinge">{{dingsel}}</li>
    </ul>
  </div>
  <!-- <input type="text" class="mitbringliste-input" placeholder="2 Gascho Bier"> -->

  <div class="mitbringliste-input">
    <input type="text" class="storage" :placeholder="aktuelles_dingsel" v-model="aktuelles_dingsel">

    <button class='button' @click = "push_ding()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
    </button>

  </div>


  <router-link to='/organisator/event-erstellen-vorschau' class="button-10 space-top">Einladungslink erstellen
  </router-link>

</template>

<script>
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
import { new_event } from '../../events/new_event.js'

export default {
  name: 'Event_Erstellen_04View',
  components: {
    ProgressBarComponent: ProgressBarComponent

  },
  data(){
    return{
      aktuelles_dingsel: "z.B. 2 Gascho Bier",
      mitbringseldinge: [],
      new_event
    }
  }, // END data
  methods:{
    push_ding(){
      this.mitbringseldinge.push(this.aktuelles_dingsel);
      aktuelles_dingsel = "";
      new_event.mitbring_dinge = mitbringseldinge;
    }
  }
  
}
 
  // ------ Überlegungen Mitbring-Dinge ------
  // mitbringsel:[{1},{2},{}]

  // 1 = {mitbringsel: "holz", user: "brenda"}
  // 2 = {mitbringsel: "gascho", user} --> user undefined
</script>

