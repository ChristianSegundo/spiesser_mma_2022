<template>
  <div class="margin-auto">
    <h1 style="font-size: 90px; margin: 0;">Schade!</h1>
    <p>Auf ein anderes Mal</p>
  </div>
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

