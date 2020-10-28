<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12 nav">
          <div class="row">
            <div class="col-sm-2 col-xs-2 logo">
              <router-link to="/index" @click.native="$router.go(0)"
                ><img src="../static/images/logo.png" alt=""
              /></router-link>
            </div>
            <div
              class="navs col-md-6 col-md-offset-4 col-sm-8 col-sm-offset-2 hidden-xs"
            >
              <div class="row">
                <ul class="clearfix">
                  <li class="col-xs-2 col-sm-offset-2">
                    <router-link to="/index" @click.native="$router.go(0)"
                      >首页</router-link
                    >
                  </li>
                  <li class="col-xs-2">
                    <router-link to="/about" @click.native="$router.go(0)"
                      >关于我们</router-link
                    >
                  </li>
                  <li class="col-xs-2">
                    <router-link to="/products" @click.native="$router.go(0)"
                      >产品中心</router-link
                    >
                  </li>
                  <li class="col-xs-2">
                    <router-link to="/news" @click.native="$router.go(0)"
                      >新闻动态</router-link
                    >
                  </li>
                  <li class="col-xs-2">
                    <router-link to="/cases" @click.native="$router.go(0)"
                      >解决方案</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="xsmenu col-xs-2 col-xs-offset-8 visible-xs">
              <a href="#" class="fl_r" v-if="!isShow" @click="isShow = !isShow"
                >MENU</a
              >
              <a href="#" class="fl_r clsMenu" v-else @click="isShow = !isShow"
                >×</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="isShow">
      <div class="xsnavs clearfix">
        <div class="row">
          <div class="xsnavs-left col-xs-11 clearfix">
            <ul @click="isShow = !isShow">
              <li class="col-xs-12">
                <router-link to="/index" @click.native="$router.go(0)" exact
                  >首页</router-link
                >
              </li>
              <li class="col-xs-12">
                <router-link to="/about" @click.native="$router.go(0)" exact
                  >关于我们</router-link
                >
              </li>
              <li class="col-xs-12">
                <router-link to="/products" @click.native="$router.go(0)" exact
                  >产品中心</router-link
                >
              </li>
              <li class="col-xs-12">
                <router-link to="/news" @click.native="$router.go(0)" exact
                  >新闻动态</router-link
                >
              </li>
              <li class="col-xs-12">
                <router-link to="/cases" @click.native="$router.go(0)" exact
                  >解决方案</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    Footer,
  },
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
.xsnavs-left li a:hover,
.navs li a:hover {
  color: #004b98;
}

.navs ul li:hover,
.navs ul .current {
  color: #004b98;
  background: url(../static/images/选中.png) no-repeat center;
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
.xsmenu {
  z-index: 999;
}
.xsnavs-left {
  height: 100vh;
}
.xsnavs-left {
  background-color: rgb(23, 31, 37);
}
.xsnavs-left li {
  padding: 15px 0 15px 15px;
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