<template>
  <div class="col-md-12 nav">
    <div class="row">
      <div class="col-sm-2 col-xs-2 logo">
        <a href="#"><img src="../../static/images/logo.png" alt="" /></a>
      </div>
      <div
        class="navs col-md-6 col-md-offset-4 col-sm-8 col-sm-offset-2 hidden-xs"
      >
        <div class="row">
          <ul class="clearfix">
            <li class="col-xs-2 col-sm-offset-2">
              <a href="">首页</a>
            </li>
            <li class="col-xs-2"><a href="#">关于我们</a></li>
            <li class="col-xs-2"><a href="#">产品中心</a></li>
            <li class="col-xs-2"><a href="#">新闻动态</a></li>
            <li class="col-xs-2"><a href="#">解决方案</a></li>
          </ul>
        </div>
      </div>
      <div class="xsmenu col-xs-2 col-xs-offset-8 visible-xs">
        <a href="#" class="fl_r" v-if="!isShow" @click="isShow = !isShow"
          >MENU</a
        >
        <a href="#" class="fl_r clsMenu" v-else @click="isShow = !isShow">×</a>
      </div>
      <template v-if="isShow">
        <div class="xsnavs">
          <div class="xsnavs-left col-xs-11 clearfix">
            <ul>
              <li class="col-xs-12"><a href="#">首页</a></li>
              <li class="col-xs-12"><a href="#">关于我们</a></li>
              <li class="col-xs-12"><a href="#">产品中心</a></li>
              <li class="col-xs-12"><a href="#">新闻动态</a></li>
              <li class="col-xs-12"><a href="#">解决方案</a></li>
            </ul>
          </div>
        </div>
      </template>
      <!-- <div class="col-xs-1">×</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {},
};
</script>

<style lang="">
.nav {
  height: 70px;
  line-height: 70px;
  background-color: #fff;
  font-size: 14px;
}

.logo {
  /* width: 100%;
  height: auto; */
  max-width: 100%;
  max-height: 100%;
}

.logo img {
  width: 132px;
  height: 66px;
}
.navs {
  padding: 0;
}
.navs ul {
  margin: 0;
}
.navs ul li {
  text-align: center;
}
.navs li a {
  display: block;
}

.navs li a:hover {
  color: #004b98;
}

.navs ul li:hover,
.navs ul .current {
  color: #004b98;
  background: url(../../static/images/选中.png) no-repeat center;
}
.xsmenu a,
.navs ul .current a {
  color: #004b98;
}
.xsmenu a {
  font-weight: 700;
  font-size: 16px;
}
.fl_r {
  float: right;
}

.xsnavs-left {
  background-color: rgb(23, 31, 37);
}
.xsnavs-left li {
  border-bottom: 1px solid rgb(43, 51, 56);
}
.xsnavs-left li a {
  color: #fff;
  display: inline-block;
  width: 100%;
}
.clsMenu {
  font-size: 30px !important;
}
</style>