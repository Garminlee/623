<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" v-model="searchName" placeholder="enter the name you search" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        searchName: "",
      };
    },
    search() {
      const { searchName } = this;
    },
  },
};
</script>
<style>
</style>