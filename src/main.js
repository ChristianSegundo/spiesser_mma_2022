import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import store from './events/ongoing_events.js'

createApp(App).use(store).use(router).mount('#app')
