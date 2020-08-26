<template>
  <div>
    <!-- :before-close="reset" title="编辑会员" :visible.sync="isShow.dialogShow" -->
    <el-dialog center>
      <!-- :model="memberForm" :rules="rules" ref="ruleForm" -->
      <el-form>
        <!-- 用户编号   prop="uid"  :label-width="formLabelWidth"-->
        <el-form-item label="用户编号:">
          <!-- v-model="memberForm.phone" -->
          <el-input></el-input>
        </el-form-item>
        <!-- 手机号   prop="phone"   :label-width="formLabelWidth"-->
        <el-form-item label="手机号:">
          <!-- v-model="memberForm.phone" -->
          <el-input></el-input>
        </el-form-item>
        <!-- 昵称   prop="nickname"   :label-width="formLabelWidth"-->
        <el-form-item label="昵称:">
          <!-- v-model="memberForm.nickname" -->
          <el-input></el-input>
        </el-form-item>
        <!-- 密码     prop="password" :label-width="formLabelWidth"-->
        <el-form-item label="密码:">
          <!-- v-model="memberForm.password" -->
          <el-input></el-input>
        </el-form-item>
        <!-- 状态：  :label-width="formLabelWidth" -->
        <el-form-item label="状态：">
          <!-- v-model="memberForm.status"   :active-value="1"
          :inactive-value="2"-->
          <el-switch active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
      <!-- slot="footer" -->
      <div class="dialog-footer">
        <!-- @click="reset"  @click="add('ruleForm')"  -->
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 引入vuex
// import { mapActions, mapGetters } from "vuex";
// // 引入接口
// import { getMemberInfo, getMemberEdit } from "../../util/axios";
export default {
  //   props: ["isShow"],
  //   computed: {
  //     // 调取会员列表
  //     ...mapGetters(["get_MemberList"]),
  //   },
  //   data() {
  //     return {
  //       editId: 0,
  //       formLabelWidth: "120px", //lable宽度
  //       memberForm: {
  //         nickname: "", //昵称
  //         phone: "", //手机号
  //         password: "", //密码
  //         status: 1,
  //       },
  //       //表单验证（根据产品需求制定）
  //       rules: {
  //         nickname: [
  //           //代表加红色星标
  //           { required: true, message: "请输入会员名称", trigger: "blur" },
  //         ],
  //         phone: [
  //           //代表加红色星标
  //           { required: true, message: "请输入会员手机号", trigger: "blur" },
  //         ],
  //       },
  //     };
  //   },
};
</script>

<style lang="" scoped>
</style>
