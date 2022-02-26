<template>
  <div class="experience" ref="main">
    <h1 class="title">个人经历</h1>
    <div class="dragArea" ref="area">
      <div class="slider" ref="slider">
        <img class="slide" ref="dragRef" @mousedown="dragStart($event)" :src="iconList[0]" alt="">
      </div>
    </div>
    <div class="swiper">
      <h1 class="swiperTitle">2021</h1>
      <div class="circle"></div>
      <div class="overflow">
        <div class="container" ref="swiperContainer">
          <div class="slide" v-for="(item,index) in history" :key="index">
            <div class="item">
              <div class="content">
                <h1>{{ item.date }}</h1>
                <img :src="item.img" alt="">
                <div class="des">
                  {{ item.describe }}
                </div>
              </div>
            </div>
            <div class="item">
              <div class="content">
                <h1>{{ item.children.date }}</h1>
                <div class="des">
                  {{ item.children.describe }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--提前加载图片资源,防止切换背景时闪白屏-->
    <img class="bg" v-for="item in bgList" :key="item" :src="item" alt="" style="width: 0;">
  </div>
</template>

<script>
import {calcVw} from "../../tools/tools";

export default {
  name: "personalExperience",
  data() {
    return {
      //大头图标列表
      iconList: [
        require('@/assets/images/member/ava-dt.png'),
        require('@/assets/images/member/bella-dt.png'),
        require('@/assets/images/member/carol-dt.png'),
        require('@/assets/images/member/diana-dt.png'),
        require('@/assets/images/member/eileen-dt.png'),
      ],
      //背景图片列表
      bgList: [
        require('@/assets/images/bg/ava.png'),
        require('@/assets/images/bg/bella.png'),
        require('@/assets/images/bg/carol.png'),
        require('@/assets/images/bg/diana.png'),
        require('@/assets/images/bg/eileen.png'),
      ],
      //个人经历列表
      history: [
        {
          img: require('@/assets/images/history/ava.jpg'),
          date: 'September 26',
          describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`,
          children: {
            date: 'September 26',
            describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`
          }
        },
        {
          img: require('@/assets/images/history/bella.jpg'),
          date: 'September 26',
          describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`,
          children: {
            date: 'September 26',
            describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`
          }
        },
        {
          img: require('@/assets/images/history/carol.png'),
          date: 'September 26',
          describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`,
          children: {
            date: 'September 26',
            describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`
          }
        },
        {
          img: require('@/assets/images/history/diana.jpg'),
          date: 'September 26',
          describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`,
          children: {
            date: 'September 26',
            describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`
          }
        },
        {
          img: require('@/assets/images/history/eileen.jpg'),
          date: 'September 26',
          describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`,
          children: {
            date: 'September 26',
            describe: `A-SOUL抖音小店于9月26日中午12点正式开张周边上新。
                  抖音珈乐视频更新，珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，
                  组合Vocal担当珈乐（Carol），字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。
                  珈乐（Carol）字节跳动旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。`
          }
        },
      ],
      dragData: null, //拖拽存储的数据
      movable: false, //是否开始滑动
      swiperWidth: null //swiper的宽度
    }
  },
  mounted() {
    this.createCircle()
    this.setSwiperContainerWidth()
  },
  methods: {
    //创建滑动条的小圆点
    createCircle() {
      const fragment = document.createDocumentFragment()
      const sliderWidth = this.$refs.slider.getBoundingClientRect().width / 5
      for (let i = 0; i <= this.iconList.length; i++) {
        const span = document.createElement('span')
        if (i !== 0 && i !== this.iconList.length) {
          span.style.left = calcVw(sliderWidth * i) + 'vw'
        }
        if (i === 0) {
          span.style.left = -1 + 'px'
        }
        if (i === this.iconList.length) {
          span.style.setProperty('right', '-1px')
        }
        span.className = 'circle'
        fragment.appendChild(span)
      }
      this.$refs.slider.appendChild(fragment)
    },
    dragStart(e) {
      e.stopPropagation()
      e.preventDefault()
      this.dragData = {
        left: this.$refs.slider.getBoundingClientRect().left, //滚动条距离屏幕左侧的距离
        sliderWidth: this.$refs.slider.getBoundingClientRect().width, //滚动条的宽度
        dragDomWidth: this.$refs.dragRef.getBoundingClientRect().width / 2 //滑块的宽度(除以2是以中心为准)
      }
      this.movable = true //鼠标按下绑定其他事件
      this.toggleMoving()
    },
    toggleMoving() {
      if (this.movable) {
        this.$refs.dragRef.addEventListener('mousemove', this.moveSlide.bind(this), false)
        this.$refs.dragRef.addEventListener('mouseup', this.moveEnd.bind(this), false)
        document.addEventListener('mousemove', this.moveSlide.bind(this), false)
        document.addEventListener('mouseup', this.moveEnd.bind(this), false)
      } else {
        this.$refs.dragRef.removeEventListener('mousemove', this.moveSlide)
        this.$refs.dragRef.removeEventListener('mouseup', this.moveEnd)
      }
    },
    moveSlide(event) {
      const {left, sliderWidth} = this.dragData
      const slide = document.querySelectorAll('.container .slide')
      //防止滑块越界 滑块中心位置不能大于滚动条的宽度并且小于0就赋值为0
      if (this.movable) {
        let position = null //当前鼠标位置
        if (event.clientX - left <= sliderWidth) {
          //是否小于0
          if (event.clientX - left <= 0) {
            position = 0
          } else {
            //鼠标距离屏幕左侧的距离 - 滚动条距离屏幕左侧的距离
            position = event.clientX - left
          }
          this.$refs.dragRef.style.left = position + 'px'
          //预留位置 一个半(一个有两格所以预留三格) slide 计算三格的百分比
          const headSpace = ((slide[0].getBoundingClientRect().width * 1.5 / this.swiperWidth)).toFixed(1)
          //滑动条滚动的百分比
          let scrollPercent = ((position / sliderWidth)).toFixed(3)
          //设置内容区滚动
          this.$refs.swiperContainer.style.setProperty('transform', `translate3D(-${calcVw((this.swiperWidth * scrollPercent) * (1 - headSpace))}vw,0,0)`)
          //根据当前滚动区域设置滑块图标和背景
          this.setImgAndBg(position)
        }
      }
    },
    moveEnd() {
      this.movable = false //停止滑动
      this.toggleMoving()
    },
    setImgAndBg(position) {
      const area = this.$refs.slider.getBoundingClientRect().width / 5
      const img = this.$refs.dragRef
      const main = this.$refs.main
      //根据当前位置更换大头图标 无法使用循环,每次滚动都会调用 循环每次都是新的函数
      if (position < area) {
        img.src = this.iconList[0]
        main.style.setProperty('background-image', `url(${this.bgList[0]})`)
      } else if (position < area * 2) {
        img.src = this.iconList[1]
        main.style.setProperty('background-image', `url(${this.bgList[1]})`)
      } else if (position < area * 3) {
        img.src = this.iconList[2]
        main.style.setProperty('background-image', `url(${this.bgList[2]})`)
      } else if (position < area * 4) {
        img.src = this.iconList[3]
        main.style.setProperty('background-image', `url(${this.bgList[3]})`)
      } else {
        img.src = this.iconList[4]
        main.style.setProperty('background-image', `url(${this.bgList[4]})`)
      }
    },
    //设置容器宽度
    setSwiperContainerWidth() {
      const slide = document.querySelectorAll('.container .slide')
      //将所有slide的宽度加起来
      this.swiperWidth = Array.from(slide)
          .map(item => item.getBoundingClientRect().width)
          .reduce((cur, pre) => {
            return cur + pre
          })
      //设置slide宽度
      this.$refs.swiperContainer.style.width = calcVw(this.swiperWidth) + 'vw'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "circle.css";

.experience {
  width: 100%;
  height: 1080px;
  background: url("../../assets/images/bg/ava.png") no-repeat;
  position: relative;
  background-size: cover;
  transition: all .3s;
  overflow-x: hidden;

  .title {
    position: relative;
    font-size: 48px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 20px;
    font-weight: bold;

    &::after {
      content: 'history';
      text-transform: uppercase;
      position: absolute;
      bottom: -19px;
      left: 50%;
      transform: translateX(-50%);
      font-size: initial;
    }
  }

  .dragArea {
    $slider-width: 514px;
    width: $slider-width;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    .slider {
      width: $slider-width;
      height: 10px;
      background: linear-gradient(90deg, #9AC8E2, #DB7D74, #B8A6D9, #E799B0, #7086C4);
      border: 1px solid #FFFFFF;
      border-radius: 5px;
      position: relative;

      .slide {
        width: 54px;
        height: 54px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        cursor: pointer;
      }
    }
  }

  .swiper {
    width: 100%;
    margin: 50px 0 0 310px;
    position: relative;
    display: flex;

    &::after {
      content: '';
      position: absolute;
      left: -257px;
      top: 0;
      width: 100%;
      height: 2px;
      background: #FFFFFF;
      z-index: 10;
    }

    .swiperTitle {
      position: absolute;
      top: -65px;
      left: -257px;
      font-size: 48px;
      color: #FFFFFF;
      line-height: 36px;
    }

    .circle {
      position: absolute;
      top: 0;
      left: -257px;
      width: 26px;
      height: 26px;
      transform: translate(-50%, -50%);
      background: #FFFFFF;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
      border-radius: 50%;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        background: #FFFFFF;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
        border-radius: 50%;
      }
    }

    .overflow {
      width: auto;
      overflow: hidden;

      .container {
        display: flex;

        .slide {
          display: flex;

          .item {
            width: 480px;
            position: relative;
            padding: 100px 40px 30px 40px;
            box-sizing: border-box;

            &::before {
              content: '';
              width: 2px;
              height: 430px;
              background: #FFFFFF;
              position: absolute;
              top: 0;
            }

            &::before {
              left: 0;
            }

            .content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              color: #fff;
              margin: 0 auto;

              h1 {
                font-size: 18px;
                margin-bottom: 20px;
                align-self: start;
                color: #fff;
              }

              img {
                width: 400px;
                height: 280px;
                margin-bottom: 18px;
              }

              .des {
                width: 100%;
                font-size: 16px;
                text-align: left;
                line-height: 30px;
              }
            }

          }
        }
      }
    }
  }
}
</style>

