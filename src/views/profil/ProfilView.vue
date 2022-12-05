<template>
  <h1>Hallo "name"👋🏼 ! </h1>
  <input id="profilvorname" type="text" value="Brenda">
  <input id="profilnachname" type="text" value="Sieber">
  <input id="profilmail" type="text" value="brenda.sieber@stud.fhgr.ch">

  <router-link to='/profil/profil-angaben-aendern' class="button-10">Profil bearbeiten</router-link>

  <p>Deine Organisator-Statistik:</p>

  <table class="tableeventswrapper">
    <tr>
      <td class="tableeventshalf">
        4<br>
        Events
      </td>
      <td class="tableeventshalf">
        3<br>
        Locations
      </td>
    </tr>
    <tr id="tableeventsfull">
      <td class="tableeventshalf" style="width: 340px;">
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

<style scoped>
table.tableeventswrapper {
    width: 340px;
    display: flex;
    flex-direction: column;
}
td.tableeventshalf {
    background: white;
    width: 50%;
    border-radius: 15px;
    padding: 25px;
    font-family: bahnschrift;
    font-size: 16px;
}
td.tableeventshalf::first-line {
    background: white;
    width: 50%;
    border-radius: 15px;
    padding: 25px;
    font-family: bahnschrift;
    font-size: 25px;
    font-weight: bold;
}
#tableeventsfull{
    width: 100% !important;
}
</style>

