<template>
  <h1>Eventname</h1>
  <div class="preview-date">
    <p id="date">MO 16.Juni 2020</p>
    <p id="time">13:30 Uhr</p>
  </div>

  <div class="preview-map">Maps-Platzhalter</div>

  <p class="preview-text">Gerne lade ich euch zur Abschlussfeier meines Bachelors ein. Dieser findet in New-York statt
    und „bröötlet“ zusammen.</p>

  <div class="invite-deadline">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
        d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z" />
    </svg>
    <p>
      6. Juni 2023<br>
      Deadline für die Zusage
    </p>
  </div>

  <div class="invite-mitbringliste">
    <svg xmlns="http://www.w3.org/2000/svg" width="21.676" height="27.001" viewBox="0 0 21.676 27.001">
      <g id="Your_Icons" data-name="Your Icons" transform="translate(-7.944 -4)">
        <path id="Pfad_39" data-name="Pfad 39"
          d="M28.475,13.646a7.8,7.8,0,0,0,1.107-4.01v-.3A2.639,2.639,0,0,0,26.95,6.7H22.765A3.375,3.375,0,0,0,19.457,4h-1.35A3.375,3.375,0,0,0,14.8,6.7H10.614A2.639,2.639,0,0,0,7.982,9.333v.3a7.8,7.8,0,0,0,1.107,4.01l-1.107,10.6A6.075,6.075,0,0,0,13.99,31h9.585a6.075,6.075,0,0,0,6.008-6.75ZM18.107,5.35h1.35a2.025,2.025,0,0,1,1.91,1.35H16.2a2.025,2.025,0,0,1,1.91-1.35ZM9.332,9.333A1.283,1.283,0,0,1,10.614,8.05H26.95a1.283,1.283,0,0,1,1.283,1.283v.3a6.514,6.514,0,0,1-6.514,6.514h-.911v-2.7a2.025,2.025,0,0,0-4.05,0v2.7h-.911a6.858,6.858,0,0,1-.83-.054,6.453,6.453,0,0,1-4.664-2.963h0a6.446,6.446,0,0,1-1.019-3.5ZM19.457,17.5v.675a.675.675,0,0,1-1.35,0V13.45a.668.668,0,0,1,1.154-.466.628.628,0,0,1,.2.466Zm7.634,10.584a4.725,4.725,0,0,1-3.517,1.566H13.99a4.725,4.725,0,0,1-4.725-5.225l.992-9.234c.034.041.081.074.122.115l.216.2c.155.142.317.27.479.4l.236.176q.29.2.608.385l.142.088a8.708,8.708,0,0,0,.8.378l.223.081q.317.108.628.2l.29.074c.209.047.419.088.628.115l.277.047a8.154,8.154,0,0,0,.911.054h.938v.675a2.025,2.025,0,0,0,4.05,0V17.5h.911a8.154,8.154,0,0,0,.911-.054l.277-.047a6.291,6.291,0,0,0,.621-.115l.3-.074c.209-.061.419-.128.621-.2l.23-.081a7.838,7.838,0,0,0,.8-.378l.155-.095a6.905,6.905,0,0,0,.6-.378l.236-.176c.162-.128.324-.257.473-.392l.23-.2c0-.041.081-.074.115-.115l.992,9.234a4.725,4.725,0,0,1-1.181,3.659Z"
          transform="translate(0 0)" fill="#adadad" />
        <path id="Pfad_40" data-name="Pfad 40"
          d="M25.488,28.92H15.363a2.342,2.342,0,0,0-2.322,1.937,2.066,2.066,0,0,0-.041.425V34.09a2.363,2.363,0,0,0,2.363,2.363H25.488A2.363,2.363,0,0,0,27.85,34.09V31.282a2.14,2.14,0,0,0,0-.4,2.356,2.356,0,0,0-2.363-1.964ZM15.363,30.27H25.488A1,1,0,0,1,26.44,31H14.411a.992.992,0,0,1,.952-.729ZM25.488,35.1H15.363A1.013,1.013,0,0,1,14.35,34.09V32.349H26.5V34.09A1.013,1.013,0,0,1,25.488,35.1Z"
          transform="translate(-1.643 -8.098)" fill="#adadad" />
      </g>
    </svg>

    <p>
      Mitbring-Dinge<br>
      Wird nach Zusage angezeigt
    </p>
  </div>

  <div class="event-invite-buttons">
    <router-link to='/gast/zusage-00' class="button-10 space-top button-5">Zusage</router-link>
    <router-link to='/gast/absage' class="button-10 space-top button-5 invert-button">Absage</router-link>
  </div>

</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Einladung_01View',
  components: {
    FirstComponent
  }
}
</script>

