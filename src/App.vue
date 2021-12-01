<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "app",
  created() {
    window.addEventListener('load',() => {
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
  }
</style>
