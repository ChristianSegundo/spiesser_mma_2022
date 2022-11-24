<template>
  <h1>Deine Brötle-Events</h1>
  <div id="tabpanel">
    <ul role="tablist" id="tablist">
      <li id="tab-liste" role="tab" aria-controls="panel-1" aria-selected="true">liste</li>
      <li id="tab-kalender" role="tab" aria-controls="panel-2" aria-selected="false">kalender</li>
    </ul>
  </div>
  <div id="tabcontent">
    <div id="liste-events" role="tabpanel" aria-labelledby="link1" aria-hidden="false">
<<<<<<< Updated upstream

<ul>

<li v-for="event in alle_events">
  <p>Event:{{event.eventname}}</p>
  <p>Zeit:{{event.startzeit}}</p>
  <p>Datum:{{event.eventdatum}}</p>
</li>


</ul>


=======
      <table>
        <tr>
          <td class="date-box-dashboard">
            MO<br>
            <span class="date-box-bold">21.06.</span>
          </td>
          <td class="name-box-dashboard">
            Eventname<br>
            13:30 Uhr
          </td>
        </tr>
        <tr>
          <td class="date-box-dashboard">
            FR<br>
            <span class="date-box-bold">21.06.</span>
          </td>
          <td class="name-box-dashboard">
            Eventname<br>
            18:00 Uhr
          </td>
        </tr>
        <tr>
          <td class="date-box-dashboard">
            SA<br>
            <span class="date-box-bold">21.06.</span>
          </td>
          <td class="name-box-dashboard">
            Eventname<br>
            21:15 Uhr
          </td>
        </tr>
      </table>
>>>>>>> Stashed changes
    </div>
    <div id="kalender-events" role="tabpanel" aria-labelledby="link2" aria-hidden="true" hidden> <!-- wenn Tab "Kalender" aktiviert, wird Inhalt angezeigt -->
    <h3>Kalender</h3>
      <p> (( Einbindung Kalender )) </p>
    </div>
  </div>
  <router-link to='/dashboard/event-uebersicht'>Event_UebersichtView</router-link>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Dashboard_EventsView',
  components: {
    FirstComponent
  },
  computed:{
    alle_events(){
      return this.$store.state.alle_events
    }
  }
  }
</script>

