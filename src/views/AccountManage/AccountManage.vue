<template>
  <div class="app-container">
    <el-card
      class="operate-container"
      shadow="never"
      :body-style="{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }"
    >
      <div class="left">
        <el-icon><List /></el-icon>
        <span style="margin: 0 5px">数据列表</span>
      </div>
      <el-button
        size="small"
        class="btn-add"
        @click="handleAdd"
        style="margin-left: 20px"
        >添加</el-button
      >
    </el-card>
    <div class="table-container">
      <el-table :data="Accounts" table-layout="fixed">
        <el-table-column
          label="账号ID"
          width="380"
          align="center"
          header-align="center"
        >
          <template #default="scope">
            <span>{{ scope.row.accountInformationId }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="角色"
          width="180"
          align="center"
          header-align="center"
        >
          <template #default="scope">
            <span>{{ AccountType[scope.row.accountType] }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="用户名"
          width="180"
          align="center"
          header-align="center"
        >
          <template #default="scope">
            <span>{{ scope.row.userName }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="注册时间"
          width="180"
          align="center"
          header-align="center"
        >
          <template #default="scope">
            <span>{{ scope.row.createdAt }}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          header-align="center"
          min-width="300"
        >
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button size="small" @click="handleView(scope.$index, scope.row)"
              >查看</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      :title="isEdit ? '编辑用户' : '添加用户'"
      v-model="dialogTableVisible"
      width="40%"
    >
      <el-form :model="admin" ref="adminForm" label-width="150px" size="small">
        <el-form-item label="用户名：">
          <el-input v-model="admin.userName" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="角色：">
          <el-select v-model="admin.accountType" placeholder="请选择账号角色">
            <el-option
              v-for="(item, index) in AccountType"
              :key="item"
              :label="item"
              :value="index"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input
            v-model="admin.password"
            type="password"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码：">
          <el-input
            style="width: 300px"
            v-model.number="admin.verificationCode"
            placeholder="输入验证码"
          >
            <template #append>
              <el-button
                v-if="!btn"
                @click="postverificationCode(admin.userName)"
                >{{ vcode }}</el-button
              >
              <el-button v-if="btn" @click="message">{{ vcode }}</el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogTableVisible = false" size="small"
            >取 消</el-button
          >
          <el-button
            type="primary"
            @click="handleDialogConfirm(adminForm)"
            size="small"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
  <main-bottom
    :value="value"
    :total="total"
    :page-num="pageNum"
    @current-change="handleChangePage"
    @size-change="handleSizeChange"
  />
</template>

<script lang="ts" setup>
import {
  getAdminAccounts,
  getVerificationCode,
  postAccountInfos,
} from "@/services/services";
import type { AccountInformation } from "@/services/types";
import { failResponseHandler } from "@/utils/handler";
import { encrypt } from "@/utils/useMd5";
import { List } from "@element-plus/icons-vue";
import { ElMessage, FormInstance } from "element-plus";
import { computed, ref } from "vue";
let total = $ref(0);
let Accounts = $ref<Array<AccountInformation>>();
const AccountType = ["管理员", "普通用户", "HR"];
const adminForm = ref<FormInstance>();
const value = computed(() => {
  return total > 1 ? false : true;
});
let pageNum = $ref(1);
getAdminAccounts().then(
  ({
    data: {
      body: { accountInformations, totalCount },
    },
  }) => {
    Accounts = accountInformations;
    total = totalCount;
  }
);
const handleChangePage = (currentPage: any) => {
  pageNum = currentPage;
  // getCompany(size, pageNum);
};
const handleDelete = () => {
  ElMessage.error("暂未开放");
};
let size = $ref(10);
const handleSizeChange = (val: number) => {
  size = val;
};
interface AccountInfo {
  accountType: "1" | "2";
  userName: string;
  password: string;
  verificationCode: string;
}
let dialogTableVisible = ref(false);
const btn = ref(false);
const vcode = ref("获取验证码");
const admin = $ref<AccountInfo>({} as AccountInfo);
const isEdit = ref(false);
const handleAdd = () => {
  console.log(11);
  dialogTableVisible.value = true;
  console.log(dialogTableVisible);
};
const handleEdit = (index: number, row: AccountInformation) => {
  console.log(12);
};
const handleView = (index: number, row: AccountInformation) => {
  console.log(1);
};
const postverificationCode = (email: string) => {
  if (email === "") {
    ElMessage.warning("请输入正确用户名");
    return;
  } else {
    getVerificationCode({ email })
      .then(() => {
        ElMessage.success("验证码已发送，请注意查收");
      })
      .catch(failResponseHandler);
    btn.value = true;
    let time = 60;
    const timer = setInterval(() => {
      time--;
      vcode.value = `${time}s`;
      if (time === 0) {
        clearInterval(timer);
        vcode.value = "获取验证码";
        btn.value = false;
      }
    }, 1000);
  }
};
const message = () => {
  ElMessage.warning("您已经发送过验证码，请等待");
};
const handleDialogConfirm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      postAccountInfos({
        accountType: admin.accountType,
        userName: admin.userName,
        password: encrypt(admin.password),
        verificationCode: admin.verificationCode,
      })
        .then(() => {
          ElMessage.success("注册成功");
          dialogTableVisible.value = false;
        })
        .catch(failResponseHandler);
    } else {
      ElMessage.warning("请检查表单信息");
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  width: 95%;
  .operate-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 50px 0;
  }
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
