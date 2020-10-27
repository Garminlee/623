<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 3. 使用标签名 -->
      <todoHeader :addTodo="addTodo" />
      <todoList :todos="todos" :delTodo="delTodo" />
      <todoFooter :todos="todos" :delDone="delDone" :selectAll="selectAll" />
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
  data() {
    return {
      // 从localStorage读取todos
      todos: storageUtil.readTodos(),
      // todos: JSON.parse(window.localStorage.getItem("todos_key") || "[]"),
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    delTodo(index) {
      this.todos.splice(index, 1);
    },
    delDone() {
      this.todos = this.todos.filter((todo) => !todo.complete);
    },
    selectAll(isCheck) {
      this.todos.forEach((todo) => {
        todo.complete = isCheck;
      });
    },
  },
  watch: {
    // 监视
    todos: {
      deep: true, // 深度监视
      // handler: function (newVal) {
      //   window.localStorage.setItem("todos_key", JSON.stringify(newVal));
      // },
      handler: storageUtil.saveTodos,
    },
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
