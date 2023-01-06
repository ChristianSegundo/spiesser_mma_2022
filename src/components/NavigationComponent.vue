<template>
  <div class="wrapper">
    <div class="navbar">

      <router-link to='/dashboard/dashboard-events'>

        <div class="navbar__item -blue">
          <span class="navbar__icon">
            <svg class="icon">
              <use xlink:href="#icon-home"></use>
            </svg>
          </span>
        </div>
      </router-link>


      <router-link to='/organisator/event-erstellen-01'>
        <div class="navbar__item -blue">
          <span class="navbar__icon">
            <svg class="icon">
              <use xlink:href="#icon-plus"></use>
            </svg>
          </span>
        </div>
      </router-link>

      <router-link to='/profil/profil'>
        <div class="navbar__item -blue">
          <span class="navbar__icon">
            <svg class="icon">
              <use xlink:href="#icon-user"></use>
            </svg>
          </span>
        </div>
      </router-link>
    </div>
    <svg style="display:none" xmlns="http://www.w3.org/2000/svg" hidden xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-plus" viewBox="0 0 32 32">
          <title>plus</title>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>

        </symbol>
        <symbol id="icon-user" viewBox="0 0 32 32">
          <title>user</title>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>

          <symbol id="icon-home" viewBox="0 0 32 32">
            <title>home</title>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
            </svg>
          </symbol>
        </symbol>
      </defs>
    </svg>
  </div>
</template>
  
<script>
export default {
  name: 'NavigationComponent',
  props: {
  }
}
</script>
  
<style scoped>
.wrapper {
  width: inherit;
}

.icon {
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.navbar {
  background: #fdfdfd;
  padding: 10px 10px 10px;
  box-shadow: 0px 20px 40px rgb(18 34 64 / 10%);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  position: fixed;
  bottom: 0;
  display: flex;
  box-shadow: 0px -8px 13px -2px rgb(0 0 0 / 28%);
  z-index: 999;
  justify-content: space-around;
  flex-direction: row;
  /* margin: 10px; */
  width: -webkit-fill-available;
}

.navbar__item {
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  padding: 10px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
}

.navbar__item::before,
.navbar__item:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: currentColor;
  border-radius: 50%;
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.55s cubic-bezier(0.71, 0.03, 0.23, 0.95);
}

.navbar__item::after {
  box-shadow: 0 7px 15px currentColor;
}

.navbar__item.-blue {
  color: #C93F08;
}

.navbar__item:hover::before,
.navbar__item:hover::after {
  transform: translateY(-60px) scale(1.1);
}

.navbar__item:hover::before {
  opacity: 1;
}

.navbar__item:hover::after {
  opacity: 0.4;
}

.navbar__item:hover .navbar__icon {
  transform: translateY(-62px) scale(1.1);
  color: #fff;
  transition-delay: 0.1s, 0.1s;
}

.navbar__icon {
  transition: all 0.5s cubic-bezier(0.71, 0.03, 0.23, 0.95);
  transition-delay: 0.1s;
  display: inline-block;
  position: relative;
  z-index: 2;
}
</style>
  


