<template>
  <div :class="isBgi" class="bgi">
    <div class="container">
      <div class="title">
        <p>
          <span>{{ bgiObj.ctitle }}</span>
        </p>
        <p>{{ bgiObj.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgiObj: {
        ctitle: "",
        title: "",
        bgiFlag: 0,
      },
    };
  },
  mounted() {
    this.bgiObj = this.$store.state.ObjBgi;
  },
  computed: {
    isBgi() {
      return {
        "slt-bgi": this.bgiObj.bgiFlag === 0,
        "us-bgi": this.bgiObj.bgiFlag === 1,
        "pdc-bgi": this.bgiObj.bgiFlag === 2,
        "news-bgi": this.bgiObj.bgiFlag === 3,
        "article-bgi": this.bgiObj.bgiFlag === 4,
      };
    },
  },
};
</script>
<style>
/* 标题部分 */
.slt-bgi {
  background: url(../../static/images/sltbgi.png) no-repeat center;
}
.us-bgi {
  background: url(../../static/images/usbgi.png) no-repeat center;
}
.pdc-bgi {
  background: url(../../static/images/products.png) no-repeat center;
}
.news-bgi {
  background: url(../../static/images/news-bgi.png) no-repeat center;
}
.article-bgi {
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
</style>