<template>

  <div class="header-items-2">
    <router-link to='/profil/profil' class="goback-arrow">
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </router-link>
  </div>

  <div>
    <h1>Profil bearbeiten</h1>

    <div class="profil-bearbeiten-inputs">
      <input type="text" id="organisatorvorname" name="organisatorvorname" value="Brenda"><br>
      <input type="text" id="organisatornachname" name="organisatornachname" value="Sieber"><br>
      <input type="email" id="organisatoremail" name="organisatoremail" value="brenda.sieber@stud.fhgr.ch"><br>
    </div>
    <span style="padding: 50px 0 20px; width: 100%;">
      <hr>
    </span>
    <div class="profil-bearbeiten-inputs">
      <input type="password" id="organisatorpasswortbestehend" name="password" placeholder="Altes Passwort*"
        minlength="8" required><br>
      <input type="password" class="organisatorpasswortneu" name="password" placeholder="Neues Passwort*" minlength="8"
        required><br>
      <input type="password" class="organisatorpasswortneu" name="password" placeholder="Neues Passwort wiederholen*"
        minlength="8" required><br>
    </div>
    <button class="button-10 space-top  invert-button">Profil aktualisieren</button>
  </div>
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

