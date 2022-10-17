<template>
  <FirstComponent></FirstComponent>
  <h1>HomeView - Spiesser</h1>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'HomeView',
  components: {
    FirstComponent
  }
}
</script>

