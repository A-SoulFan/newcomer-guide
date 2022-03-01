<template>
  <div class="teamWorks">
    <swiper
      class="swiper"
      ref="mySwiper"
      :options="swiperOption"
      @click-slide="handleClickSlide"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in showList"
        :key="index"
      >
        <div class="swiperItemBox">
          <img :data-src="item.img" class="swiper-lazy" />
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiperBottom">
      <div class="circular" @click="changeSlideToPrev">
        <img
          style="transform: rotate(180deg)"
          src="../../assets/images/teamWorks/arrow.svg"
        />
      </div>
      <div class="videoTitle">{{ title }}</div>
      <div class="circular" @click="changeSlideToNext">
        <img src="../../assets/images/teamWorks/arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script>
// @click-slide="toTargetUrl"
export default {
  name: 'teamWorks',
  data () {
    return {
      title: "【原创音乐】《超级敏感》A-SOUL全新团曲MV",
      showList: [
        {
          title: '【原创音乐】《Quiet》 A-SOUL首个单曲发表~PV付',
          view: '《Quiet》是A-SOUL的首支单曲',
          img: require('@/assets/images/teamWorks/quiet.jpg'),
          videoUrl: 'https://www.bilibili.com/video/BV1YK411V7N3',
        },
        {
          title: '【原创音乐】《超级敏感》A-SOUL全新团曲MV',
          view: 'A-SOUL的第二支团曲《超级敏感》MV正式和小伙伴们见面啦！',
          img: require('@/assets/images/teamWorks/super_sensitive.jpg'),
          videoUrl: 'https://www.bilibili.com/video/BV1vQ4y1Z7C2',
        },
        {
          title: '《传说的世界》官方MV',
          view: 'A-SOUL全新国风团曲《传说的世界》MV正式上线',
          img: require('@/assets/images/teamWorks/Legendary_world.jpg'),
          videoUrl: 'https://www.bilibili.com/video/BV19Z4y1k7P7',
        },
      ],
      swiperOption: {
        slidesPerView: 3,
        lazy: true,
        loop: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: -50,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }
      },
    }
  },
  methods: {
    handleClickSlide (index, reallyIndex) {
      // 轮播图点击
      // 不能使用 swiper-no-swiping，禁止鼠标滑动的同时会让点击没办法获取到真实索引
      window.open(this.showList[reallyIndex].videoUrl)
    },
    changeSlideToPrev () {
      this.$refs.mySwiper.$swiper.slidePrev()
      this.title = this.showList[(this.$refs.mySwiper.$swiper.snapIndex + 1) % 3].title
    },
    changeSlideToNext () {
      this.$refs.mySwiper.$swiper.slideNext()
      this.title = this.showList[(this.$refs.mySwiper.$swiper.snapIndex + 1) % 3].title
      // this.videoUrl = this.showList[(this.$refs.mySwiper.$swiper.snapIndex + 1) % 3].videoUrl
    }
  }
};
</script>

<style lang="scss" scoped>
.teamWorks {
  width: 100%;
  height: 1080px;
  box-sizing: border-box;
  position: relative;
  background-color: #000;
  .swiper {
    width: 100%;
    height: 600px;
    vertical-align: middle;
    .swiper-slide {
      width: auto;
      background-size: cover;
      color: #fff;

      .swiperItemBox {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        transition: all 0.3s;
      }
      .swiperItemBox:hover {
        transform: scale(0.85);
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .swiperBottom {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    height: calc(100vh - 605px);
    min-height: 50px;
    color: #fff;
    .videoTitle {
      margin: 0 20px;
      width: 80%;
      max-width: 40vw;
      font-size: 1.5vw;
    }
    .circular {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 1px #999 solid;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .circular:hover {
      transform: scale(1.05);
    }
  }
}
</style>
