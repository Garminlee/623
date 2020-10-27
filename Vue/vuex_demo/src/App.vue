<template>
  <div>
    <p>clikced:{{$store.state.nums}} times, count is {{evenOrodd}}</p>
    <button @click="doAdd()">+</button>
    <button @click="doSub()">-</button>
    <button @click="ifAdd()">increment if odd</button>
    <button @click="addAsync">increment async</button>
  </div>
</template>

<script>
export default {
  methods: {
    doAdd() {
      this.$store.dispatch("ADD");
    },
    doSub() {
      this.$store.dispatch("SUB");
    },
    ifAdd(value) {
      this.$store.dispatch("ifAdd");
    },
    addAsync() {
      this.$store.dispatch("aysncAdd");
    },
  },
  computed: {
    evenOrodd() {
      return this.$store.getters.EVENORODD;
    },
  },
};
</script>

<style>
</style>
