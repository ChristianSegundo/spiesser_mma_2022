<template>
  <h1>Deine Brötle-Events</h1>
  <!-- <div id="tabpanel">
    <ul role="tablist" id="tablist">
      <li id="tab-liste" role="tab" aria-controls="panel-1" aria-selected="true">Liste</li>
      <li id="tab-kalender" role="tab" aria-controls="panel-2" aria-selected="false">Kalender</li>
    </ul>
  </div> -->




  <div class="tabs">
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" checked>
  <label for="tab1" class="tabs__label">Liste</label>
  <div class="tabs__content">
    <div id="liste-events" role="tabpanel" aria-labelledby="link1">


<ul class="dashboard-event-wrapper">

  <li v-for="event in get_sorted_events" class="dashboard-event-outer" @click="linkto(event.id)">
    <div class="dashboard-event-inner">
      <div class="dashboard-event-inner-date">
      <p>{{ event.eventdatum }}</p>
    </div>
      <div class="dashboard-event-inner-name">
        <p class="dashboard-eventname">{{ event.eventname }}</p>
        <p class="dashboard-event">{{ event.startzeit }} Uhr</p>
      </div>

    </div>
  </li>


</ul>


</div>
  </div>
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab2">
  <label for="tab2" class="tabs__label">Kalender</label>
  <div class="tabs__content">
    <div id="kalender-events" role="tabpanel" aria-labelledby="link2" >
      <!-- wenn Tab "Kalender" aktiviert, wird Inhalt angezeigt -->
      <h3>Kalender</h3>
      <p> (( Einbindung Kalender )) </p>
    </div>
  </div>
</div>


  
</template>

<style>


.tabs {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  font-family: sans-serif;

  align-items: stretch;
  justify-content: center;
}

.tabs__label {
  padding: 10px 16px;
  cursor: pointer;
}

.tabs__radio {
  display: none;
}

.tabs__content {
  order: 1;
  width: 300px;
  display: none;
}

.tabs__radio:checked + .tabs__label {
  font-weight: bold;
  color: black;
  border-bottom: 2px solid black;
}

.tabs__radio:checked + .tabs__label + .tabs__content {
  display: initial;
}

</style>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Dashboard_EventsView',
  components: {
    FirstComponent
  },
  methods:{
    linkto(ID){
      this.$router.push("/dashboard/event-details/" + ID)
    }
  },
  computed:{
    alle_events() {
      return this.$store.getters.get_alle_events
    },
    anzahl() {
      return this.$store.getters.get_anzahl_events
    },
    get_sorted_events() {
      return this.$store.getters.get_sorted_events
    },
  }
}
</script>

