<template>
  <div class="relatedEntries">
    <h1 class="title">相关词条</h1>
    <div class="entries">
      <div class="wrap">
        <div class="container">
          <div
              class="item"
              v-for="(list,index) in entriesData"
              :key="index"
              :class="{visible:!list.isShow}"
          >
            <div class="inner hoverLine">
              <div class="content"
                   :data-id="index"
                   @mouseleave.stop.prevent.self="leaveTxt($event)"
                   v-for="i in 2"
                   :key="i">
              <span
                  class="txt hoverTxt select"
                  v-for="(item,index_) in list.txtList"
                  :key="index_"
              >{{ item }}</span>
              </div>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div
              class="item"
              v-for="(item,index) in entriesData"
              :class="{visible:item.isShow}"
              :key="index + 10">
            <div
                class="singleTxt hoverLine"
                ref="singleTxt"
                @mouseenter.stop.prevent.self="enterTxt($event)"
                :data-id="index"
            >
            <span
                style="pointer-events: none"
                class="txt">{{ item.txt }}</span>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "relatedEntries",
  data() {
    return {
      flags: false,
      flags1: false,
      isLeave: false,
      dom: null,
      dom1: null,
      entriesData: [
        {
          isShow: false,
          txt: '牛批k48',
          txtList: []
        },
        {
          isShow: false,
          txt: '牛批k48',
          txtList: []
        },
        {
          isShow: false,
          txt: '珈乐可爱捏 我大哥绝绝子',
          txtList: []
        },
        {
          isShow: false,
          txt: '嘉然小姐的狗',
          txtList: []
        },
        {
          isShow: false,
          txt: '玩弄Tom的坏女人',
          txtList: []
        },
        {
          isShow: false,
          txt: '蓝闪计划',
          txtList: []
        },
      ]
    }
  },
  mounted() {
    this.calc(this.entriesData)
  },
  methods: {
    calc(list) {
      const clientWidth = document.body.clientWidth
      const widthList = []
      const lengthList = []
      const marginList = []
      const cur = []
      const setData = (i) => {
        widthList.push(document.querySelectorAll('.txt')[i].clientWidth)
        lengthList.push(Math.floor(clientWidth / widthList[i]));
        if (widthList[i] - (clientWidth - widthList[i] * lengthList[i]) > 50) {
          marginList.push(parseInt(((clientWidth - widthList[i] * lengthList[i]) / (lengthList[i] - 1)).toString()))
        } else {
          marginList.push(10)
          cur.push(i)
        }
      }
      for (let i = 0; i < list.length; i++) {
        setData(i)
        for (let j = 0; j < lengthList[i]; j++) {
          list[i].txtList.push(list[i].txt)
        }
      }
      if (cur.length) {
        for (let i = 0; i < cur.length; i++) {
          list[cur[i]].txtList.push(list[cur[i]].txt)
        }
      }
    },
    //鼠标进入词条时
    enterTxt(e) {
      const tar = e.target
      //控制词条容器的层级
      this.setZIndex('enter')
      //显示当前选中的元素
      this.entriesData[Number(tar.dataset.id)].isShow = true
      //设置能否触发鼠标事件
      this.setPointerEvents('enter', tar)

    },
    //鼠标移出词条时
    leaveTxt(e) {
      const tar = e.target
      //控制词条容器的层级
      this.setZIndex('leave')
      //隐藏当前元素
      this.entriesData[Number(tar.dataset.id)].isShow = false
      //设置能否触发鼠标事件
      this.setPointerEvents('leave')
    },
    setPointerEvents(type, dom = null) {
      if (type === 'enter') {
        //设置pointerEvents除了当前选中的dom都无法触发鼠标事件
        const domList = document.querySelectorAll('.singleTxt')
        domList.forEach(item => {
          //非当前选中元素都设置为none
          if (dom) {
            if (item.dataset.id !== dom.dataset.id) {
              item.style.pointerEvents = 'none'
            } else {
              item.style.pointerEvents = 'auto'
            }
          }

        })
      }
      if (type === 'leave') {
        const domList = document.querySelectorAll('.singleTxt')
        domList.forEach(item => {
          item.style.pointerEvents = 'auto'
        })
      }
    },
    setZIndex(type) {
      const container = document.querySelectorAll('.wrap .container')
      if (type === 'enter') {
        container[0].style.zIndex = '99'
        container[1].style.zIndex = '0'
      }
      if (type === 'leave') {
        container[0].style.zIndex = '0'
        container[1].style.zIndex = '99'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.relatedEntries {
  width: 100%;
  height: 1080px;
  background: url("../../assets/images/bg/relatedEntriesBg.png") no-repeat;
  background-size: cover;
  box-sizing: border-box;

  .title {
    position: relative;
    font-size: 48px;
    color: #ffffff;
    text-align: center;
    padding-top: 100px;
    font-weight: bold;

    &::after {
      content: "history";
      text-transform: uppercase;
      position: absolute;
      bottom: -48px;
      left: 50%;
      transform: translateX(-50%);
      font-size: initial;
    }
  }

  .entries {
    margin-top: 135px;

    .wrap {
      width: 100vw;
      height: 100vh;
      position: relative;

      .container {
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        overflow: hidden;

        .visible {
          visibility: hidden;
        }

        .item {
          height: 68px;
          margin-bottom: 59px;
          line-height: 68px;

          .line {
            display: inline-block;
            width: 1297px;
            height: 1.5px;
            background: #ffffff;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            transition: all 0.6s;
          }

          .hoverLine {
            height: 68px;
            cursor: pointer;
            box-sizing: border-box;
            transition: opacity 0.3s;

            &:hover .line {
              width: 100vw;
            }

            .txt {
              display: inline-block;
              font-size: 72px;
              font-weight: bold;
              white-space: nowrap;
              //margin-right: 10px;
              color: rgba(255, 255, 255, 0);
              text-stroke: 2px #ffffff;
              -webkit-text-stroke: 2px #ffffff;
            }
          }

          .singleTxt {
            width: 1297px;
            margin: 0 auto 60px auto;
            position: relative;
            opacity: 0.5;
            animation: opacity 1s linear;
          }

          .inner {
            position: relative;
            width: 100%;
            display: flex;
            animation: opacity1 1s linear;

            .content {
              width: 100%;
              display: flex;
              justify-content: space-between;
              flex-shrink: 0;
              margin-right: 10px;
              animation: slide 4s linear infinite;
            }

            .hoverTxt {
              color: #fff;
              text-stroke: unset;
              -webkit-text-stroke: unset;
            }

            @keyframes slide {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-100%);
              }
            }
          }

          @keyframes opacity {
            from {
              opacity: 0;
            }
            to {
              opacity: 0.5;
            }
          }
          @keyframes opacity1 {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }

      }
    }
  }
}
</style>
