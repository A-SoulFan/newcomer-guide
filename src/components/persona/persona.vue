<template>
  <div class="persona">
    <ul class="member">
      <li class="item" v-for="item in teamList" :key="item.name">
        <img :src="item.img" :alt="item.eName">
        <div class="des">
          <p>{{item.name}}</p>
          <p>{{item.eName}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "persona",
  data() {
    return {
      teamList: [
        {
          img: require('@/assets/images/member/ava.png'),
          name:'向晚',
          eName: 'AvA'
        },
        {
          img: require('@/assets/images/member/bella.png'),
          name:'贝拉',
          eName: 'Bella'
        },
        {
          img: require('@/assets/images/member/carol.png'),
          name:'珈乐',
          eName: 'Carol'
        },
        {
          img: require('@/assets/images/member/diana.png'),
          name:'嘉然',
          eName: 'Diana'
        },
        {
          img: require('@/assets/images/member/eileen.png'),
          name:'乃琳',
          eName: 'Eileen'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$bg-color:#9AC8E2,#DB7D74,#B8A6D9,#E799B0,#576690;
.persona {
  width: 100vw;
  height: 100vh;
  .member {
    width: inherit;
    height: inherit;
    display: flex;
    .item {
      width: 20%;
      height: 100%;
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 10;
        transition: all .5s;
        opacity: 1;
      }
      &:hover::after,&:hover h1,&:hover .des {
        opacity: 0;
      }
      h1{
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 48px;
        color: #fff;
        &::after {
          content: 'memorabilia';
          position: absolute;
          bottom: -19px;
          left: 50%;
          transform: translateX(-50%);
          text-transform: uppercase;
          font-size: 18px;
        }
      }
      .des {
        position: absolute;
        left: 50%;
        bottom: 160px;
        transform: translateX(-50%);
        z-index: 99;
        text-align: center;
        p {
          color: #fff;
          white-space: nowrap;
          &:nth-child(1) {
            font-size: 72px;
          }
          &:nth-child(2) {
            font-size: 48px;
          }
        }
        &::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 20px;
          z-index: -1;
        }
      }
      //@for $i from 1 through length($bg-color) {
      //  $item:nth($bg-color,$i);
      //  &:nth-of-type(#{$i}) .des::after {
      //    background: $item;
      //  }
      //}
      @each $item in $bg-color {
        $index:index($bg-color,$item);
        &:nth-of-type(#{$index}) .des::after {
          background: $item;
        }
      }
    }
  }
}
</style>
