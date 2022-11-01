<template>
    <ProgressBarComponent></ProgressBarComponent>
  <div>
    <input type="text" placeholder="Wie heisst dein Brötle-Event?">
  <textarea type="text" placeholder="Beschreibe dein Brötle-Event"></textarea>
</div>
  <router-link to='/organisator/event-erstellen-02' class="button-10 space-top">Weiter</router-link>
  <NavigationComponent></NavigationComponent>

</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue';
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';


export default {
  name: 'Event_Erstellen_01View',
  components: {
    NavigationComponent : NavigationComponent,
    ProgressBarComponent : ProgressBarComponent
  }
}
</script>

