<template>
  <div>
    <!-- 面包屑 -->
    <pub-nav></pub-nav>
    <!-- 表格渲染 -->
    <!-- @edit="edit" -->
    <v-list></v-list>
    <!-- 弹出对话框 -->
    <!-- ref="vDialog" :isShow="sonStatus" @closeDialog="closeDialog" -->
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import pubNav from "../../components/pubNav";
import vList from "./list";
import vDialog from "./add";

export default {
  components: {
    pubNav,
    vList,
    vDialog,
  },
  data() {
    return {
      //   sonStatus: {
      //     isAdd: true, //是否是添加
      //     dialogShow: false, //控制对话框的显示隐藏
      //   },
    };
  },
  //   methods: {
  //     //关闭弹框事件
  //     closeDialog(e) {
  //       this.sonStatus.dialogShow = e;
  //     },
  //     //编辑事件
  //     edit(e) {
  //       this.sonStatus.isAdd = e.isAdd;
  //       //打开弹框
  //       this.sonStatus.dialogShow = true;
  //       this.$refs.vDialog.update(e.uid);
  //     },
  //   },
};
</script>

<style  lang="stylus" scoped>
.el-button {
  margin-bottom: 15px;
}
</style>
