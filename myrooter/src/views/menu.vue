<template>
  <div>
    <!-- 面包屑导航 -->
    <pub-nav></pub-nav>
    <!-- 添加按钮-->
    <div>
      <!-- @click="dialogShow = true" -->
      <el-button @click="openDialog" type="primary" size="mini">添加</el-button>
    </div>
    <!-- 添加表格 -->
    <div>
      <el-table
        :data="get_MenuList"
        border
        row-key="id"
        default-expand-all
        :tree-props="{children: 'children'}"
      >
        <!-- 菜单编号 -->
        <el-table-column prop="id" label="菜单编号" width="180"></el-table-column>

        <!-- 菜单名称 -->
        <el-table-column prop="title" label="菜单名称" width="180"></el-table-column>

        <!-- 上级菜单 -->
        <el-table-column prop="pid" label="上级菜单"></el-table-column>

        <!-- 菜单图标 -->
        <el-table-column prop="icon" label="菜单图标" width="180"></el-table-column>

        <!-- 菜单地址 -->
        <el-table-column prop="url" label="菜单地址" width="180"></el-table-column>

        <!-- 状态 -->
        <el-table-column prop="status" label="状态">
          <!-- slot-scope="item" -->
          <template slot-scope="item">
            <!-- v-if="item.row.status ==1" -->
            <el-tag type="success" v-if="item.row.status ==1">正常</el-tag>
            <!-- v-else type="danger" -->
            <el-tag v-else type="danger">禁用</el-tag>
          </template>
        </el-table-column>

        <!-- 操作 -->
        <el-table-column fixed="right" label="操作">
          <!-- slot-scope="scope" -->
          <template slot-scope="item">
            <el-button type="primary" icon="el-icon-edit" circle @click="edit(item.row.id)"></el-button>
            <el-button type="danger" @click="del(item.row.id)" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 点击按钮弹窗弹出对话框显示 -->
    <div>
      <!-- :visible.sync:双向绑定值，初始情况下控制dialog显示，dialog关闭时，element自动设置该值为false -->
      <!-- :title="isAdd?'添加菜单':'编辑菜单'" -->
      <el-dialog
        :before-close="reset"
        :title="isAdd?'添加菜单':'编辑菜单'"
        :visible.sync="dialogShow"
        center
      >
        <el-form :model="menuForm" :rules="rules" ref="ruleForm">
          <!--  菜单名称：-->
          <el-form-item prop="title" label="菜单名称：" :label-width="formLabelWidth">
            <el-input v-model="menuForm.title"></el-input>
          </el-form-item>

          <!-- 上级菜单：-->
          <el-form-item prop="pid" label="上级菜单：" :label-width="formLabelWidth">
            <el-select v-model="menuForm.pid" placeholder="请选择">
              <el-option value disabled>---请选择---</el-option>
              <el-option label="顶级菜单" :value="0">顶级菜单</el-option>
              <el-option
                v-for="item in get_MenuList"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 菜单类型： -->
          <el-form-item label="菜单类型：" :label-width="formLabelWidth">
            <el-radio v-model="menuForm.type" :label="1">目录</el-radio>
            <el-radio v-model="menuForm.type" :label="2">菜单</el-radio>
          </el-form-item>
          <!-- 菜单图标 -->
          <el-form-item
            v-if="menuForm.type==1"
            prop="icon"
            label="菜单图标："
            :label-width="formLabelWidth"
          >
            <el-input v-model="menuForm.icon"></el-input>
          </el-form-item>
          <!-- 菜单地址： -->
          <el-form-item v-if="menuForm.type==2" label="菜单地址：" :label-width="formLabelWidth">
            <el-input v-model="menuForm.url"></el-input>
          </el-form-item>

          <!-- 状态： -->
          <el-form-item label="状态：" :label-width="formLabelWidth">
            <el-switch
              v-model="menuForm.status"
              active-color="#409EFF"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="2"
            ></el-switch>
          </el-form-item>
        </el-form>

        <!-- 确定取消键 -->
        <div slot="footer" class="dialog-footer">
          <el-button @click="reset">取 消</el-button>
          <el-button @click="add('ruleForm')" type="primary">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import pubNav from "../components/pubNav";
