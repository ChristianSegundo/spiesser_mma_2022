<template>
  <!-- Eine 1. Beispiel-Komponente, welche in ein View (src/views) integriert werden kann -->
  <div class="beispielstyling">
    <h2>First Component</h2>
    <router-link to="/">Dummy-Router-Link zu HomeView.vue</router-link> |
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  props: {
  }
}
</script>

<style scoped>
.beispielstyling {
  background-color: #72addf;
}
</style>
