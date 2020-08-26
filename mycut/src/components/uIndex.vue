<template>
  <div>
    <!-- to="/home" -->
    <!-- 路由导航切换 -->
    <u-iplic></u-iplic>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>
<script>
import uIplic from "./public/publcon";
export default {
  components: {
    uIplic,
  },
};
</script>

<style lang="" scoped>
</style>