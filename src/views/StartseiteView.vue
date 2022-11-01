<template>
  <div id="logo-header">
    <img src="../assets/img/Logo_Negativ_1.png" alt="Spiesser Logo" >
  </div>

  <div class="middle">
    <router-link to='/organisator/event-erstellen-01' class="button-10">Brötle-Event erstellen</router-link>
  </div>
  <NavigationComponent></NavigationComponent>
</template>

<script>
// @ is an alias to /src
import NavigationComponent from '@/components/NavigationComponent.vue';

export default {
  name: 'StartseiteView',
  components: {
    NavigationComponent : NavigationComponent
    }
}
</script>

