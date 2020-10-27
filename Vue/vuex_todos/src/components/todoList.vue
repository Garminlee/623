<template>
  <ul class="todo-main">
    <todoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
    />
  </ul>
</template>

<script>
import todoItem from "./todoItem.vue";
import { mapState } from "vuex";
import storageUtil from "../util/storageUtil";
export default {
  computed: {
    ...mapState(["todos"]),
  },
  watch: {
    todos: {
      deep: true,
      handler: storageUtil.saveTodos,
    },
  },
  //声明接收属性
  components: {
    todoItem,
  },
};
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>