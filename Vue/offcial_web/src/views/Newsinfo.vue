<template>
  <div>
    <div class="content">
      <div class="bgi"></div>
      <div class="article container">
        <h1 :newsArr="$store.state.newsArr">
          {{ $store.state.newsArr[id - 1].title }}
        </h1>
        <span class="source">{{ $store.state.newsArr[id - 1].source }}</span>
        <p>&nbsp;</p>
        <div v-html="$store.state.newsArr[id - 1].infoText"></div>
        <p>&nbsp;</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  // mounted() {
  //   this.$store.dispatch("reqNewsArr");
  // },
};
</script>
<style lang="">
.bgi {
  background: url(../../static/images/articlebgi.png) no-repeat center;
}
.bgi {
  text-align: center;
  height: 300px;
  position: relative;
}

.bgi .title {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 16px;
}

.bgi .title p:first-of-type {
  font-size: 40px;
  margin-bottom: 8px;
}
h1 {
  text-align: center;
  font-weight: 400;
  margin: 80px 0;
}

.article {
  width: 1107px;
  color: #404040;
  padding: 50px 0;
  font-size: 14px;
}

.source {
  margin-bottom: 20px;
}

p {
  /* margin: 1em 0; */
  line-height: 24px;
}
</style>