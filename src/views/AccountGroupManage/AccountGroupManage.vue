<template>
  <div class="flex-col justify-between" style="height: 100%">
    <vxe-table
      border
      align="center"
      show-overflow
      :column-config="{ resizable: true }"
      :data="accountGroups"
      :edit-config="{ trigger: 'dblclick', mode: 'row' }"
    >
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="groupId" title="用户组ID">
        <template #default="{ row }">
          <span>{{ row.groupId }}</span>
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
      <vxe-column field="groupName" title="用户组名" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input
            v-model="row.groupName"
            type="text"
            placeholder="请输入用户组名"
            transfer
          ></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="authorities" title="权限列表" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ row.authorities }}</span>
        </template>
      </vxe-column>
    </vxe-table>
    <div class="flex-row justify-between items-center">
      <vxe-button
        content="刷新数据"
        :loading="loading"
        round
        @click="getAccountGroups(currentPage, pageSize)"
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
import { getAdminAccountgroups } from "@/services/services";
import type { AccountGroup } from "@/services/types";
import { failResponseHandler } from "@/utils/handler";
import { watch } from "vue";

let accountGroups = $ref<Array<AccountGroup>>();

let totalResult = $ref(0);
let currentPage = $ref(1);
let pageSize = $ref(5);
let loading = $ref(false);

const getAccountGroups = (currentPage: number, pageSize: number) => {
  loading = true;
  getAdminAccountgroups({
    page: currentPage - 1,
    size: pageSize,
  })
    .then(
      ({
        data: {
          body: { totalCount: _totalCount, accountGroups: _accountGroups },
        },
      }) => {
        totalResult = _totalCount;
        accountGroups = _accountGroups;
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
    getAccountGroups(currentPage, pageSize);
  }
);
watch(
  () => pageSize,
  () => {
    if (pageSize * currentPage > totalResult) {
      currentPage = Math.ceil(totalResult / pageSize);
    }
    getAccountGroups(currentPage, pageSize);
  }
);

getAccountGroups(currentPage, pageSize);
</script>

<style lang="scss" scoped></style>
