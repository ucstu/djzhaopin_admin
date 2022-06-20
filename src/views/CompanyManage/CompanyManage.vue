<template>
  <el-scrollbar style="height: calc(100% - 75px); margin-bottom: 15px">
    <el-table :data="companyInformations" table-layout="fixed">
      <el-table-column
        label="LOGO"
        width="180"
        align="center"
        header-align="center"
      >
        <template #default="scope">
          <img
            :src="VITE_CDN_URL + scope.row.logoUrl"
            style="height: 50px; width: 50px"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="名称"
        width="180"
        align="center"
        header-align="center"
      >
        <template #default="scope">
          <span>{{ scope.row.fullName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="地址"
        width="380"
        align="center"
        header-align="center"
      >
        <template #default="scope">
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="成立时间"
        width="180"
        align="center"
        header-align="center"
      >
        <template #default="scope">
          <span>{{ scope.row.createdAt }}</span>
        </template>
      </el-table-column>
      <el-table-column
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
  </el-scrollbar>
  <main-bottom
    :value="value"
    :total="total"
    :page-num="pageNum"
    @current-change="handleChangePage"
    @size-change="handleSizeChange"
  />
</template>

<script lang="ts" setup>
import MainBottom from "@/components/MainBottom.vue";
import router from "@/router";
import { getCompanyInfos } from "@/services/services";
import type { CompanyInformation } from "@/services/types";
import { failResponseHandler } from "@/utils/handler";
import { computed } from "@vue/reactivity";
const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
const value = computed(() => {
  return total > 1 ? false : true;
});
const handleEdit = (index: number, row: CompanyInformation) => {
  router.push({
    name: "CompanyAttrDetail",
    params: { companyInformationId: row.companyInformationId },
  });
};
const handleView = (index: number, row: CompanyInformation) => {
  router.push({
    name: "CompanyAttrDetail",
    params: { companyInformationId: row.companyInformationId, view: "111" },
  });
};
let companyInformations = $ref<Array<CompanyInformation>>([]);
let total = $ref(0);
let pageNum = $ref(1);
let size = $ref(10);
const handleSizeChange = (val: number) => {
  size = val;
};

const handleChangePage = (currentPage: any) => {
  pageNum = currentPage;
  getCompany(size, pageNum);
};
const getCompany = (size: number, num: number) => {
  getCompanyInfos({ size: size, page: num - 1 }).then(
    ({
      data: {
        body: { companyInformations: _companyInformations },
      },
    }) => {
      companyInformations = _companyInformations;
    }
  );
};

getCompanyInfos({ size: 10, page: pageNum - 1 })
  .then(
    ({
      data: {
        body: { companyInformations: _companyInformations, totalCount },
      },
    }) => {
      companyInformations = _companyInformations;
      total = totalCount;
    }
  )
  .catch(failResponseHandler);
</script>

<style lang="scss" scoped></style>
