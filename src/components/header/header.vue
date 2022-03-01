<template>
  <div class="header">
    <div class="icon" @click="openWeb">
      <img :src="asficon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data () {
    return {
      asficon: require("../../assets/images/intro/ASF.png")
    }
  },
  methods: {
    openWeb () {
      window.open("https://www.asoulfan.com/")
    }
  }

}
</script>

<style lang="scss" scoped>
.header {
  margin: 0;
  padding: 0;
  border: 0;
  height: 5vh;
  width: 100%;
  // background-color: black;
  position: fixed;
  z-index: 20;
  .icon {
    right: 2vw;
    position: absolute;
  }
}
</style>
