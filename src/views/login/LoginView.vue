<template>
  <h1>LoginView - Spiesser</h1>
  <router-link to='/login'>Login</router-link>
  <router-link to='/login/registrieren'>Registrieren</router-link>
  <input type="text" placeholder="Name*" required>
  <input type="email" placeholder="E-Mail*" required>
  <router-link to='/login/passwort-vergessen'>Passwort vergessen</router-link>
  
  <a href="/">
      <button>Einloggen</button>
  </a>

</template>

<script>

export default {
  name: 'LoginView',
  components: {
  }
}
</script>

