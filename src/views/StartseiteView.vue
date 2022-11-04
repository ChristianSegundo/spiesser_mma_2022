<template>
  <div id="logo-header">
    <img src="../assets/img/Logo_Negativ_1.png" alt="Spiesser Logo" >
  </div>
  <h1>StartseiteView - Spiesser</h1>
  <router-link to='/organisator/event-erstellen-01'>Brötle Event</router-link><br>
  <router-link to='/gast/einladung-00'>GastView</router-link><br>
  <router-link to='/dashboard/events'>DashboardView</router-link><br>
  <router-link to='/profil/profil'>ProfilView</router-link>

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

