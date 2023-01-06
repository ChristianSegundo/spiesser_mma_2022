<template>
  <div class="margin-auto">
    <h1 style="font-size: 90px; margin: 0;">JUHU!</h1>
    <p>Wir haben den Organisator informiert</p>

    <router-link to='/gast/einladung-01' class="button-10 space-top">Zurück zur Übersicht</router-link>
    <button class="button-10 space-top space-bottom invert-button">Zum Kalender hinzufügen</button>
    <span style="padding: 50px 0 20px; width: 300px;"><hr></span>
    <button class="button-10 space-top  invert-button">Eventdetails teilen</button>
  </div>


</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'
import 'v-calendar/dist/style.css'


export default {
  name: 'Zusage_TeilenView',
  components: {
    FirstComponent
  }
}
</script>

