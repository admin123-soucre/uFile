<template>
  <div>
    <!-- 头部 -->
    <div class="wrap">
      <div class="header">
        <div class="ligo">
          <img src="../../assets/images/list_images/logo.jpg" alt />
        </div>
        <div class="search">
          <form action="#">
            <router-link tag="span" to="/search">
              <input type="text" @click="search" />
            </router-link>
          </form>
        </div>
        <div class="set">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="navgaiter">
      <nav class="clearfix">
        <div class="fl one">
          <a href="#">推荐</a>
        </div>
        <div class="fl">
          <a href="#">女装</a>
        </div>
        <div class="fl">
          <a href="#">居家</a>
        </div>
        <div class="fl">
          <a href="#">鞋包</a>
        </div>
        <div class="fl">
          <a href="#">母婴</a>
        </div>
        <div class="fl">
          <a href="#">儿童</a>
        </div>
        <div class="fl">
          <a href="#">美食</a>
        </div>
        <div class="a"></div>
      </nav>
    </div>
    <!-- 图片部分 -->
    <div class="img"></div>
    <!-- 四个选项框 -->
    <div class="wrap1">
      <div class="son">
        <div>
          <img src="../../assets/images/index_images/icon_1.jpg" alt />
        </div>
        <p>限时抢购</p>
      </div>
      <div class="son">
        <div>
          <img src="../../assets/images/index_images/icon_2.jpg" alt />
        </div>
        <p>积分商城</p>
      </div>
      <div class="son">
        <div>
          <img src="../../assets/images/index_images/icon_3.jpg" alt />
        </div>
        <p>联系我们</p>
      </div>
      <!-- @click="shopDatil" -->
      <router-link tag="div" to="/shopDatil">
        <div class="son" @click="shop">
          <div>
            <img src="../../assets/images/index_images/icon_4.jpg" alt />
          </div>
          <p>商品分类</p>
        </div>
      </router-link>
    </div>
    <!-- 限时秒杀 -->
    <div class="warp3 clearfix">
      <div class="left fl">
        <div class="top">
          <!-- ./images/index_images/timer.jpg -->
          <img src alt />
          <span>限时秒杀</span>
          <p>今天零点场 好货抢不停</p>
          <div class="box">
            <div>02</div>
            <div>16</div>
            <div>45</div>
          </div>
          <div class="fl">秒杀</div>
        </div>
        <div class="bottom">
          <div class="yuan">￥14.8</div>
        </div>
      </div>
      <div class="right fl">
        <div class="top clearfix">
          <div class="fl">
            <p class="p1">品牌上新</p>
            <p class="p2">每日九点抢大牌</p>
          </div>
          <div class="fl">
            <!-- ./images/index_images/shop_1.jpg -->
            <img src="../../assets/images/index_images/shop_1.jpg" alt />
          </div>
        </div>
        <div class="bottom clearfix">
          <div class="fl">
            <p class="p1">每日十件</p>
            <p class="p2">只为你选好货</p>
            <div>
              <!-- ./images/index_images/shop_2.jpg -->
              <img src="../../assets/images/index_images/shop_2.jpg" alt />
            </div>
          </div>
          <div class="fl">
            <p class="p1">每日十件</p>
            <p class="p2">只为你选好货</p>
            <div>
              <!-- ./images/index_images/shop_3.jpg -->
              <img src="../../assets/images/index_images/shop_3.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 专场 -->
    <div class="wrap4"></div>
    <div class="wrap5">
      <div class="nav">
        <div>热门推荐</div>
        <div>发现好货</div>
        <div>只看专场</div>
        <div>只看商品</div>
        <!-- <div :is="tabCom"></div> -->
      </div>
      <!-- <one-shop></one-shop> -->
      <!-- <two-shop></two-shop> -->
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
  </div>
</template>
<script>
// import oneShop from "../newShop/oneShop";
// import twoShop from "../newShop/twoShop";
// import threeShop from "../newShop/treeShop";
export default {
  // data() {
  //   return {
  //     tabCom: "oneShop",
  //   };
  // },
  // components: {
  //   oneShop,
  //   twoShop,
  //   // threeShop,
  // },

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