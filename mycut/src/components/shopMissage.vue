<template>
  <div>
    <missage-class></missage-class>
    <router-view></router-view>
  </div>
</template>

<script>
import missageClass from "./public/missageClass";
export default {
  components: {
    missageClass,
  },
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
</style>
