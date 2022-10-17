<template>
  <FirstComponent></FirstComponent>
  <h1>LoginView - Spiesser</h1>
  <router-link to="/">Passwort vergessen</router-link>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'LoginView',
  components: {
    FirstComponent
  }
}
</script>

