<template>
  <div class="backgroundStory">
    <div class="title">
      背景故事
    </div>
<!--    <div class="carousel">-->
<!--        <img-->
<!--            class="standard-img"-->
<!--            :class="{'position1':item.isShow}"-->
<!--            v-show="item.isShow"-->
<!--            v-for="item in imgList.standard"-->
<!--            :src="item.url"-->
<!--            :key="item.id"-->
<!--            alt="">-->
<!--        <img-->
<!--            class="small-img"-->
<!--            v-show="item.isShow"-->
<!--            v-for="item in imgList.small"-->
<!--            :src="item.url"-->
<!--            :key="item.id" alt="">-->
<!--    </div>-->
    <div class="thumb-example">
      <!-- swiper1 -->
      <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
        <swiper-slide v-for="item in imgList.standard" :key="item.id">
          <img class="standard-img" :src="item.url" alt="">
        </swiper-slide>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
        <swiper-slide v-for="item in imgList.small" :key="item.id">
          <img class="small-img" :src="item.url" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <p class="des">
      A-SOUL是字节跳动 [7] 旗下、乐华娱乐年度最新企划中打造的虚拟偶像女团，成员由向晚（Ava）、贝拉（Bella）
      、珈乐（Carol）、嘉然（Diana）、乃琳（Eileen）五人组成，
      于2020年11月以“乐华娱乐首个虚拟偶像团体”名义出道。 [1]
      2020年12月2日，发行团体第一张单曲《Quiet》 [6] ；12月11日，
      进行了团体第一场线上直播。2021年4月30日，发布第二张单曲《超级敏感》
      ，正式开启第二张单曲的宣传活动 [5] 。2021年10月15日，参加《抖音美好奇妙夜》。
    </p>
  </div>
</template>

<script>
export default {
  name: "backgroundStory",
  data() {
    return {
      imgList: {
        standard: {
          ava: {
            url: require("../../assets/images/illustration/standard/ava.png"),
            isShow: false,
            id:1
          },
          bella: {
            url: require("../../assets/images/illustration/standard/bella.png"),
            isShow: false,
            id:2
          },
          carol: {
            url: require("../../assets/images/illustration/standard/carol.png"),
            isShow: false,
            id:3
          },
          diana: {
            url: require("../../assets/images/illustration/standard/diana.png"),
            isShow: true,
            id:4
          },
          eileen: {
            url: require("../../assets/images/illustration/standard/eileen.png"),
            isShow: false,
            id:5
          }
        },
        small: {
          ava: {
            url: require("../../assets/images/illustration/small/ava.png"),
            isShow: true,
            id:6
          },
          bella: {
            url: require("../../assets/images/illustration/small/bella.png"),
            isShow: true,
            id:7
          },
          carol: {
            url: require("../../assets/images/illustration/small/carol.png"),
            isShow: true,
            id:8
          },
          diana: {
            url: require("../../assets/images/illustration/small/diana.png"),
            isShow: false,
            id:9
          },
          eileen: {
            url: require("../../assets/images/illustration/small/eileen.png"),
            isShow: true,
            id:10
          }
        }
      },
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="scss" scoped>

.backgroundStory {
  width: 100%;
  height: 1080px;
  background: url("../../assets/images/bg/bgStory.png") no-repeat;
  background-size: contain;
  position: relative;

  .title {
    position: relative;
    font-size: 48px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 80px;
    font-weight: bold;

    &::after {
      content: 'memorabilia';
      text-transform: uppercase;
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: initial;
    }
  }
  .thumb-example {
    width: 1200px;
    margin: 100px auto;
    position: relative;
    .gallery-top {
      height: 450px;
    }
    .gallery-thumbs {
      .swiper-slide {
        width: 20%;
      }
    }
    .swiper-slide {
      text-align: center;
      .standard-img {
        width:525px;
        height:425px;
        object-fit: cover;
        object-position: center -40px;
      }
      .small-img {
        width: 91px;
        height: 91px;
      }
    }
  }
  .carousel {
    width: 1100px;
    margin: 100px auto;
    position: relative;
    .standard-img {
      width:525px;
      height:425px;
      object-fit: cover;
      object-position: center -30px;
    }
    .small-img {
      width: 91px;
      height: 91px;
    }
    .position1 {
      position: absolute;
      left:50%;
      top: 100px;
      transform: translateX(-50%);
    }
  }
  .des {
    position: absolute;
    left: 470px;
    right: 474px;
    bottom: 121px;
    color: #fff;
    font-size: 16px;
    word-wrap: break-word;
  }
}
</style>