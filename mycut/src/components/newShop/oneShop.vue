<template>
  <div>
    <router-link tag="div" to="/missage">
      <div class="body clearfix" v-for="item in oneList" :key="item.id">
        <div class="left fl">
          <img :src="item.shopImg" alt />
        </div>
        <div class="right fl">
          <p class="p1">{{item.shopName}}</p>
          <p class="p2">￥{{item.shopPrice}}</p>
          <p class="p3">已售{{item.shopNum}}件</p>
          <div>
            <button>{{item.shopBuy}}</button>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oneList: [
        {
          id: 1,
          shopImg: require("../../assets/images/index_images/shop_1.jpg"),
          shopName: "雅诗兰黛染发膏60ml",
          shopPrice: 123.0,
          shopNum: 800,
          shopBuy: "立即抢购",
        },
        {
          id: 2,
          shopImg: require("../../assets/images/index_images/shop_2.jpg"),
          shopName: "雅诗兰黛染发膏60ml",
          shopPrice: 123.0,
          shopNum: 800,
          shopBuy: "立即抢购",
        },
        {
          id: 3,
          shopImg: require("../../assets/images/index_images/shop_3.jpg"),
          shopName: "雅诗兰黛染发膏60ml",
          shopPrice: 123.0,
          shopNum: 800,
          shopBuy: "立即抢购",
        },
      ],
    };
  },
  methods: {
    shop() {
      console.log("商品列表页");
    },
    search() {
      console.log("搜索页");
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/home.css";
</style>
