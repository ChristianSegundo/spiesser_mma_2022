<template>
  <h1>Zusage_00View - Spiesser</h1>
  <h2>Wer bist du?</h2>
  <input type="text" id="gastname" name="gastname" placeholder="Name*"><br>
  <input type="email" id="gastemail" name="gastemail" placeholder="Email"><br>
  <p>Wenn du keine Mail hinterlegst, können wir dir keine Updates und Informationen zum Event senden.</p>
  <a href="/gast/zusage-mitbring-dinge-01">
    <button>weiter</button>
  </a>
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

