<template>
  <h1>Mitbring-Dinge</h1>
  <p>Dein*e Gastgeber*in braucht folgende Dinge:</p>


  <div class="mitbringliste">
    <ul>
      <div class="mitbring-ding">
        <input type="checkbox" name="mitbring-ding-holz">
        <li>Holz</li>
      </div>

      <div class="mitbring-ding">
        <input type="checkbox" name="mitbring-ding-holz">
        <li>Hörnisalat</li>
      </div>

      <div class="mitbring-ding zugeteilt">
        <input type="checkbox" name="mitbring-ding-holz" checked>
        <li>2 Gascho Bier"</li>
      </div>
    </ul>
  </div>
  <!-- <input type="text" class="mitbringliste-input" placeholder="2 Gascho Bier"> -->

  <p style="margin-top:80px;">Etwas fehlt? Bringe es mit!</p>


  <div class="mitbringliste-input" style="margin-top: 0;">
    <input type="text" class="storage" placeholder="eintippen...">
    <button class='button'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
      </svg>
    </button>
  </div>

  <router-link to='/gast/zusage-teilnehmer' class="button-10 space-top">Zusage</router-link>

</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Zusage_Mitbring_Dinge_01View',
  components: {
    FirstComponent
  }
}
</script>

