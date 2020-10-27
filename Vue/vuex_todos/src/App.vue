<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 3. 使用标签名 -->
      <todoHeader />
      <todoList />
      <todoFooter />
    </div>
  </div>
</template>

<script>
// 1. 引入
import todoHeader from "./components/todoHeader.vue";
import todoList from "./components/todoList.vue";
import todoFooter from "./components/todoFooter.vue";
import storageUtil from "./util/storageUtil";

export default {
  mounted() {
    // 发送命令给action  异步获取保存todos数据并显示
    this.$store.dispatch("reqTodos");
  },

  //2. 映射
  components: {
    todoHeader,
    todoList,
    todoFooter,
  },
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
