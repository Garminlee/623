<template>
  <div>
    <div class="content">
      <TitleBgi />
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
import TitleBgi from "../components/TitleBgi";
export default {
  props: ["id"],
  // mounted() {
  //   this.$store.dispatch("reqNewsArr");
  // },
  components: {
    TitleBgi,
  },
};
</script>
<style lang="">
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