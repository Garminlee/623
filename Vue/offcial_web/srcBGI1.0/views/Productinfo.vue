<template>
  <div>
    <div class="content">
      <TitleBgi />
    </div>
    <div class="container pdcBox">
      <div>
        <router-link to="/index">首页</router-link> >
        <router-link to="/products">产品中心</router-link> >
        <span class="unclick">{{ $store.state.pdcArr[id - 1].title }}</span>
      </div>
      <div class="pdcInfoImg clearfix">
        <img :src="$store.state.pdcArr[id - 1].imgUrl" alt="" />
      </div>
      <div class="weightLine"></div>
      <h2>{{ $store.state.pdcArr[id - 1].title }}</h2>
      <ul class="pdcUl">
        <li
          v-for="(pdcParam, index) in $store.state.pdcArr[id - 1].pdcParams"
          :key="index"
        >
          {{ pdcParam }}
        </li>
      </ul>
      <div class="pdc-go-back">
        <router-link
          :to="`/productinfo/${$store.state.pdcArr[id - 1].id - 1}`"
          class="pdcGo"
          :class="isPreClick"
        >
          < 上一个： {{ preTitle }}</router-link
        >
        <!-- $store.state.pdcArr[id - 2].title -->
        <router-link
          :to="`/productinfo/${$store.state.pdcArr[id - 1].id + 1}`"
          class="fl_r pdcGo"
          :class="isNextClick"
        >
          下一个： {{ nextTitle }} ></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import TitleBgi from "../components/TitleBgi";

export default {
  props: ["id"],
  data() {
    return {};
  },
  components: {
    TitleBgi,
  },

  computed: {
    isPreClick() {
      return this.id <= 1 ? { unclick: true } : { unclick: false };
    },
    isNextClick() {
      return this.id >= this.$store.state.pdcArr.length
        ? { unclick: true }
        : { unclick: false };
    },
    preTitle() {
      return this.id <= 1
        ? this.$store.state.pdcArr[this.id - 1].title
        : this.$store.state.pdcArr[this.id - 2].title;
    },
    nextTitle() {
      return this.id >= this.$store.state.pdcArr.length
        ? this.$store.state.pdcArr[this.id - 1].title
        : this.$store.state.pdcArr[this.id].title;
    },
  },
  // mounted() {
  //   this.$store.dispatch("reqPdcsArr");
  // },
};
</script>

<style lang="">
/* 产品详情 */
.unclick {
  pointer-events: none;

  cursor: default;

  opacity: 0.6;
}
.pdcBox {
  padding: 80px 0;
}
.pdcInfoImg {
  margin-top: 50px;
}
.pdcInfoImg img {
  position: relative;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: auto;
  height: 316px;
}
.weightLine {
  position: relative;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  height: 4px;
  width: 42px;
  background-color: #5a5a5a;
}
h2 {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #404040;
  margin: 100px 0;
}
.pdcUl {
  padding-left: 16px;
}
.pdcUl li {
  list-style: disc;
  font-size: 14px;
  color: #404040;
  line-height: 5em;
}
.pdc-go-back {
  margin-top: 50px;
}
.pdcGo {
  color: #666666;
  font-size: 13px;
}
.pdcGo:hover {
  color: rgba(180, 11, 11, 0.637);
}
</style>