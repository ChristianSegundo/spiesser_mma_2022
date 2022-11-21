<template>
  <h1>Location</h1>
  <!-- <p>{{new_event}}</p> -->
  <input type="text" placeholder="Wo findet das Brötle-Event statt?">
    <div>Maps-Platzhalter</div>
    <router-link to='/organisator/event-erstellen-04' class="button-10 space-top">Weiter</router-link>

</template>

<script>

export default {
  name: 'Event_Erstellen_03View',
    data(){
    return{
      // new_event
    }
  },

  components: {

  }
}
</script>

