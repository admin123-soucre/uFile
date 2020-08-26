<template>
  <div>
    <!-- 引入面包屑 -->
    <pub-nav></pub-nav>
    <!-- 添加按钮 -->
    <div>
      <el-button @click="openDialog" type="primary" size="mini">添加</el-button>
    </div>
    <!-- 表格渲染 -->
    <el-sort @update="update"></el-sort>
    <!-- 弹框的渲染 -->
    <v-add ref="vAdd" :isShow="sonStatus" @closeDialog="closeDialog"></v-add>
  </div>
</template>

<script>
import pubNav from "../../components/pubNav";
import elSort from "./list";
import vAdd from "./add";
export default {
  // 注册
  components: {
    pubNav,
    elSort,
    vAdd,
  },
  data() {
    return {
      sonStatus: {
        isAdd: true, //是否添加
        dialogShow: false, //控制对话框的显示隐藏
      },
    };
  },
  // 事件
  methods: {
    //打开弹框
    openDialog() {
      this.sonStatus.isAdd = true;
      this.sonStatus.dialogShow = true;
    },
    // 关闭弹框
    closeDialog(e) {
      this.sonStatus.dialogShow = e;
    },
    //update更新事件
    update(e) {
      this.sonStatus.isAdd = e.isAdd;
      this.sonStatus.dialogShow = true;
      this.$refs.vAdd.update(e.id);
    },
  },
};
</script>

<style lang="" scoped>
.el-button {
  margin-bottom: 15px;
}
</style>
