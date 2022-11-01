<template>
  <h1>Einladung_00View - Spiesser</h1>
  <img src="spiesser_logo.jpg" alt="Spiesser Logo">
  <p>Du hast soeben eine Einladung von Jael Zimmermann erhalten. Informiere dich jetzt über das Event.</p>
  <a href="/gast/einladung-01">
    <button>zum Event</button>
  </a>
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

