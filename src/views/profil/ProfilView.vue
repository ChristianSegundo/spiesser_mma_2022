<template>
  <h1>Hallo Brenda👋🏼 ! </h1>
  <div class="profile-wrapper">
    <input id="profilvorname" type="text" value="Brenda">
  <input id="profilnachname" type="text" value="Sieber">
  <input id="profilmail" type="text" value="brenda.sieber@stud.fhgr.ch">
  <router-link to='/profil/profil-angaben-aendern' class="button-10 space-top">Profil bearbeiten</router-link>

  </div>


  <p>Deine Organisator-Statistik:</p>

  <table>
    <tr class="tableeventswrapper">
      <td class="tableeventshalf">
        4<br>
        Events
      </td>
      <td class="tableeventshalf">
        3<br>
        Locations
      </td>
    </tr>
  </table>

  <table>
    <tr class="tableeventswrapper">
      <td class="tableeventsfull" style="width: 340px;">
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
.tableeventswrapper {
  width: 340px;
    display: flex;
    flex-direction: row;
    gap: 20px;
}
td.tableeventshalf {
    background: white;
    width: 50%;
    border-radius: 15px;
    padding: 25px;
    font-family: bahnschrift;
    font-size: 16px;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);

}
td.tableeventshalf::first-line {
    background: white;
    width: 50%;
    border-radius: 15px;
    padding: 25px;
    font-family: bahnschrift;
    font-size: 30px;
    font-weight: bold;
}
.tableeventsfull{
    background: white;
    border-radius: 15px;
    padding: 25px;
    font-family: bahnschrift;
    font-size: 16px;
    width: 100%;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);

}
.tableeventsfull::first-line{
    font-size: 30px;

}
</style>

