<template>
  
  <div>
    <h1>Profil bearbeiten</h1>
    <div class="profil-bearbeiten-inputs">
    <input type="text" id="organisatorvorname" name="organisatorvorname" value="Brenda"><br>
    <input type="text" id="organisatornachname" name="organisatornachname" value="Sieber"><br>
    <input type="email" id="organisatoremail" name="organisatoremail" value="brenda.sieber@stud.fhgr.ch"><br>
  </div>
  <span style="padding: 50px 0 20px; width: 100%;"><hr></span>
  <div class="profil-bearbeiten-inputs">
    <input type="password" id="organisatorpasswortbestehend" name="password" placeholder="Altes Passwort*" minlength="8"
    required><br>
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

