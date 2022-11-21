<template>
  <h1>JUHU!</h1>
  <p>Wir haben den Organisator informiert</p>
  
  <router-link to='/organisator/event-erstellen-einladung' class="button-10 space-top">Zurück zur Übersicht</router-link>
  <button class="button-10 space-top invert-button">Zum Kalender hinzufügen</button>
  <span style="padding: 50px 0 20px; width: 300px;"><hr></span>
  <button class="button-10 space-top invert-button">Eventdetails teilen</button>

  

</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Zusage_TeilenView',
  components: {
    FirstComponent
  }
}
</script>

