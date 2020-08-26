<template>
  <div>
    <!-- el-menu的属性
                default-active 默认选中 取决于子标签的index
                background-color    背景色
                active-text-color 点击的文本颜色
                unique-opened	是否只保持一个子菜单的展开
                router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
    -->
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="defaultActive"
          background-color="#3C3C3C		"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <!-- 首页 -->
          <el-menu-item index="/home">
            <i class="el-icon-s-grid"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 父级菜单 -->
          <!-- item.id.toString() -->
          <el-submenu :index="item.id.toString()" v-for="item in navList" :key="item.id">
            <template slot="title">
              <!-- :class="item.icon" -->
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <!-- 子集菜单 -->
            <el-menu-item
              v-for="itemList in item.children"
              :key="itemList.id"
              :index="itemList.url"
            >{{itemList.title}}</el-menu-item>
          </el-submenu>
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item index="/menu">菜单管理</el-menu-item>
            <el-menu-item index="/user">管理员管理</el-menu-item>
            <el-menu-item index="/role">角色管理</el-menu-item>
          </el-submenu>-->
          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商城管理</span>
            </template>
            <el-menu-item index="/goods">商品管理</el-menu-item>
          </el-submenu>-->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getMenuList } from "../util/axios";
export default {
  data() {
    return {
      defaultActive: "/home",
      navList: [],
    };
  },
  computed: {
    // ...mapGetters(["get_MenuList"]),
  },
  mounted() {
    this.defaultActive = this.$route.path;
    //因为菜单和权限挂钩还有管理员挂钩。管理员的某一个用户在登录的时候，根据权限获取不同彩电
    this.navList = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo")).menus
      : [];
    //组件一加载就调取菜单列表接口
    // this.getMenuListAction();
  },
  methods: {
    // ...mapActions(["getMenuListAction"]),
  },
};
</script>

<style  lang="stylus" scoped>
@import '../stylus/index.styl';

.el-menu {
  min-height: 600px;
}
</style>
