<template>
  <div class="margin-auto">
    <h1>Wer bist du?</h1>
    <input type="text" id="gastname" name="gastname" placeholder="Name*"><br>
    <input type="email" id="gastemail" name="gastemail" placeholder="Email"><br>
    <figure>Wenn du keine Mail hinterlegst, können wir dir keine Updates und Informationen zum Event senden.</figure>

    <router-link to='/gast/zusage-mitbring-dinge-01' class="button-10 space-top">Weiter</router-link>
  </div>

</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Zusage_00View',
  components: {
    FirstComponent
  }
}
</script>

