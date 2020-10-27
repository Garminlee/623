<template>
  <div>
    <div class="content">
      <TitleBgi />
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
import TitleBgi from "../components/TitleBgi";

export default {
  props: ["id"],
  // mounted() {
  //   this.$store.dispatch("reqPdcsArr");
  // },
  components: {
    TitleBgi,
  },
};
</script>

<style lang="">
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