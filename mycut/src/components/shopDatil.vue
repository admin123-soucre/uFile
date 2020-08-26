<template>
  <div>
    <shop-datil></shop-datil>
    <router-view></router-view>
  </div>
</template>

<script>
import shopDatil from "./public/datilClass";
export default {
  components: {
    shopDatil,
  },
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
</style>
