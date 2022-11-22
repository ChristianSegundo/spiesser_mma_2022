<template>
  <h1>Profil_Angaben_AendernView - Spiesser</h1>
  <h2>Profil bearbeiten</h2>
  <input type="text" id="organisatorvorname" name="organisatorvorname" placeholder="Brenda"><br>
  <input type="text" id="organisatornachname" name="organisatornachname" placeholder="Sieber"><br>
  <input type="email" id="organisatoremail" name="organisatoremail" placeholder="brenda.sieber@stud.fhgr.ch"><br>
  <p> ------------------ </p>
  <input type="password" id="organisatorpasswortbestehend" name="password" placeholder="Altes Passwort*" minlength="8" required><br>
  <input type="password" class="organisatorpasswortneu" name="password" placeholder="Neues Passwort*" minlength="8" required><br>
  <input type="password" class="organisatorpasswortneu" name="password" placeholder="Neues Passwort wiederholen*" minlength="8" required><br>
  <a href="/profil/profil">
    <button>Profil aktualisieren</button>
  </a>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Profil_Angaben_AendernView',
  components: {
    FirstComponent
  }
}
</script>

