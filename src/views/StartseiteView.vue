<template>
  <div id="logo-header">
    <img src="../assets/img/Logo_Negativ_1.png" alt="Spiesser Logo">
  </div>

  <div class="middle">
    <router-link to='/organisator/event-erstellen-01' class="button-10 button-startseite ">
      <span>
        <svg style="fill: white; width: 20px; margin: auto 10px 0 0;" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" />
        </svg></span>
      Brötle-Event erstellen
    </router-link>

    <router-link to='/profil/profil' class="button-10 button-5 invert-button">
      <span>
        <svg style="fill: black; width: 20px; margin: auto 10px 0 0;" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </span>
      Profil
    </router-link>

    <router-link to='/dashboard/dashboard-events' class="button-10 button-5 invert-button">
      <span>
        <svg style="fill: black; width: 20px; margin: auto 10px 0 0;" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
        </svg>
      </span>
      Events
    </router-link>
  </div>




</template>

<script>

export default {
  name: 'StartseiteView',
  components: {
  }
}
</script>

<style scoped>
.button-startseite {
  width: 320px;
  margin: 10px 5px;
}

.button-10 {
  padding: 53px 40px;
  justify-content: center;
}
</style>

