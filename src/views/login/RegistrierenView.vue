<template>
  <router-link to='/login'>Login</router-link>
  <router-link to='/login/registrieren'>Registrieren</router-link>
  <input type="text" placeholder="Name*" required>
  <input type="email" placeholder="E-Mail*" required>
  <input type="password" placeholder="Passwort*" required>
  <input type="password" placeholder="Passwort wiederholen*" required>
  <input type="checkbox" name="AGB">
  <label for="AGB">Ich habe die AGB gelesen und akzeptiert</label>
  <a href="/login/email-bestaetigen">
    <button>Registrieren</button>
  </a>


</template>

<script>

export default {
  name: 'RegistrierenView',
  components: {
  }
}
</script>

