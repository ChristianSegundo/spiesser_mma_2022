<template>
  <div class="header-items">
    <router-link to='/organisator/event-erstellen-01' class="goback-arrow">
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </router-link>
    <ProgressBarComponent></ProgressBarComponent>
  </div>
  <h1>Wann findet {{ new_event.eventname }} statt?</h1>

  <div id="time-choose">
    <!-- <input type="time" min="1" max="24" class="input-time" v-model="new_event.startzeit"> -->
    <input type="time" value="13:30"/>
  </div>

  <div id="kalenderanzeige">
    <vc-date-picker color="orange" id="date-input-1" v-model="new_event.eventdatum" />
    <!-- <input type="date" id="date-input-1" v-model="new_event.eventdatum"> -->
  </div>

  <div id="zusage-toggle">
    <label class="content">
      <input type="checkbox" style="display:none" />
      <div class="toggle">
        <div class="btn ui button toggle" id="toggle-button" @click="isActive = !isActive; toggle = !toggle"></div>
      </div>
    </label>

    <p>Zusage bis zum:</p>
  </div>

  <vc-date-picker v-show='toggle' color="orange" id="date-input-2" v-model="new_event.zusagedatum" />

  <!-- <input type="date" id="date-input-2" v-model="new_event.zusagedatum"> -->

  <router-link to='/organisator/event-erstellen-03' class="button-10 space-top">Weiter</router-link>


</template>

<style>
input[type=time] {
  border: none;
  color: #2a2c2d;
  font-size: 14px;
  font-family: helvetica;
  width: 200px;
}

/* Wrapper around the hour, minute, second, and am/pm fields as well as 
the up and down buttons and the 'X' button */
input[type=time]::-webkit-datetime-edit-fields-wrapper {
  display: flex;
}

/* The space between the fields - between hour and minute, the minute and 
second, second and am/pm */
input[type=time]::-webkit-datetime-edit-text {
  padding: 19px 4px;
}

/* The naming convention for the hour, minute, second, and am/pm field is
`-webkit-datetime-edit-{field}-field` */

/* Hour */
input[type=time]::-webkit-datetime-edit-hour-field {
  background-color: #f2f4f5;
  border-radius: 15%;
  padding: 19px 13px;
}

/* Minute */
input[type=time]::-webkit-datetime-edit-minute-field {
  background-color: #f2f4f5;
  border-radius: 15%;
  padding: 19px 13px;
}

/* AM/PM */
input[type=time]::-webkit-datetime-edit-ampm-field {
  background-color: #7155d3;
  border-radius: 15%;
  color: #fff;
  padding: 19px 13px;
}

/* 'X' button for resetting/clearing time */
input[type=time]::-webkit-clear-button {
  display: none;
}

/* Up/Down arrows for incrementing/decrementing the value */
input[type=time]::-webkit-inner-spin-button {
  display: none;
}

input::-webkit-date-and-time-value {
margin-top: 0px;
text-align: center;
width: 100%;
padding: 10px;
}
input::-webkit-date-and-time-value::before {
content: "hihi";
}

</style>

<script>
import { new_event } from '../../events/new_event.js'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
import 'v-calendar/dist/style.css'

export default {
  name: 'Event_Erstellen_02View',
  data() {
    return {
      new_event,
      isActive: false,
      toggle: false,
    };
  },
  methods: {
    // toggle() {
    //   this.isActive = !this.enable;
    // },
  },
  components: {
    ProgressBarComponent: ProgressBarComponent
  },
  mounted() {
    var stepProgress = document.getElementById('progressStep2');
    stepProgress.classList.add('current-item');
    var stepProgressRemove = document.getElementById('progressStep1');
    stepProgressRemove.classList.remove('current-item');
  }

}


</script>