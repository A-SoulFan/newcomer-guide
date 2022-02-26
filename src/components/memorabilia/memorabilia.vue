<template>
  <div class="memorabilia" id="memorabilia">
    <div class="aside">
      <h1 class="aside-title">大事记</h1>
      <p class="aside-date">2022</p>
      <p>MEMORABILIA</p>
    </div>
    <div class="content-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in 7" :key="item">
          <h1 class="slide-title">28</h1>
          <span class="date">
            September/2021
          </span>
          <div class="slide-content">
            <img src="../../assets/images/memorabilia/carol.png" alt="">
            <p>
              A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
              抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "memorabilia",
  data() {
    return {
      swiperOption: {
        grabCursor:true,
        slidesPerView: 'auto',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.memorabilia {
  width: 100%;
  height: 1080px;
  background: url("../../assets/images/bg/memorabiliaBg.png") no-repeat;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  .aside {
    width: 20%;
    box-sizing: border-box;
    padding: 129px 0 0 40px;
    color: #FFFFFF;
    .aside-title {
      color: inherit;
      font-size: 48px;
    }
    .aside-date {
      margin-top: -10px;
      font-size: 72px;
    }
  }
  .content-wrap {
    width: 80%;
    height: 100%;
    .swiper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        width: 438px;
        height: 100%;
        box-sizing: border-box;
        padding: 0 48px 0 40px;
        border-left: 1px solid #fff;
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        .slide-title {
          font-size: 72px;
          margin-top: 129px;
          color: inherit;
        }
        .date {
          font-size: 18px;
          margin-bottom: 40px;
        }
        .slide-content {
          img {
            width: 350px;
            height: 200px;
            margin-bottom: 38px;
          }
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
