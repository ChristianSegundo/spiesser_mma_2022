<template>
  <h1>Dashboard_EventsView - Spiesser</h1>
  <h2>Deine Brötle-Events</h2>
  <div id="tabpanel">
    <ul role="tablist" id="tablist">
      <li id="tab-liste" role="tab" aria-controls="panel-1" aria-selected="true">liste</li>
      <li id="tab-kalender" role="tab" aria-controls="panel-2" aria-selected="false">kalender</li>
    </ul>
  </div>
  <div id="tabcontent">
    <div id="liste-events" role="tabpanel" aria-labelledby="link1" aria-hidden="false">
      <table>
        <tr>
          <td>
            MO<br>
            16.06.
          </td>
          <td>
            Eventname<br>
            13:30 Uhr
          </td>
        </tr>
        <tr>
          <td>
            FR<br>
            20.06.
          </td>
          <td>
            Eventname<br>
            18:00 Uhr
          </td>
        </tr>
        <tr>
          <td>
            SA<br>
            21.06.
          </td>
          <td>
            Eventname<br>
            21:15 Uhr
          </td>
        </tr>
      </table>
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
  }
}
</script>

