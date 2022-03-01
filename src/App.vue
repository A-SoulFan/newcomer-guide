<template>
  <div id="app">
    <img className="logo" src="./assets/images/logo.png" alt="">
    <sideBar/>
    <router-view/>
  </div>
</template>
<script>
import sideBar from "./components/sidebar/sideBar";

export default {
  name: "app",
  components: {
    sideBar
  },
  created() {
    window.addEventListener('DOMContentLoaded', () => {
      const width = document.documentElement.clientWidth || document.body.offsetWidth || window.innerWidth || window.outerWidth
      if (width <= 768) {
        window.location.replace('https://mguide.asoulfan.com/')
      }
    })
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: auto;

  .logo {
    width: 89px;
    height: 33px;
    position: fixed;
    top: 40px;
    right: 40px;
    z-index: 99999;
  }
}
</style>
