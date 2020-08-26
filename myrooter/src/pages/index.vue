<template>
  <div>
    <el-container>
      <el-header>
        <h2 class="h2">欢迎来到×××后台管理系统</h2>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- el-menu的属性
                default-active 默认选中 取决于子标签的index
                background-color    背景色
                active-text-color 点击的文本颜色
          -->
          <index-class></index-class>
        </el-aside>

        <el-main>
          <!-- 二级路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import indexClass from "../components/indexClass";
export default {
  data() {
    return {};
  },
  components: {
    indexClass,
  },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.el-header {
  background: $indexColor;
}

.h2 {
  margin-top: 14px;
  color: #fff;
  font-weight: bold;
}

.el-menu {
  min-height: 600px;
}
</style>
