<template>
  <div class="foot">
    <!-- to="/home" -->
    <!-- 路由导航切换 -->
    <div class="loater">
      <!-- 首页 -->
      <router-link active-class="active" to="/home" tag="span">
        <div class="three">
          <div>
            <span class="iconfont">&#xe636;</span>
          </div>
          <p class="font">首页</p>
        </div>
      </router-link>
      <!-- 购物车 -->
      <router-link active-class="active" to="/cart" tag="span">
        <div class="three">
          <div>
            <span class="iconfont">&#xe669;</span>
          </div>
          <p class="font">购物车</p>
        </div>
      </router-link>
      <!-- 个人中心 -->
      <router-link active-class="active" to="/mine" tag="span" class="act">
        <div class="three">
          <div>
            <span class="iconfont">&#xe626;</span>
          </div>
          <p class="font">个人中心</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="" scoped>
.loater {
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
}
.foot {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
}
.three {
  text-align: center;
  margin-left: 0.9rem;
  float: left;
}
.font {
  margin-left: 0.3rem;
  vertical-align: 0.01rem;
  font-size: 14px;
}
.active {
  background: #fff;
  color: #f26b11 !important;
}
.iconfont {
  display: inline-block;
  font-size: 35px;
  margin-left: 0.2rem;
}
</style>