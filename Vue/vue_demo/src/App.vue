<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- 3. 最后使用标签 -->
      <Add :addComment="addComment" />
      <List :comments="comments" :delComment="delComment" />
    </div>
  </div>
</template>

<script>
// 1. 先引入
import Add from "./components/Add.vue";
import List from "./components/List.vue";

export default {
  data() {
    return {
      comments: [
        {
          name: "Joy",
          content: "Vue11111",
        },
        {
          name: "Sam",
          content: "Vue22222",
        },
        {
          name: "Pad",
          content: "Vue3333",
        },
      ],
    };
  },

  methods: {
    addComment(comment) {
      this.comments.unshift(comment);
    },
    delComment(index) {
      this.comments.splice(index, 1);
    },
  },
  // 2. 再映射
  components: {
    Add,
    List,
  },
};
</script>

<style>
</style>