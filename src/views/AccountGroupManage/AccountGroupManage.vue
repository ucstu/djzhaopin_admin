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
      <el-table :data="AccountsGroup" table-layout="fixed">
        <el-table-column
          label="用户组ID"
          width="380"
          align="center"
          header-align="center"
        >
          <template #default="scope">
            <span>{{ scope.row.groupId }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="用户组名称"
          width="180"
          align="center"
          header-align="center"
        >
          <template #default="scope">
            <span
              v-if="acitveComponentId !== scope.row.componentId"
              @click="inputClick(scope.row)"
              >{{ scope.row.groupName }}</span
            >
            <el-input v-model="input" placeholder="Please input" />
          </template>
        </el-table-column>
        <el-table-column
          label="发布时间"
          width="280"
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
          </template>
        </el-table-column>
      </el-table>
      <vxe-table
        border
        show-overflow
        :column-config="{ resizable: true }"
        :data="AccountsGroup"
        :edit-config="{ trigger: 'dblclick', mode: 'cell' }"
      >
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column
          field="name"
          title="Name"
          :edit-render="{ autofocus: '.vxe-input--inner' }"
        >
          <template #edit="{ row }">
            <vxe-input v-model="row.name" type="text"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="role" title="Role" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input
              v-model="row.role"
              type="text"
              placeholder="请输入昵称"
            ></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="sex" title="Sex" :edit-render="{}">
          <template #default="{ row }">
            <span>{{ formatSex(row.sex) }}</span>
          </template>
          <template #edit="{ row }">
            <vxe-select v-model="row.sex" transfer>
              <vxe-option
                v-for="item in sexList1"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></vxe-option>
            </vxe-select>
          </template>
        </vxe-column>
        <vxe-column field="num6" title="Number" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input
              v-model="row.num6"
              type="number"
              placeholder="请输入数值"
            ></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="date12" title="Date" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input
              v-model="row.date12"
              type="date"
              placeholder="请选择日期"
              transfer
            ></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="date13" title="Week" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input
              v-model="row.date13"
              type="week"
              placeholder="请选择日期"
              transfer
            ></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="address" title="Address" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.address" type="text"></vxe-input>
          </template>
        </vxe-column>
      </vxe-table>
    </div>

    <el-dialog
      :title="isEdit ? '编辑账号组' : '添加账号组'"
      v-model="dialogTableVisible"
      width="40%"
    >
      <!-- <el-form :model="admin" ref="adminForm" label-width="150px" size="small">
        <el-form-item label="帐号：">
          <el-input v-model="admin.username" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="姓名：">
          <el-input v-model="admin.nickName" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input v-model="admin.email" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input
            v-model="admin.password"
            type="password"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input
            v-model="admin.note"
            type="textarea"
            :rows="5"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item label="是否启用：">
          <el-radio-group v-model="admin.status">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false" size="small"
          >取 消</el-button
        >
        <el-button type="primary" @click="handleDialogConfirm()" size="small"
          >确 定</el-button
        >
      </span> -->
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
import { getAdminAccountgroups } from "@/services/services";
import type { AccountGroup } from "@/services/types";
import { List } from "@element-plus/icons-vue";
import { computed, ref } from "vue";
let total = $ref(0);
let AccountsGroup = $ref<Array<AccountGroup>>();
const value = computed(() => {
  return total > 1 ? false : true;
});
let size = $ref(10);
let pageNum = $ref(1);
getAdminAccountgroups().then(
  ({
    data: {
      body: { totalCount, accountGroups },
    },
  }) => {
    AccountsGroup = accountGroups;
    console.log(AccountsGroup);
  }
);
let acitveComponentId = ref("");
const inputClick = (row: any) => {
  //点击span，赋值激活的id
  acitveComponentId.value = row.componentId;
};
const inputBlur = (row: any) => {
  //输入框失去焦点，将激活的id清空
  acitveComponentId.value = "";
};

const handleChangePage = (currentPage: any) => {
  pageNum = currentPage;
  // getCompany(size, pageNum);
};
const handleSizeChange = (val: number) => {
  size = val;
};
let dialogTableVisible = ref(false);
// const allRoleList = [
//   {
//     id: 1,
//     name: "超级管理员",
//   },
//   {
//     id: 2,
//     name: "普通管理员",
//   },
// ];

const handleEdit = (index: number, row: AccountGroup) => {
  console.log(12);
};
const handleView = (index: number, row: AccountGroup) => {
  console.log(1);
};
const isEdit = ref(false);
const handleAdd = () => {
  console.log(11);
  dialogTableVisible.value = true;
  console.log(dialogTableVisible);
};
// const handleDialogConfirm = () => {
//   console.log(33);
// };
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
</style>
