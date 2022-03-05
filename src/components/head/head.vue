<template>
  <div class="head">
    <div class="swiper-wrapper">
      <swiper ref="mySwiper" class="swiper" :options="swiperOption">
        <swiper-slide v-for="link in imgList" :key="link">
          <img :src="link" alt="">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination">
        <div v-for="item in 3" :key="item" class="ignore-pagination-item">
          <svg class="ignore-pagination-svg">
            <circle></circle>
          </svg>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="pic">
        <img src="../../assets/images/intro/asoul.png" alt="">
      </div>
      <h1 class="title">
        A-Soul时代 <span>·</span><span>沸腾期待</span>
      </h1>
      <p>
        A-SOUL字节跳动的虚拟偶像企划，中之人（即虚拟形象扮演者）
        小姐姐们在动捕房的行为被各种传感设备捕捉，再结合软件渲染而展现出实时、3D的二次元虚拟形象来与观众互动。
        与传统意义上的虚拟主播不同的是，企划的高技术力支持偶像们带给观众沉浸式地观看与互动体验，
        同时，有着和观众同样成长经历的偶像们也能带给粉丝们更多共鸣。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "headCarousel",
  data () {
    return {
      imgList: [
          require('../../assets/images/bg/headBg.png'),
          require('../../assets/images/bg/eileen.png'),
          require('../../assets/images/bg/diana.png'),
      ],
      swiperOption: {
        effect: 'fade',
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom',
          renderCustom(swiper, current) {
            console.log(current);
            const pagination = document.querySelectorAll('.ignore-pagination-item')
            // 判断是不是激活焦点，是的话添加active类
            pagination.forEach(item => {
              if (pagination[current - 1] === item) {
                item.classList.add('active')
              } else {
                item.classList.remove('active')
              }
            })
          },
        //   renderBullet(index, className) {
        //     return `
        //     <div v-for="item in 3" :key="item" class="ignore-pagination-item">
        //       <svg class="ignore-pagination-svg">
        //         <circle></circle>
        //       </svg>
        // </div>
        //     `
        //   },
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    toggleSwiper(e,index) {
      // this.swiper.pagination.el.click()
      // console.log(this.swiper.pagination.el)
      // console.log(this.swiper,this.$refs.mySwiper);
      // console.log(this.$refs.mySwiper);
      // for(let i=0; i<this.swiper.pagination.el.length; i++){
      //   this.swiper.pagination.el[i].onmouseover=function(){
      //     this.click();
      //   };
      // }
      // console.log(e);
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  width: 100vw;
  height: 1080px;
  position: relative;
  .content {
    position: absolute;
    top: 379px;
    left: 433px;
    right: 435px;
    bottom: 381px;
    z-index: 999;
    .title {
      margin: 38px 0;
      color: #fff;
      font-size: 96px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      span {
        color: #FF8772;
        &:first-child {
          margin: 0 20px;
        }
      }
    }
    p {
      font-size: 16px;
      color: #FFFFFF;
    }
    .pic {
      //position: absolute;
      margin: 0 auto;
      width: 266px;
      height: 83px;
      //left: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .swiper-wrapper {
    position: relative;
    &:after {
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      background: rgba(0,0,0,.5);
      z-index: 9;
    }
      .swiper-slide {
        img {
          width: 100%;
          height: 100%;
        }
      }
    .swiper-pagination {
      width: 50px;
      height: 100%;
      position: absolute;
      left: unset;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .active {
        & circle {
          cx:10;
          cy:10;
          r:10;
          width: 100%;
          height: 100%;
          fill:none;
          stroke-width: 2;
          stroke: #FF8772;
          stroke-linecap: round;
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: animate 6s linear infinite;
          @keyframes animate {
            0%,100% {
              stroke-dashoffset: 40;
            }
            50% {
              stroke-dashoffset: 0;
            }
            50.1% {
              stroke-dashoffset: 80;
            }
          }
        }
      }
      .ignore-pagination-item {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #fff;
        margin-right: 10px;
        margin-bottom: 10px;
        position: relative;
        z-index: 999;
        animation: rotate 4s linear infinite;
      }
      .ignore-pagination-svg{
        position: absolute;
        left: -3px;
        top: -3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        & circle {
          fill: transparent;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
}
</style>
