<template>
  <div class="team">
    <div class="box">
      <div class="title">{{ text }}</div>
      <asheader />
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide>
          <navbar />
        </swiper-slide>
        <swiper-slide>
          <persona />
        </swiper-slide>
        <swiper-slide>
          <recommendVideo />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import asheader from "../components/header/header"
import navbar from "../components/navbar/navbar"
import persona from "../components/persona/persona"
import relatedEntries from '../components/relatedEntries/relatedEntries'
import personalWorks from "../components/personalWorks/personalWorks"
import recommendVideo from "../components/recommendVideo/recommendVideo"
const fortest = 0
export default {

  name: 'team',
  components: {
    asheader,
    navbar,
    persona,
    recommendVideo
  },
  data () {
    const vue = this
    return {
      text: 'A-SOUL时代，沸腾期待！',
      swiperOption: {
        // effect: 'cube',
        mousewheel: true,
        // loop: true,
        width: window.innerWidth,
        on: {
          slideChange: function () {
            // console.log(this.realIndex)
            vue.changeSlide(this.realIndex)
          }
        }
      }
    }
  },
  methods: {
    changeSlide (index) {
      // console.log(index)
      // this.text = index
      if (index == 0)
        this.text = '团队简介'
      else if (index == 1)
        this.text = '成员介绍'
      else
        this.text = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  margin-top: 5vh;
  width: 100%;
  color: #fff;
  position: fixed;
  font-size: 5vh;
  z-index: 22;
  text-align: center;
}
</style>

