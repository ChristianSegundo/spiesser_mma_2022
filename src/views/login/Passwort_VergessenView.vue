<!-- <template>
  <router-link to='/login'>Login</router-link>
  <router-link to='/login/registrieren'>Registrieren</router-link>
  <h3>Passwort vergessen</h3>
  <input type="email">
</template> -->

<template>
  <div id="logo-header">
    <img src="../../assets/img/Logo_Negativ_1.png" alt="Spiesser Logo">
  </div>
  <div class="tabs">
    <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" checked>
    <label for="tab1" class="tabs__label">Login</label>
    <div class="tabs__content space-top">
      <div id="liste-events" role="tabpanel" aria-labelledby="link1">

        <p>Kein Problem! Wir senden dir eine E-Mail, damit du dein Passwort zurücksetzen kannst.</p>

        <input type="email" placeholder="E-Mail*" required>
        <div><a href="/">
            <button class="button-10 space-top">Passwort zurücksetzen</button>
          </a></div>


      </div>
    </div>
    <input type="radio" class="tabs__radio" name="tabs-example" id="tab2">
    <label for="tab2" class="tabs__label">Registrieren</label>
    <div class="tabs__content space-top">
      <input type="text" placeholder="Name*" required>
      <input type="email" placeholder="E-Mail*" required>
      <input type="password" placeholder="Passwort*" required>
      <input type="password" placeholder="Passwort wiederholen*" required>
      <div class="agb-wrapper">
        <input type="checkbox" name="AGB">
        <label for="AGB">Ich habe die AGB gelesen und akzeptiert</label>
      </div>
      <router-link to='/login/email-bestaetigen' class="button-10 space-top">Registrieren</router-link>


    </div>
  </div>




</template>

<style>
.tabs {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  font-family: sans-serif;

  align-items: stretch;
  justify-content: center;
}

.tabs__label {
  padding: 10px 16px;
  cursor: pointer;
}

.tabs__radio {
  display: none;
}

.tabs__content {
  order: 1;
  display: none;
}

.tabs__radio:checked+.tabs__label {
  font-weight: bold;
  color: black;
  border-bottom: 2px solid black;
}

.tabs__radio:checked+.tabs__label+.tabs__content {
  display: initial;
}

.agb-wrapper {
  display: flex;
  width: 340px;
  justify-content: center;
}

.agb-wrapper input {

  width: 32px;
  margin: 0;
  padding: 0;
}
</style>
<script>

export default {
  name: 'Passwort_VergessenView',
  components: {

  }
}
</script>

