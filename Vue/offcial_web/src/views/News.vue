<template>
  <div>
    <!-- 内容区域 开始 -->
    <div class="content">
      <div class="bgi">
        <div class="container">
          <div class="title">
            <p><span>新闻动态</span></p>
            <p>NEWS</p>
          </div>
        </div>
      </div>
      <div class="container newsBox">
        <div class="row">
          <div class="new" v-for="msg in $store.state.newsArr" :key="id">
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
                <p class="newsctx" v-html="msg.detail"></p>
                <p>
                  <span class="newsDate">{{ msg.createTime }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容区域 结束 -->
  </div>
</template>

<script>
export default {
  props: ["id"],
  mounted() {
    this.$store.dispatch("reqNewsArr");
  },
};
</script>

<style lang="">
/* 标题部分 */

.bgi {
  background: url(../../static/images/news-bgi.png) no-repeat center;
}

.news {
  padding: 0 0 50px 0;
  background: url(../../static/images/newsbgi.png) no-repeat center;
  background-color: #fafafa;
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