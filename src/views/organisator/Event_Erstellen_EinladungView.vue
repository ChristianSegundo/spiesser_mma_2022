<template>
  <ProgressBarComponent></ProgressBarComponent>
  <h1>Lade deine Gäste ein!</h1>
  <input type="text" placeholder="spiesser.ch/event-xyz33">

  <div class="event-invite-buttons">
    <button class="button-10 space-top button-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" />
      </svg></button>

    <router-link to='/gast/einladung-00' class="button-10 space-top button-5"><svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
      </svg></router-link>
  </div>

  <p>in die Zwischenablage kopiert!</p>
  <NavigationComponent></NavigationComponent>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue';
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';

export default {
  name: 'Event_Erstellen_EinladungView',
  components: {
    NavigationComponent : NavigationComponent,
    ProgressBarComponent : ProgressBarComponent
  }
}
</script>

