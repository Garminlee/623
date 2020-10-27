<template>
  <div>
    <ul>
      <li v-for="message in msgArr" :key="message.id">
        <router-link :to="`/home/msg/content/${message.id}`">{{ message.title }}</router-link>
        <button @click="pushCheck(message.id)">push 查看</button>
        <button @click="replaceCheck(message.id)">replace 查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgArr: [],
    };
  },
  mounted() {
    // 模拟后台获取数据
    setTimeout(() => {
      const msgArr = [
        { id: 1, title: "message001" },
        { id: 4, title: "message004" },
        { id: 6, title: "message006" },
        { id: 8, title: "message008" },
      ];
      this.msgArr = msgArr;
    }, 1000);
  },
  methods: {
    pushCheck(id) {
      this.$router.push(`/home/msg/content/${id}`);
    },
    replaceCheck(id) {
      this.$router.replace(`/home/msg/content/${id}`);
    },
  },
};
</script>
<style lang="">
</style>