<template>
  <ProgressBarComponent></ProgressBarComponent>

  <h1>Eventname</h1>
  <h2>Vorschau</h2>

  <div class="preview-date">
    <p id="date">MO 16.Juni 2020</p>
    <p id="time">13:30 Uhr</p>
  </div>

  <div class="preview-map">Maps-Platzhalter</div>

  <p class="preview-text">Gerne lade ich euch zur Abschlussfeier meines Bachelors ein. Dieser findet in New-York statt und „bröötlet“ zusammen.</p>

  <router-link to='/organisator/event-erstellen-einladung' class="button-10 space-top">Gäste einladen</router-link>
  <button class="button-10 space-top">Zum Kalender hinzufügen</button>


</template>

<script>
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';

export default {
  name: 'Event_Erstellen_VorschauView',
  components: {
    ProgressBarComponent: ProgressBarComponent
  }
}
</script>

