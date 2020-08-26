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
          <div class="center">注 册</div>
          <router-link tag="div" to="/login">
            <div class="set">登 录</div>
          </router-link>
        </div>
      </div>

      <!-- 注册内容 -->
      <div class="body">
        <form action>
          <!-- 昵称 -->
          <div class="namer">
            <label style="letter-spacing: 4px;">昵 称 :</label>
            <input type="text" />
          </div>
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
          <!-- 验证码 -->
          <div class="namer">
            <label style="letter-spacing: 1px;">验证码 :</label>
            <input type="text" />
            <span class="span">重新发送(57)</span>
          </div>
        </form>
        <!-- 按钮 -->
        <div class="btn">
          <button>下一步</button>
        </div>
        <!-- 协议 -->
        <div class="lab">
          <input type="checkbox" />
          <label>我已阅读并同意使用条款和隐私政策</label>
        </div>
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
@import "../../assets/css/register.css";
</style>
