import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import store from './events/ongoing_events.js'
import VCalendar from 'v-calendar'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VCalendar, {
    componentPrefix: 'vc',
});

app.mount('#app')
