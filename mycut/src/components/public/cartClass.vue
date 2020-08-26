<template>
  <div>
    <div id="box" v-cloak>
      <div class="wrap">
        <!-- 头部 -->
        <div class="nav">
          <div class="c">
            <div>
              <!-- ./images/public/arrow.jpg -->
              <img src="../../assets/images/public/arrow.jpg" alt />
            </div>
            <div class="center">购物车</div>
            <div class="set">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <!-- 购物车 -->
        <div class="body clearfix" v-for="(item,index) in contShop" :key="item.id">
          <div class="left fl">
            <input type="checkbox" class="tui-checkbox" v-model="item.checked" @change="checkOnce" />
          </div>
          <div class="center fl">
            <img :src="item.img" @click="cartdatil" alt />
          </div>
          <div class="a">
            <p class="p1">{{item.shopName}}</p>
            <p class="p2">￥{{item.shopSize}}</p>
            <p class="p3">{{item.shopPrice}}</p>
          </div>
          <div class="right fl">
            <div class="a">
              <button class="left" style="font-size: 30px;font-weight: bold;" @click="down(index)">-</button>
              <div class="center">{{item.num}}</div>
              <button class="right" style="font-size: 28px;font-weight: bold;" @click="up(index)">+</button>
            </div>
          </div>
        </div>
        <!-- 物品单价 -->
        <div class="foot clearfix">
          <span class="fl">
            <input type="checkbox" class="tui-checkbox" v-model="allCheck" @change="checkAll" />
            <span class="spa">全选</span>
          </span>
          <div class="center fl">
            <p class="p1">总计￥{{allPrice}}</p>
            <p class="p2">不含运费，已优惠￥0.00</p>
          </div>
          <router-link active-class="active" tag="div" to="/ssub">
            <button class="right fr" @click="sub">去结算（{{one}}件）</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCheck: false,
      contShop: [
        {
          id: 1,
          shopName: "欧莱雅面霜 ",
          shopSize: "规格:50g ",
          shopPrice: 123,
          num: 1,
          // ./images/index_images/shop_4.jpg
          img: require("../../assets/images/index_images/shop_4.jpg"),
          checked: false,
        },
        {
          id: 2,
          shopName: "欧莱雅面霜 ",
          shopSize: "规格:50g ",
          shopPrice: 123,
          num: 1,
          img: require("../../assets/images/index_images/shop_4.jpg"),
          checked: false,
        },
        {
          id: 3,
          shopName: "欧莱雅面霜 ",
          shopSize: "规格:50g ",
          shopPrice: 123,
          num: 1,
          img: require("../../assets/images/index_images/shop_4.jpg"),
          checked: false,
        },
      ],
    };
  },
  methods: {
    cartdatil() {
      console.log("商品详情");
    },
    //全选事件

    checkAll() {
      this.contShop.map((item) => {
        item.checked = this.allCheck;
      });
    },
    //单选事件
    checkOnce() {
      this.allCheck = this.contShop.every((item) => item.checked);
    },
    //点击加号数值增加事件
    up(i) {
      //判断上限
      if (this.contShop[i].num > 9) {
        this.contShop[i].num = 10;
        return;
      }
      // console.log(contShop[i].num);
      this.contShop[i].num++;
    },
    //点击加号数值减少事件
    down(i) {
      //判断上限
      if (this.contShop[i].num == 1) {
        this.contShop[i].num = 1;
        return;
      }
      this.contShop[i].num--;
    },
    // 结算页
    sub() {
      console.log("已结算");
    },
  },
  //总价格
  computed: {
    allPrice() {
      let sum = 0;
      this.contShop.map((item) => {
        if (item.checked) {
          sum += item.shopPrice * item.num;
        }
      });
      return sum;
    },
    //件数增加
    one() {
      let sum = 0;
      this.contShop.map((item) => {
        if (item.checked) {
          sum += item.num;
        }
      });
      return sum;
    },
  },
};
</script>
<style lang="" scoped>
@import "../../assets/css/cart.css";
</style>