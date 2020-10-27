<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="../../static/images/wrapper1.png" alt="..." />
        <div class="carousel-caption">
          <div class="mask container">
            <div class="main">
              <div class="system">品牌数字化赋能系统</div>
              <div class="p">
                致力于面向全球各行业客户提供优质的显控解决方案
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../../static/images/wrapper2.png" alt="..." />
        <div class="carousel-caption">
          <div class="mask container">
            <div class="main">
              <div class="system">品牌数字化赋能系统</div>
              <div class="p">
                独家专利技术结合大数据能力，专注帮助企业实现品牌管理
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <a
      class="left carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="prev"
    >
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="right carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="next"
    >
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!-- 轮播图 结束 -->
</template>

<script>
export default {
  data() {
    return {
      el: "#myCarousel",
    };
  },
};
</script>

<style>
.carousel-caption {
  bottom: 4vw !important;
}
.mask .system {
  font-size: 3vw;
  transform: translate3d(0, -1200px, 0);
  animation-delay: 1s;
  animation-duration: 2s;
  animation-name: leftToMid;
  animation-fill-mode: forwards;
}

.mask .p {
  font-size: 0.75vw;
  transform: scale(0);
  animation-name: scale1;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes leftToMid {
  0% {
    transform: translateX(-1200px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes scale1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>