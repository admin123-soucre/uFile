<template>
  <div>
    <div class="wrap">
      <!-- 头部 -->
      <div class="nav">
        <div class="left">
          <img @click="$router.back()" src="../../assets/images/list_images/arrow.jpg" alt />
        </div>
        <div class="center">
          <img src="../../assets/images/list_images/logo.jpg" alt />
        </div>
        <div class="set">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- 搜索商品 -->
      <div class="nav1">
        <div>
          <img src="../../assets/images/list_images/search.jpg" alt />搜索商品
        </div>
      </div>
      <!-- 商品列表 -->
      <router-link tag="div" to="/missage">
        <div class="body">
          <div class="son clearfix" v-for="item in searchList" :key="item.id">
            <div class="fl">
              <img :src="item.searchImg" @click="aut" alt />
            </div>
            <div class="fr">
              <p class="p1">{{item.searchName}}</p>
              <p class="p2">￥{{item.searchPrice}}</p>
              <p class="p3">{{item.searchTalk}}条评论</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchList: [
        {
          id: 1,
          searchName: "滋源修护滋养洗发香乳 520ml*2瓶",
          searchImg: require("../../assets/images/list_images/pic.jpg"),
          searchPrice: 145.0,
          searchTalk: 3678,
        },
        {
          id: 2,
          searchName: "阿道夫滋养洗发香乳 520ml*2瓶",
          searchImg: require("../../assets/images/list_images/pic.jpg"),
          searchPrice: 134.0,
          searchTalk: 3656,
        },
        {
          id: 3,
          searchName: "滋源修护滋养洗发香乳 520ml*2瓶",
          searchImg: require("../../assets/images/list_images/pic.jpg"),
          searchPrice: 124.0,
          searchTalk: 3625,
        },
      ],
    };
  },
  methods: {
    aut() {
      console.log("你");
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/seacrh.css";
</style>
