<template>
  <div>
    <div class="wrap">
      <!-- 头部 -->
      <div class="nav">
        <div class="c">
          <div>
            <!-- ./images/public/arrow.jpg -->
            <img @click="$router.back()" src="../../assets/images/public/arrow.jpg" alt />
          </div>
          <div class="center">登 录</div>
          <router-link tag="div" to="/register">
            <div class="set">注 册</div>
          </router-link>
        </div>
      </div>

      <!-- 注册内容 -->
      <div class="body">
        <form action>
          <!-- 手机号 -->
          <div class="namer">
            <label style="letter-spacing: 1px;">手机号 :</label>
            <input type="text" />
          </div>
          <!-- 密码 -->
          <div class="namer">
            <label style="letter-spacing: 4px;">密 码 :</label>
            <input type="password" />
          </div>
        </form>
        <!-- 忘记密码 -->
        <div class="pass">
          <a href="javascript:(0);">忘记密码</a>
        </div>
        <!-- 按钮 -->
        <router-link tag="div" to="/mine">
          <div class="btn">
            <button>登录</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/login.css";
</style>
