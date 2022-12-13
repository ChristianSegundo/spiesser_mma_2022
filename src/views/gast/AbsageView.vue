<template>
  <h1 style="font-size: 40px;">Schade!</h1>
  <p>Auf ein anderes Mal</p>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'AbsageView',
  components: {
    FirstComponent
  }
}
</script>

<style scoped>
#app {
    justify-content: center !important;
}
</style>

