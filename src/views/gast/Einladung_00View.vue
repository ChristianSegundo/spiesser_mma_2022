<template>
  <div id="logo-header">
    <img src="../../assets/img/Logo_Negativ_1.png" alt="Spiesser Logo">
  </div>
  <p class="preview-text">Du hast soeben eine Einladung von Jael Zimmermann erhalten. Informier dich jetzt über das Event.</p>
  <router-link to='/gast/einladung-01' class="button-10 space-top">Weiter</router-link>


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

