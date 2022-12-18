<template>
  <!-- Zeigt aktuelle Componente an: -->
  <router-view />
  <NavigationComponent></NavigationComponent>


</template>


<script>
// @ is an alias to /src
import NavigationComponent from '@/components/NavigationComponent.vue';

export default {
  components: {
    NavigationComponent: NavigationComponent
  }
}
</script>



<style lang="scss">

</style>
