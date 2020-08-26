<template>
  <div>
    <login-class></login-class>
    <router-view></router-view>
  </div>
</template>

<script>
import loginClass from "./public/loginClass";
export default {
  components: {
    loginClass,
  },
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
</style>
