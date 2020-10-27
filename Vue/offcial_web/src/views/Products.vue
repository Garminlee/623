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
      <div class="pdcs container">
        <div class="row">
          <div class="pro_info clearfix">
            <ul>
              <li
                class="col-md-4 col-xs-6"
                v-for="pdc in $store.state.pdcArr"
                :key="id"
              >
                <router-link :to="`/productinfo/${pdc.id}`">
                  <div class="pdcImg">
                    <img :src="pdc.imgUrl" alt="" />
                  </div>
                  <div class="pdcname">{{ pdc.title }}</div>
                </router-link>
              </li>
            </ul>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // mounted() {
  //   this.$store.dispatch("reqPdcsArr");
  // },
};
</script>

<style lang="">
/* 标题部分 */

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
/* 产品区域 */

.pdcs {
  padding: 100px 0;
}

/* .pdcs ul {
  margin-left: -30px;
} */

.pdcs ul li {
  /* float: left;
  margin: 0 0 30px 30px; */
  overflow: hidden;
  margin-bottom: 30px;
}

.pdcs ul li a {
  display: block;
}

.pdcs li .pdcImg {
  overflow: hidden;
  width: 375px;
  height: 260px;
}

.pdcs li .pdcImg img {
  height: auto;
  width: 373px;
  margin-top: -39px;
  transition: all 0.7s;
}

.pdcs li .pdcImg img:hover {
  transform: scale(1.1);
}

.pdcs li .pdcname {
  font-size: 15px;
  text-align: center;
  padding: 9px 0;
}

.pdcs li .pdcname:hover {
  color: #265192;
}
.pdcs nav {
  text-align: center;
}
</style>