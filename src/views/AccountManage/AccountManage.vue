<template>
  <div class="flex-col justify-between" style="height: 100%">
    <vxe-table
      border
      align="center"
      show-overflow
      :column-config="{ resizable: true }"
      :data="accountInformations"
      :edit-config="{ trigger: 'dblclick', mode: 'row' }"
    >
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="accountInformationId" title="账号ID">
        <template #default="{ row }">
          <span>{{ row.accountInformationId }}</span>
        </template>
      </vxe-column>
      <vxe-column field="accountType" title="账号类型">
        <template #default="{ row }">
          <span>{{ accountTypeMap[row.accountType] }}</span>
        </template>
      </vxe-column>
      <vxe-column field="createdAt" title="创建时间">
        <template #default="{ row }">
          <span>{{ row.createdAt }}</span>
        </template>
      </vxe-column>
      <vxe-column field="updatedAt" title="更新时间">
        <template #default="{ row }">
          <span>{{ row.updatedAt }}</span>
        </template>
      </vxe-column>
      <vxe-column field="userName" title="用户名" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input
            v-model="row.userName"
            type="text"
            placeholder="请输入用户名"
            @blur="handleAccountInformationChange(row)"
            transfer
          ></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作">
        <template #default="{ row }">
          <vxe-button
            content="删除账户"
            type="primary"
            @click="handleDeleteAccountInformation(row)"
          />
        </template>
      </vxe-column>
    </vxe-table>
    <div class="flex-row justify-between items-center">
      <vxe-button
        content="刷新数据"
        :loading="loading"
        round
        @click="getAccounts(currentPage, pageSize)"
      />
      <vxe-pager
        background
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="totalResult"
        :page-sizes="[3, 5, 10, 20, 30, 50, 100]"
        :layouts="[
          'PrevJump',
          'PrevPage',
          'JumpNumber',
          'NextPage',
          'NextJump',
          'Sizes',
          'FullJump',
          'Total',
        ]"
      >
      </vxe-pager>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAdminAccounts, putAdminAccountsP0 } from "@/services/services";
import type { AccountInformation } from "@/services/types";
import { failResponseHandler } from "@/utils/handler";
import { ElMessage, ElMessageBox } from "element-plus";
import { watch } from "vue";

let accountInformations = $ref<Array<AccountInformation>>();
const accountTypeMap = ["管理员", "普通用户", "HR用户"];

let totalResult = $ref(0);
let currentPage = $ref(1);
let pageSize = $ref(5);
let loading = $ref(false);
// 当用户更改输入值时将调用的函数。
const handleAccountInformationChange = (
  accountInformation: AccountInformation
) => {
  putAdminAccountsP0(
    accountInformation.accountInformationId,
    accountInformation
  )
    .then(() => {
      ElMessage.success("修改成功");
    })
    .catch(failResponseHandler);
};

// 当用户单击删除按钮时将调用的函数。
const handleDeleteAccountInformation = (
  accountInformation: AccountInformation
) => {
  ElMessageBox.confirm(
    `确定删除账户 ${accountInformation.userName} 吗？`,
    "删除账户",
    {
      type: "warning",
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      beforeClose: (action, instance, done) => {
        if (action === "confirm") {
          // getAdminAccounts(accountInformation)
          //   .then(() => {
          //     ElMessage.success("删除成功");
          //     done();
          //   })
          //   .catch(failResponseHandler);
          ElMessage.error("暂不允许删除账户");
          done();
        } else {
          done();
        }
      },
    }
  );
};

const getAccounts = (currentPage: number, pageSize: number) => {
  loading = true;
  getAdminAccounts({
    page: currentPage - 1,
    size: pageSize,
  })
    .then(
      ({
        data: {
          body: {
            accountInformations: _accountInformations,
            totalCount: _totalCount,
          },
        },
      }) => {
        accountInformations = _accountInformations;
        totalResult = _totalCount;
      }
    )
    .catch(failResponseHandler)
    .finally(() => {
      loading = false;
    });
};

watch(
  () => currentPage,
  () => {
    getAccounts(currentPage, pageSize);
  }
);
// 当 pageSize 发生变化时，如果 currentPage 过大，则设置为最大值。
watch(
  () => pageSize,
  () => {
    if (pageSize * currentPage > totalResult) {
      currentPage = Math.ceil(totalResult / pageSize);
    }
    getAccounts(currentPage, pageSize);
  }
);

getAccounts(currentPage, pageSize);
</script>

<style lang="scss" scoped></style>
