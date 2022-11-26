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

// IMPORT GAST VIEWS (views/gast):
import Einladung_00View from '../views/gast/Einladung_00View.vue'
import Einladung_01View from '../views/gast/Einladung_01View.vue'
import AbsageView from '../views/gast/AbsageView.vue'
import Zusage_00View from '../views/gast/Zusage_00View.vue'
import Zusage_ErfolgreichView from '../views/gast/Zusage_ErfolgreichView.vue'
import Zusage_Mitbring_Dinge_01View from '../views/gast/Zusage_Mitbring_Dinge_01View.vue'
import Zusage_TeilenView from '../views/gast/Zusage_TeilenView.vue'
import Zusage_TeilnehmerView from '../views/gast/Zusage_TeilnehmerView.vue'

// IMPORT DASHBOARD VIEWS (views/dashboard):
import Dashboard_EventsView from '../views/dashboard/Dashboard_EventsView.vue'
import Event_Mitbring_DingeView from '../views/dashboard/Event_Mitbring_DingeView.vue'
import Event_MonitoringView from '../views/dashboard/Event_MonitoringView.vue'
import Event_DetailView from '../views/dashboard/Event_DetailView.vue'

// IMPORT PROFIL VIEWS (views/profil):
import Profil_Angaben_AendernView from '../views/profil/Profil_Angaben_AendernView.vue'
import Profil_NoLoginView from '../views/profil/Profil_NoLoginView.vue'
import ProfilView from '../views/profil/ProfilView.vue'

const routes = [
  // STANDARD VIEWS
  {
    path: '/',
    name: 'StartseiteView',
    component: StartseiteView
  },
  //  END STANDARD VIEWS
  //  START LOGIN VIEWS (views/login)
  {
    path: '/login/email-bestaetigen',
    name: 'Email_BestaetigenView',
    component: Email_BestaetigenView
  },
  {
    path: '/login',
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
  //  END LOGIN VIEWS (views/login)
  //  START ORGANISATOR VIEWS (views/organisator)
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
      path: '/organisator/event-erstellen-vorschau',
      name: 'Event_Erstellen_VorschauView',
      component: Event_Erstellen_VorschauView
    },
  //  END ORGANISATOR VIEWS (views/organisator)
  //  START GAST VIEWS (views/gast)
    {
      path: '/gast/einladung-00',
      name: 'Einladung_00View',
      component: Einladung_00View
    },
    {
      path: '/gast/einladung-01',
      name: 'Einladung_01View',
      component: Einladung_01View
    },
    {
      path: '/gast/absage',
      name: 'AbsageView',
      component: AbsageView
    },
    {
      path: '/gast/zusage-00',
      name: 'Zusage_00View',
      component: Zusage_00View
    },
    {
      path: '/gast/zusage-erfolgreich',
      name: 'Zusage_ErfolgreichView',
      component: Zusage_ErfolgreichView
    },
    {
      path: '/gast/zusage-mitbring-dinge-01',
      name: 'Zusage_Mitbring_Dinge_01View',
      component: Zusage_Mitbring_Dinge_01View
    },
    {
      path: '/gast/zusage-teilen',
      name: 'Zusage_TeilenView',
      component: Zusage_TeilenView
    },
    {
      path: '/gast/zusage-teilnehmer',
      name: 'Zusage_TeilnehmerView',
      component: Zusage_TeilnehmerView
    },
  //  END GAST VIEWS (views/gast)
  //  START DASHBOARD VIEWS (views/dashboard)
    {
      path: '/dashboard/dashboard-events',
      name: 'Dashboard_EventsView',
      component: Dashboard_EventsView
    },
    {
      path: '/dashboard/event-mitbring-dinge',
      name: 'Event_Mitbring_DingeView',
      component: Event_Mitbring_DingeView
    },
    {
      path: '/dashboard/event-monitoring',
      name: 'Event_MonitoringView',
      component: Event_MonitoringView
    },
    {
      path: '/dashboard/event-details/:id',
      name: 'Event_DetailView',
      component: Event_DetailView
    },
  //  END DASHBOARD VIEWS (views/dashboard)
  //  START PROFIL VIEWS (views/profil)
    {
      path: '/profil/profil-angaben-aendern',
      name: 'Profil_Angaben_AendernView',
      component: Profil_Angaben_AendernView
    },
    {
      path: '/profil/profil-nologin',
      name: 'Profil_NoLoginView',
      component: Profil_NoLoginView
    },
    {
      path: '/profil/profil',
      name: 'ProfilView',
      component: ProfilView
    }
  //  END PROFIL VIEWS (views/profil)

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
