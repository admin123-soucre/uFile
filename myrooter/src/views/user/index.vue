<template>
  <div>
    <!-- 引入面包屑 -->
    <pub-nav></pub-nav>
    <!-- 添加按钮 -->
    <div>
      <el-button type="primary" @click="openDialog" size="mini">添加</el-button>
    </div>
    <!-- 表格渲染 -->
    <el-user ref="elUser" @update="update"></el-user>
    <!-- 弹框渲染 -->
    <v-add ref="vAdd" :isShow="sonStatus" @closeDialog="closeDialog"></v-add>
  </div>
</template>

<script>
import pubNav from "../../components/pubNav";
import elUser from "./list";
import vAdd from "./add";
export default {
  components: {
    pubNav,
    elUser,
    vAdd,
  },
  data() {
    return {
      sonStatus: {
        isAdd: true, //是否添加
        dialogShow: false, //控制对话的显示隐藏
      },
    };
  },
  methods: {
    //打开弹框
    openDialog() {
      this.sonStatus.isAdd = true;
      this.sonStatus.dialogShow = true;
      this.sonStatus.getCount = this.$refs.elUser.getCount;
    },
    // 关闭弹框
    // 关闭弹框事件
    closeDialog(e) {
      this.sonStatus.dialogShow = e;
    },
    // update更新事件
    update(e) {
      console.log(e, "页码");
      this.sonStatus.isAdd = e.isAdd;
      this.sonStatus.dialogShow = true;
      this.$refs.vAdd.update(e.uid, e.changePage);
    },
  },
};
</script>

<style lang="" scoped>
.el-button {
  margin-bottom: 15px;
}
</style>
