<template>
  <h1>Eventname</h1>
  <div class="preview-date">
    <p id="date">MO 16.Juni 2020</p>
    <p id="time">13:30 Uhr</p>
  </div>

  <MapsComponent></MapsComponent>

  <p class="preview-text">Gerne lade ich euch zur Abschlussfeier meines Bachelors ein. Dieser findet in New-York statt
    und „bröötlet“ zusammen.</p>

  <div class="invite-deadline">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z" />
    </svg>
    <p>
      6. Juni 2023<br>Deadline für die Zusage
    </p>
  </div>


  <div class="invite-mitbringliste">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z" />
    </svg>

    <p>
      Mitbring-Dinge<br>
      Wird nach Zusage angezeigt
    </p>
  </div>

  <div>
    <router-link to='/gast/absage' class="button-10 space-top button-5 invert-button">Absage</router-link>
    <router-link to='/gast/zusage-00' class="button-10 space-top button-5">Zusage</router-link>
  </div>

</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'
import MapsComponent from '@/components/MapsComponent.vue';


export default {
  name: 'Einladung_01View',
  components: {
    FirstComponent,
    MapsComponent: MapsComponent
  }
}
</script>

