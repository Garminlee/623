<template>
  <div>
    <div class="content">
      <div class="bgi">
        <div class="container">
          <div class="title">
            <p><span>产品中心</span></p>
            <p>PRODUCT</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container pdcBox" v-if="$store.state.articleArr.articleDetails">
      <div>
        <router-link to="/index">首页</router-link> >
        <router-link to="/products">产品中心</router-link> >
        <span class="unclick">{{
          $store.state.articleArr.articleDetails.title
        }}</span>
      </div>
      <div class="pdcInfoImg clearfix">
        <img :src="$store.state.articleArr.articleDetails.img_url" alt="" />
      </div>
      <div class="weightLine"></div>
      <h2>{{ $store.state.articleArr.articleDetails.title }}</h2>
      <div v-html="$store.state.articleArr.articleDetails.content"></div>
      <div class="pdc-go-back">
        <router-link
          :to="`/productinfo/${$store.state.articleArr.lastArticle.id}`"
          class="pdcGo"
          :class="isPreClick"
          @click.native="$router.go(0)"
        >
          < 上一个：
          {{
            $store.state.articleArr.lastArticle.title || "这已经是第一篇文章了"
          }}</router-link
        >
        <router-link
          :to="`/productinfo/${$store.state.articleArr.nextArticle.id}`"
          class="fl_r pdcGo"
          :class="isNextClick"
          @click.native="$router.go(0)"
        >
          下一个：
          {{
            $store.state.articleArr.nextArticle.title ||
            "这已经是最后一篇文章了"
          }}
          ></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getArticle", {
      articleId: this.id,
      menuId: 51,
    });
  },
  computed: {
    isPreClick() {
      return !this.$store.state.articleArr.lastArticle.id
        ? { unclick: true }
        : { unclick: false };
    },
    isNextClick() {
      return !this.$store.state.articleArr.nextArticle.id
        ? { unclick: true }
        : { unclick: false };
    },
  },
};
</script>

<style>
.bgi {
  background: url(../../static/images/products.png) no-repeat center;
}
.bgi {
  text-align: center;
  height: 300px;
  position: relative;
}
.bgi .title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .bgi {
    height: 150px;
  }
}

.bgi .title p:first-of-type {
  font-size: 40px;
  margin-bottom: 8px;
}
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