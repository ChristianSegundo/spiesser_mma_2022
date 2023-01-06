<template>
  <h1>Mitbring-Dinge</h1>
  <div>

    <h2>Deine Gäste bringen mit:</h2>


    <div class="mitbringliste">
      <ul>
        <li v-for="dingsel in mitbringseldinge">

          <div id="dingsel-titel">{{ dingsel }}</div>
          <div id="delete-dingsel" @click="remove_ding(dingsel)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg></div>
        </li>
      </ul>
    </div>
    <!-- <input type="text" class="mitbringliste-input" placeholder="2 Gascho Bier"> -->

    <div class="mitbringliste-input">
      <input type="text" class="storage" :placeholder="aktuelles_dingsel" v-model="aktuelles_dingsel">

      <button class='button' @click="push_ding()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
        </svg>
      </button>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'
import { new_event } from '../../events/new_event.js'


export default {
  name: 'Event_Mitbring_DingeView',
  components: {
    FirstComponent
  },
  data() {
    return {
      aktuelles_dingsel: "z.B. 2 Gascho Bier",
      mitbringseldinge: [],
      new_event
    }
  }, // END data
  methods: {
    push_ding() {
      this.mitbringseldinge.push(this.aktuelles_dingsel);
      new_event.mitbring_dinge = this.mitbringseldinge;
    },
    remove_ding(ding2remove) {
      this.mitbringseldinge = this.mitbringseldinge.filter(mitbringsel => mitbringsel !== ding2remove)
      new_event.mitbring_dinge = this.mitbringseldinge;
    }
  }
}
</script>

