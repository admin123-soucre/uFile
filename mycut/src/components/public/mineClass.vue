<template>
  <div>
    <div class="wrap">
      <!-- 头部 -->
      <div class="nav">
        <div class="c">
          <div>
            <!-- ./images/public/arrow.jpg -->
            <img src="../../assets/images/public/arrow.jpg" alt />
          </div>
          <div class="center">个人中心</div>
          <div class="set">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <!-- 头像登录 -->
      <div class="head">
        <div class="son clearfix">
          <router-link tag="div" to="/login">
            <div class="fl">
              <!-- ./images/mine_images/head.jpg -->
              <img src="../../assets/images/mine_images/head.jpg" alt />
            </div>

            <div class="fl">
              <p class="p1">你好,请登录</p>
              <p class="p2">
                <em>V1</em>
              </p>
            </div>
          </router-link>
          <div class="fr">每日签到</div>
        </div>
      </div>
      <!-- 全部订单 -->
      <div class="body">
        <div class="box" v-for="val in mineShop" :key="val.id">
          <div>
            <img :src="val.img" alt />
          </div>
          <p>{{val.name}}</p>
        </div>
      </div>
      <!-- 地址管理 -->
      <div class="body1" v-for="item in mineList" :key="item.id">
        <div class="son">
          <div class="left">
            <div class="fl">
              <img :src="item.img" alt />
            </div>
            <div class="fl wz">{{item.mineName}}</div>
          </div>
          <div class="fr">
            <div class="wz1 fl" v-if="item.id==2?item.mineMony:''">{{item.mineMony}}余额</div>
            <img :src="item.imgRight" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 地址管理4栏
      mineList: [
        {
          id: 1,
          mineName: "地址管理",
          img: require("../../assets/images/mine_images/icon_4.jpg"),
          imgRight: require("../../assets/images/public/right.jpg"),
        },
        {
          id: 2,
          mineName: "我的钱包",
          mineMony: 200,
          img: require("../../assets/images/mine_images/icon_5.jpg"),
          imgRight: require("../../assets/images/public/right.jpg"),
        },
        {
          id: 3,
          mineName: "我的优惠券",
          img: require("../../assets/images/mine_images/icon_6.jpg"),
          imgRight: require("../../assets/images/public/right.jpg"),
        },
        {
          id: 4,
          mineName: "我的二维码",
          img: require("../../assets/images/mine_images/icon_7.jpg"),
          imgRight: require("../../assets/images/public/right.jpg"),
        },
        {
          id: 5,
          mineName: "我的小伙伴",
          img: require("../../assets/images/mine_images/icon_8.jpg"),
          imgRight: require("../../assets/images/public/right.jpg"),
        },
      ],
      // 下方列表 订单，代付款……
      mineShop: [
        {
          id: 1,
          name: "全部订单",
          img: require("../../assets/images/mine_images/icon_1.jpg"),
        },
        {
          id: 2,
          name: "代付款",
          img: require("../../assets/images/mine_images/icon_1.jpg"),
        },
        {
          id: 3,
          name: "代收款",
          img: require("../../assets/images/mine_images/icon_1.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang="" scoped>
@import "../../assets/css/mine.css";
</style>