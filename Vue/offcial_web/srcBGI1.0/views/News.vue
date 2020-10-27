<template>
  <div>
    <!-- 内容区域 开始 -->
    <div class="content">
      <div class="container newsBox">
        <div class="row">
          <div
            class="new"
            v-for="msg in $store.state.newsArr"
            :key="id"
            @click="caseBgi(4)"
          >
            <div class="row dottedLine">
              <div class="newsImg hidden-xs hidden-sm col-md-3">
                <router-link :to="`/newsinfo/${msg.id}`"
                  ><img :src="msg.imgUrl" alt=""
                /></router-link>
              </div>
              <div class="newsInfo col-md-9">
                <p class="newsname">
                  <router-link :to="`/newsinfo/${msg.id}`">{{
                    msg.title
                  }}</router-link>
                </p>
                <p class="newsctx" v-html="msg.infoText"></p>
                <p>
                  <span class="newsDate">{{ msg.date }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <PageTo />
      </div>
    </div>
    <!-- 内容区域 结束 -->
  </div>
</template>

<script>
import PageTo from "../components/pageTo";
import TitleBgi from "../components/TitleBgi";

export default {
  props: ["id"],
  // mounted() {
  //   this.$store.dispatch("reqNewsArr");
  // },
  components: {
    PageTo,
    TitleBgi,
  },
  methods: {
    caseBgi(flag) {
      this.$store.dispatch("TitleBgi", flag);
    },
  },
};
</script>

<style lang="">
/* news区域 */
.newsBox {
  margin-top: 1vw;
  padding: 2vw;
}
.new {
  background-color: #fff;
  /* text-align: center; */
  text-align: -webkit-center;
}
.newsInfo {
  text-align: left;
}
.dottedLine {
  padding: 20px 0;
  width: 95%;
  border-bottom: 1px dotted #dddddd;
}
.newsImg {
  overflow: hidden;
}
.newsImg a {
  display: inline-block;
  max-width: 260px;
  height: 180px;
  overflow: hidden;
}
.newsImg a img {
  width: auto;
  height: 180px;
  margin-left: -25px;
  transition: all 0.5s;
}
.newsImg img:hover {
  transform: scale(1.1);
}
.new .newsname a {
  font-size: 1.15em;
  color: #404040;
}
.new .newsname a:hover {
  color: #265192;
}
.newsctx {
  font-size: 0.8em;
  line-height: 2.2em;
  color: #999999;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.newsDate {
  font-size: 0.7em;
  color: #bbbbbb;
}
</style>