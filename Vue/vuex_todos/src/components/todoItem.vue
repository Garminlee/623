<template>
  <li
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    :style="bgColor"
  >
    <label>
      <input type="checkbox" v-model="todo.complete" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delItem">
      删除
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
  },
  data() {
    return {
      bgColor: {
        backgroundColor: "white",
      },
      isShow: false,
    };
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.bgColor.backgroundColor = "#aaaaaa";
        this.isShow = true;
      } else {
        this.bgColor.backgroundColor = "#ffffff";
        this.isShow = false;
      }
    },
    delItem(index) {
      if (window.confirm(`确定要删除${this.todo.title}这项任务吗`)) {
        this.$store.dispatch("delTodo", index);
      }
    },
  },
};
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>