<template>
  <div>
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
</template>
<script>
export default {
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
      await this.$store.dispatch("reqPdcsArr", { menuId: 51, pageNum: 1 });
    },
    async getPage(index) {
      await this.getData(index);
      this.totalData = this.$store.state.pdcArr;
      // console.log(this.totalData);
      this.totalPage = Math.ceil(this.totalData.length / this.pageSize);
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
nav {
  text-align: center;
}
</style>