<template>
  <div class="side-bar">
    <div v-show="!isShow" class="menu" @click="showSideBar">
      <img class="menu-img" src="../../assets/images/menu.png" alt="">
    </div>
    <div class="bar" ref="bar">
      <img @click="showSideBar" class="close" src="../../assets/images/close.png" alt="">
      <a :href="item.anchor" class="bar-item" v-for="item in bar" :key="item.id">{{item.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideBar",
  data(){
    return {
      isShow:false,
      bar:[
          {title:'首页',id:0,anchor:'#top'},
          {title:'大事记',id:1,anchor:'#memorabilia'},
          {title:'人设',id:2,anchor:'#persona'},
          {title:'个人经历',id:3,anchor:'#personalExperience'},
          {title:'相关词条',id:4,anchor:'#relatedEntries'},
          {title:'个人作品',id:5,anchor:'#personalWorks'},
          {title:'推荐切片',id:6,anchor:'#recommendVideo'},
      ]
     }
  },
  mounted() {
    let timeId;
    window.addEventListener('scroll', () => {
      // 页面滚动停止100毫秒后才会执行下面的函数。
      clearTimeout(timeId);
      timeId = setTimeout(() => {
        this.scrollToTop();
        console.log('执行完了哦');
      }, 100);
    } , true);
  },
  methods: {
    showSideBar() {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.$refs.bar.classList.remove('no-active')
        this.$refs.bar.classList.add('active')
      }else {
        this.$refs.bar.classList.remove('active')
        this.$refs.bar.classList.add('no-active')
      }
    },
  }
}
</script>

<style lang="scss">
.side-bar {
  .menu {
    position: fixed;
    top: 40px;
    left: 40px;
    cursor: pointer;
    z-index: 999999;
    .menu-img {
      width: 50px;
      height: 30px;
      background-size: cover;
    }
  }
  .active {
    transform: translate3D(250px,0,0)
  }
  .no-active {
    transform: translate3D(0, 0, 0)
  }
  .bar {
    position: fixed;
    left: -250px;
    top: 0;
    width: 250px;
    height: 100vh;
    background: rgba(255, 135, 114, .8);
    z-index: 99999;
    color: #fff;
    transition: all .3s;
    .close {
      width: 34px;
      height: 34px;
      margin: 40px 0 0 40px;
      cursor: pointer;
    }
    & .bar-item:nth-child(2){
      margin-top: 80px;
    }
    .bar-item {
      display: inline-block;
      text-underline: none;
      width: 100%;
      height: 70px;
      text-align: center;
      box-sizing:border-box;
      border-bottom: 1px solid #fff;
      line-height: 70px;
      cursor: pointer;
      font-size: 30px;
      transition: all .2s;
      &:hover {
        color: #69b7e3;
      }
    }
  }
}
</style>