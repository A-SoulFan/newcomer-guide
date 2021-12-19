<template>
  <div class="recommend">
    <h1 class="title">推荐切片</h1>
    <div class="decorate right"></div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in 10" :key="item">
        <div class="txt">
          【翻唱】《邋遢大王》——我们才不是小邋遢呢~~（直播剪辑）
        </div>
        <span class="date">
          2021-10-04
        </span>
      </swiper-slide>
    </swiper>
    <div class="decorate left"></div>
  </div>
</template>

<script>
export default {
  name: "recommendVideo",
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 10,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  height: 1080px;
  box-sizing: border-box;
  position: relative;
  .title {
    font-size: 72px;
    font-weight: bold;
    color: #000000;
    padding: 170px 0 80px 310px;
  }
  .decorate {
    width: 418px;
    height: 261px;
    background: url("../../assets/images/recommend/decorate.png") no-repeat;
    background-size: cover;
  }
  .right{
    position: absolute;
    right: 0;
    top: 40px;
  }
  .left{
    height: 144px;
  }
  .swiper {
    height: 615px;
    margin: 0 auto;
    .swiper-slide {
      width: 450px;
      height: 300px;
      position: relative;
      background: url("../../assets/images/recommend/test.png") no-repeat;
      background-size: cover;
      color: #fff;
      font-size: 16px;
      z-index: 99;
      cursor: url("../../assets/images/recommend/cursor.png"),pointer;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        transition: all .3s;
      }
      &:hover::before {
        background-color: rgba(0,0,0,0);
      }
      .txt {
        position: absolute;
        top: 188px;
        left: 20px;
        line-height: 24px;
      }
      .date {
        position: absolute;
        left: 20px;
        bottom: 20px;
      }
    }
  }
}
</style>
