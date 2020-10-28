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
                v-for="pdc in currentPageData"
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
              <li @click="prePage">
                <a aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li
                v-for="index in totalPage"
                :class="currentPage == index ? 'active' : ''"
                @click="curPage(index)"
              >
                <a>{{ index }}</a>
              </li>

              <li @click="nextPage">
                <a aria-label="Next">
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
import Axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      // 后台传过来的所有数据
      totalData: [],
      // 总页数
      totalPage: 1,
      // 总条数
      count: 1,
      // 每一页显示多少条数据
      pageSize: 6,
      // 当前页显示的数据
      currentPageData: [],
      // 当前页数 默认显示第一页
      currentPage: 1,
    };
  },

  mounted() {
    this.getPage();
  },

  methods: {
    async getData(index) {
      this.currentPage = index || this.currentPage;
      await Axios.post("http://master.hogdata.cn/api/article/listByMenu", {
        menuId: 51,
        pageNum: 1,
      })
        .then((res) => {
          this.totalData = res.data.data;
          this.count = res.data.count;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getPage(index) {
      await this.getData(index);
      // console.log(this.totalData);
      this.totalPage = Math.ceil(this.count / this.pageSize);
      this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
      this.setCurrentPageData();
    },
    setCurrentPageData() {
      let begin = this.pageSize * (this.currentPage - 1);
      let end = this.pageSize * this.currentPage;
      this.currentPageData = this.totalData.slice(begin, end);
    },
    curPage(index) {
      this.getPage(index);
    },
    prePage() {
      if (this.currentPage <= 1) return;
      this.getPage(this.currentPage - 1);
    },
    nextPage() {
      if (this.currentPage >= this.totalPage) return;

      this.getPage(this.currentPage + 1);
    },
  },
};
</script>

<style>
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
  height: 260px;
  width: 373px;
  transition: all 0.7s;
}

.pdcs li .pdcImg img:hover {
  transform: scale(1.1);
}

.pdcs li .pdcname {
  font-size: 15px;
  text-align: center;
  padding: 9px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pdcs li .pdcname:hover {
  color: #265192;
}
.pdcs nav {
  text-align: center;
}
</style>