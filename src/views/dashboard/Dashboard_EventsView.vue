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

      <ul class="dashboard-event-wrapper">

        <li v-for="event in alle_events" class="dashboard-event-outer">
          <div class="dashboard-event-inner">
            <div class="dashboard-event-inner-date">
            <p>{{ event.eventdatum }}</p>
          </div>
            <div class="dashboard-event-inner-name">
              <p>{{ event.eventname }}</p>
              <p>{{ event.startzeit }} Uhr</p>
            </div>

          </div>
        </li>


      </ul>


    </div>
    <div id="kalender-events" role="tabpanel" aria-labelledby="link2" aria-hidden="true" hidden>
      <!-- wenn Tab "Kalender" aktiviert, wird Inhalt angezeigt -->
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
  computed: {
    alle_events() {
      return this.$store.state.alle_events
    }
  }
}
</script>

