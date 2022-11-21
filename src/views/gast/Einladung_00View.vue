<template>
  <div id="logo-header">
    <img src="../../assets/img/Logo_Negativ_1.png" alt="Spiesser Logo" >
  </div>
  <p class="preview-text">Du hast soeben eine Einladung von Jael Zimmermann erhalten. Informier dich jetzt über das Event.</p>
  <router-link to='/gast/Einladung_01View' class="button-10 space-top">Weiter</router-link>

  <!-- <FirstComponent></FirstComponent> -->
  <!-- <h1>Einladung_00View - Spiesser</h1> -->
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Einladung_00View',
  components: {
    FirstComponent
  }
}
</script>

