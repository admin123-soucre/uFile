<template>
  <div>
    <!-- 头部 -->
    <div class="wrap">
      <div class="nav">
        <div class="c">
          <div @click="$router.back()">
            <img src="../../assets/images/public/arrow.jpg" alt />
          </div>
          <div class="center">商品分类</div>
          <div class="set">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <!-- 列表 -->
      <div class="body clearfix">
        <div class="left fl">
          <ul>
            <li>施华蔻</li>
            <li>沙宣</li>
            <li>欧莱雅</li>
            <li>潘婷</li>
            <li>资生堂</li>
            <li>阿道夫</li>
            <li>卡诗</li>
            <li>海飞丝</li>
            <li>资生堂</li>
          </ul>
        </div>
        <div class="right fl">
          <div class="top clearfix">
            <div class="son fl">洗发类</div>
            <div class="son1 fr">更多&gt;</div>
          </div>
          <div class="center">
            <div class="box">
              <div v-for="item in classify" :key="item.id">
                <img :src="item.classImg" alt />
                <p>{{item.className}}</p>
              </div>
            </div>
            <div class="box">
              <div v-for="item in classify" :key="item.id">
                <img :src="item.classImg" alt />
                <p>{{item.className}}</p>
              </div>
            </div>
          </div>
          <div class="top clearfix">
            <div class="son fl">染发类</div>
            <div class="son1 fr">更多&gt;</div>
          </div>
          <div class="center">
            <div class="box">
              <div v-for="item in classify" :key="item.id">
                <img :src="item.classImg" alt />
                <p>{{item.className}}</p>
              </div>
            </div>
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
      classify: [
        {
          id: 1,
          className: "护亮泽洗发水",
          classImg: require("../../assets/images/list_images/pic.jpg"),
        },
        {
          id: 2,
          className: "护亮泽洗发水",
          classImg: require("../../assets/images/list_images/pic.jpg"),
        },
        {
          id: 3,
          className: "护亮泽洗发水",
          classImg: require("../../assets/images/list_images/pic.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/datil.css";
</style>
