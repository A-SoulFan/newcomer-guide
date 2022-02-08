
<template>
  <div class="navbar">
    <dic class="item">
      <div class="pic">
        <img src="../../assets/images/intro/text.png" />
      </div>
    </dic>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data () {
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100vw;
  height: 1080px;
  background: url('../../assets/images/intro/bg.png') no-repeat;
  background-size: cover;
  box-sizing: border-box;
  z-index: -99;
  .item {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    .pic {
      // height: 80vh;
      // width: 100%;
      // height: 60vh;
      width: 80vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .pic img {
      width: inherit;
      height: inherit;
    }
  }
}
</style>
