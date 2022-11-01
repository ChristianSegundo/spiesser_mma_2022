<template>
  <h1>ProfilView - Spiesser</h1>
  <h2>Dein Profil</h2>
  <p>Brenda</p>
  <p>Sieber</p>
  <email>brenda.sieber@stud.fhgr.ch</email><br>
  <a href="/profil/profil-angaben-aendern">
    <button>Profil bearbeiten</button>
  </a>
  <p>Deine Organisator-Statistik:</p>
  <table>
    <tr>
      <td>
        4<br>
        Events
      </td>
      <td>
        3<br>
        Locations
      </td>
    </tr>
    <tr>
      <td>
        107<br>
        Mitbring-Dinge
      </td>
    </tr>
  </table>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'ProfilView',
  components: {
    FirstComponent
  }
}
</script>

