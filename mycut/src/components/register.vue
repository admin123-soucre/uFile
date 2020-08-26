<template>
  <div>
    <register-class></register-class>
    <router-view></router-view>
  </div>
</template>

<script>
import registerClass from "./public/registerClass";
export default {
  components: {
    registerClass,
  },
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
</style>
