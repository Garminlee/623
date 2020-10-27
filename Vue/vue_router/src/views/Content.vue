<template>
  <div>
    <ul>
      <li>id:{{msgDetail.id}}</li>
      <li>title:{{msgDetail.title}}</li>
      <li>ctx:{{ msgDetail.ctx }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgDetail: {},
    };
  },
  mounted() {
    setTimeout(() => {
      const msgAll = [
        { id: 1, title: "message001", ctx: "message001 content..." },
        { id: 4, title: "message004", ctx: "message004 content..." },
        { id: 6, title: "message006", ctx: "message006 content..." },
        { id: 8, title: "message008", ctx: "message008 content..." },
      ];
      this.msgAll = msgAll;
    }, 1000);
  },
  watch: {
    $route(value) {
      const id = value.params.id * 1;
      this.msgDetail = this.msgAll.find((detail) => detail.id === id);
    },
  },
};
</script>
<style lang="">
</style>