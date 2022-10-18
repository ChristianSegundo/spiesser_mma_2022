import { createRouter, createWebHistory } from 'vue-router'
import StartseiteView from '../views/StartseiteView.vue'

// IMPORT ORGANISATOR VIEWS (views/organisator):
import Event_Erstellen_01View from '../views/organisator/Event_Erstellen_01View.vue'
import Event_Erstellen_02View from '../views/organisator/Event_Erstellen_02View.vue'
import Event_Erstellen_03View from '../views/organisator/Event_Erstellen_03View.vue'
import Event_Erstellen_04View from '../views/organisator/Event_Erstellen_04View.vue'
import Event_Erstellen_EinladungView from '../views/organisator/Event_Erstellen_EinladungView.vue'
import Event_Erstellen_VorschauView from '../views/organisator/Event_Erstellen_VorschauView.vue'

// IMPORT LOGIN VIEWS (views/login):
import Email_BestaetigenView from '../views/login/Email_BestaetigenView.vue'
import LoginView from '../views/login/LoginView.vue'
import Passwort_VergessenView from '../views/login/Passwort_VergessenView.vue'
import RegistrierenView from '../views/login/RegistrierenView.vue'


const routes = [
  // STANDARD VIEWS
  {
    path: '/',
    name: 'StartseiteView',
    component: StartseiteView
  },
  // END STANDARD VIEWS
  // START LOGIN VIEWS (views/login)
  {
    path: '/login/email-bestaetigen',
    name: 'Email_BestaetigenView',
    component: Email_BestaetigenView
  },
  {
    path: '/login/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/login/passwort-vergessen',
    name: 'Passwort_VergessenView',
    component: Passwort_VergessenView
  },
  {
    path: '/login/registrieren',
    name: 'RegistrierenView',
    component: RegistrierenView
  },
  //   // END LOGIN VIEWS (views/login)
  //   // START ORGANISATOR VIEWS (views/organisator)
    {
      path: '/organisator/event-erstellen-01',
      name: 'Event_Erstellen_01View',
      component: Event_Erstellen_01View
    },
    {
      path: '/organisator/event-erstellen-02',
      name: 'Event_Erstellen_02View',
      component: Event_Erstellen_02View
    },
    {
      path: '/organisator/event-erstellen-03',
      name: 'Event_Erstellen_03View',
      component: Event_Erstellen_03View
    },
    {
      path: '/organisator/event-erstellen-04',
      name: 'Event_Erstellen_04View',
      component: Event_Erstellen_04View
    },
    {
      path: '/organisator/event-erstellen-einladung',
      name: 'Event_Erstellen_EinladungView',
      component: Event_Erstellen_EinladungView
    },
    {
      path: '/organisator/event_erstellen_vorschau',
      name: 'Event_Erstellen_VorschauView',
      component: Event_Erstellen_VorschauView
    }
  //   // END ORGANISATOR VIEWS (views/organisator)
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
