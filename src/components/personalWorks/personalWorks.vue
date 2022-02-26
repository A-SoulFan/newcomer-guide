<template>
  <div class="personalWorks" id="personalWorks">
    <h1 class="title">个人作品</h1>
    <div class="navbar">
      <div class="item" @click="toggleWorks($event)" v-for="(item,index) in navBarList" :key="index">
        <span class="name">{{ item.name }}</span>
        <img class="fansImg" :src="item.fansImg" :alt="item.name">
        <img class="wrap" :src="item.wrap" :alt="item.name">
      </div>
    </div>
    <div class="container">
      <swiper class="swiper" ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="item in 10" :key="item"><img src="../../assets/images/personalWorks/test.png" alt=""></swiper-slide>
      </swiper>
      <div class="swiper-button-prev swiper-btn">
        <img src="../../assets/images/personalWorks/circle.png" alt="">
      </div>
      <div class="swiper-button-next swiper-btn">
        <img src="../../assets/images/personalWorks/circle.png" alt="">
      </div>
    </div>
    <div class="workTitle">
      【A-SOUL/贝&珈&嘉】太潮啦！师徒三人演绎
      《隔岸 (DJ)》
      <div class="workDate">2021-09-08</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalWorks",
  data() {
    return {
      isClick: false,
      navBarList: [
        {
          name: '向晚',
          fansImg: require('../../assets/images/personalWorks/ava.png'),
          wrap: require('../../assets/images/personalWorks/avaWrap.png'),
        },
        {
          name: '贝拉',
          fansImg: require('../../assets/images/personalWorks/bella.png'),
          wrap: require('../../assets/images/personalWorks/bellaWrap.png'),
        },
        {
          name: '珈乐',
          fansImg: require('../../assets/images/personalWorks/carol.png'),
          wrap: require('../../assets/images/personalWorks/carolWrap.png'),
        },
        {
          name: '嘉然',
          fansImg: require('../../assets/images/personalWorks/diana.png'),
          wrap: require('../../assets/images/personalWorks/dianaWrap.png'),
        },
        {
          name: '乃琳',
          fansImg: require('../../assets/images/personalWorks/eileen.png'),
          wrap: require('../../assets/images/personalWorks/eileenWrap.png'),
        },
      ],
      swiperOption: {
        slideToClickedSlide: true,
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '3',
        coverflowEffect: {
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  methods: {
    toggleWorks(e) {
      const tar = e.target.childNodes || e.target.parentElement.childNodes
      const itemEl = document.querySelectorAll('.item')
      let dom = null
      tar.forEach(item => {
        if (item.classList.contains('wrap')) {
          dom = item
          item.style.opacity = '1'
          // item.style.transform = 'rotateY(360deg)';
        }
      })
      itemEl.forEach(el => {
        el.childNodes.forEach(item => {
          if (item.classList.contains('wrap') && item !== dom) {
            item.style.opacity = '0'
            // item.style.transform = 'unset'
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.personalWorks {
  width: 100%;
  height: 1080px;
  background: url("../../assets/images/personalWorks/bg.png") no-repeat;
  background-size: cover;
  box-sizing: border-box;
  z-index: -99;
  .title {
    font-size: 48px;
    font-weight: bold;
    color: #FFFFFF;
    position: relative;
    display: block;
    text-align: center;
    padding-top: 99px;

    &::after {
      content: 'history';
      position: absolute;
      bottom: -25px;
      left: 50%;
      transform: translateX(-50%);
      text-transform: uppercase;
      font-size: 18px;
    }
  }

  .navbar {
    width: 630px;
    margin: 100px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    $img-top: 15px, 13px, 11px, 17px, 7px;
    $img-width: 30px, 33px, 27px, 30px, 23px;
    $img-height: 19px, 26px, 27px, 19px, 32px;

    @for $i from 1 through length($img-top) {
      $top: nth($img-top, $i);
      $width: nth($img-width, $i);
      $height: nth($img-height, $i);
      .item:nth-child(#{$i}) {
        .fansImg {
          top: $top;
          width: $width;
          height: $height;
        }
      }
    }

    .item:nth-child(1) {
      .wrap {
        opacity: 1;
      }
    }

    .item {
      width: 56px;
      height: 80px;
      position: relative;
      font-size: 14px;
      z-index: 999;
      user-select: none;
      cursor: pointer;
      &:not(:last-child) {
        &::after {
          content: '';
          position: absolute;
          display: inline-block;
          width: 1px;
          height: 25px;
          top: 25px;
          right: -50px;
          background: #FFFFFF;
          opacity: 0.5;
        }
      }

      .name {
        position: absolute;
        left: 50%;
        bottom: 18px;
        display: inline-block;
        transform: translateX(-50%);
        z-index: 99;
        transition: .3s all;
        pointer-events: none;
        white-space: nowrap;
        font-size: 14px;
      }

      .wrap {
        position: absolute;
        width: 58px;
        height: 84px;
        z-index: 1;
        transition: .6s all;
        opacity: 0;
      }

      .fansImg {
        position: absolute;
        left: 50%;
        top: 13px;
        transform: translateX(-50%);
        z-index: 99;
      }

      img {
        pointer-events: none;
      }
    }
  }

  .workTitle {
    width: 624px;
    font-size: 30px;
    color: #FFFFFF;
    margin: 0 auto;

    .workDate {
      margin-top: 38px;
      font-size: 16px;
      opacity: 0.8;
    }
  }

  .container {
    width: 100%;
    height: 470px;
    padding-top: 70px;
    position: relative;
    .swiper-btn {
      width: 18px;
      height: 35px;
      top: calc(50% + 70px);
      transform: translateY(-50%);
      background: url("../../assets/images/personalWorks/arrow.png") no-repeat;
      background-size: cover;
      &::after {
        display: none;
      }
      img {
        position: absolute;
        display: inline-block;
        width: 85px;
        height: 84px;
        left: calc(-50% + (-21px));
        top: calc(-50% + (-7px));
        background: url("../../assets/images/personalWorks/circle.png") no-repeat;
        background-size: cover;
        &:hover{
          animation: circle 3s infinite linear;
        }
      }
    }

    ::v-deep .swiper-button-prev {
      left: 442px;
    }

    ::v-deep .swiper-button-next {
      right: 442px;
      transform: rotateY(180deg);
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
    position: relative;

    ::v-deep .swiper-wrapper {
      align-items: center;
      position: relative;
    }

    ::v-deep .swiper-slide {
      position: relative;
      width: 400px;
      height: 400px;
      transition: all .3s;

      img {
        width: 100%;
        height: 100%;
      }
    }

    ::v-deep .swiper-slide-active {
      &::after {
        content: '';
        position: absolute;
        top: -20px;
        right: -20px;
        bottom: -20px;
        left: -20px;
        border: 1px solid #FFFFFF;
      }

      &::before {
        content: '';
        width: 82px;
        height: 71px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: url("../../assets/images/personalWorks/play.png") no-repeat;
        background-size: cover;
        z-index: 999;
      }

    }

  }
}


@keyframes circle {
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
