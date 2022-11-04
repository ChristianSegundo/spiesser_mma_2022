import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.scss'



// global variable
// App.prototype.$new_event = {
//     eventname: "lol",
//     startzeit: undefined,
//     datum: undefined,
//     zusagedatum: undefined,
//     ort: undefined,
//     mitbring_dinge: {},
//     linkcode: undefined,
// }

createApp(App).use(store).use(router).mount('#app')