import {
  getMenuAdd,
  getMenuList,
  getMenuInfo,
  getMenuEdit,
  getMenuDel,
} from "../util/axios";
export default {
  data() {
    return {
      editId: 0, //编辑删除用的
      isAdd: true, //是否添加
      // lable宽度
      formLabelWidth: "120px",
      // 弹窗内容
      menuForm: {
        title: "", //菜单列表id、上级菜单
        pid: 0,
        type: 1, //菜单类型 目录 菜单
        url: "", //控制菜单地址
        status: 1, //状态
        icon: "",
      },
      // 控制对话框的显示隐藏
      dialogShow: false,

      //添加星号
      rules: {
        title: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        pid: [{ required: true, message: "请选择上级菜单", trigger: "change" }],
      },

      // 菜单表格内容
      // tableData: [],
    };
  },
  //加载
  mounted() {
    //页面一加载就获取菜单列表 、和删除事件有关
    // this.get_menu_list();
    this.getMenuListAction();
  },
  computed: {
    ...mapGetters(["get_MenuList"]),
  },
  methods: {
    //封装打开弹框事件
    openDialog() {
      this.isAdd = true;
      this.dialogShow = true;
    },
    //关闭弹窗事件
    //封装一个清空事件
    reset() {
      this.menuForm = {
        title: "", //菜单名称
        pid: 0, //菜单列表id
        type: 1, //菜单类型 目录 菜单
        url: "", //控制菜单地址
        status: 1, //状态
        icon: "",
      };
      this.dialogShow = false;
    },
    // 添加表单事件
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // /调取接口
          // console.log(this.menuForm,'this.menuForm')
          //   this.menuForm.status = this.menuForm.status ? 1 : 2;
          //利用深拷贝，开辟一个新的空间，切断之前的视图联系，不会出现双向数据绑定
          //let data = JSON.parse(JSON.stringify(this.menuForm));
          //后端接收的时候要1,或者2 el-switch要是true或者false
          //data.status = data.status ? 1 : 2;
          //console.log(data, "表单信息");
          //是否调取新增事件还是编辑事件
          if (this.isAdd) {
            // 调取添加接口
            getMenuAdd(this.menuForm).then((res) => {
              if (res.code == 200) {
                this.$message.success(res.msg);
                //关闭弹框并清空
                this.reset();
                //重新调取列表
                // this.get_menu_list();
                this.getMenuListAction();
              }
            });
          } else {
            //id编号，必填项 对数据进行编辑
            this.menuForm.id = this.editId;
            //调取添加接口
            getMenuEdit(this.menuForm).then((res) => {
              if (res.code === 200) {
                this.$message.success(res.msg);
                //关闭弹框并清空
                this.reset();
                //重新调取列表
                // this.get_menu_list();
                this.getMenuListAction();
                //
              }
            });
          }
        } else {
          console.log("error submit");
          return false;
        }
      });
      //是否调取新增事件还是编辑事件
    },

    //修改
    //获取数据的方法
    edit(id) {
      this.editId = id;
      //更改isAdd状态
      this.isAdd = false;
      getMenuInfo({ id }).then((res) => {
        console.log(res, "一个数据");
        if (res.code == 200) {
          this.dialogShow = true;
          this.menuForm = res.list;
        }
      });
    },
    //删除事件

    del(id) {
      this.$confirm("确定要删除该数据吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //调取删除接口
          getMenuDel({ id }).then((res) => {
            if (res.code === 200) {
              this.$message({
                type: "success",
                message: res.msg,
              });
              //重新调取列表接口
              this.getMenuListAction();
              // this.get_menu_list();
            } else {
              this.$message.error(res.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });

      console.log(id, "删除成功");
    },
    //封装获取菜单列表
    ...mapActions(["getMenuListAction"]),
    // get_menu_list() {
    //   getMenuList().then((res) => {
    //     console.log(res, "列表");
    //     if (res.code === 200) {
    //       this.tableData = res.list;
    //     }
    //   });
    // },
  },
  components: {
    pubNav,
  },
};
</script>

<style lang="" scoped>
.el-button {
  margin-bottom: 15px;
}
</style>
