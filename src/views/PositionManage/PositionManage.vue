<template>
  <el-scrollbar style="height: calc(100% - 75px); margin-bottom: 15px">
    <el-table :data="PositionInformations" table-layout="fixed">
      <el-table-column
        label="公司名称"
        width="180"
        align="center"
        header-align="center"
      >
        <template #default="scope">
          <span>{{ scope.row.CompanyName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="职位名称"
        width="180"
        align="center"
        header-align="center"
      >
        <template #default="scope">
          <span>{{ scope.row.positionName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="薪资范围"
        width="100"
        align="center"
        header-align="center"
      >
        <template #default="scope">
          <span>{{
            scope.row.startingSalary + "k" + "-" + scope.row.ceilingSalary + "k"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="工作地址"
        width="380"
        align="center"
        header-align="center"
      >
        <template #default="scope">
          <span>{{ scope.row.workAreaName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="发布时间"
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
import {
  getCompanyInfos,
  getCompanyInfosP0PositionInfos,
} from "@/services/services";
import type {
  CompanyInformation,
  GetCompanyInfosP0PositionInfosQueryParams,
  PositionInformation,
} from "@/services/types";
import { failResponseHandler } from "@/utils/handler";
import { computed } from "@vue/reactivity";
interface PositionManages extends PositionInformation {
  CompanyName: string;
  CompanyId: string;
}
const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
// 查看总页数来查看是否显示分页。
const value = computed(() => {
  return total > 1 ? false : true;
});
const handleEdit = (index: number, row: PositionManages) => {
  router.push({
    name: "PositionAttrDetail",
    params: {
      positionInformationId: row.positionInformationId,
      companyId: row.CompanyId,
      view: "111",
    },
  });
};
const handleView = (index: number, row: PositionManages) => {
  router.push({
    name: "PositionAttrDetail",
    params: {
      positionInformationId: row.positionInformationId,
      companyId: row.CompanyId,
    },
  });
};
const query = $ref<GetCompanyInfosP0PositionInfosQueryParams>();
let companyInformations = $ref<Array<CompanyInformation>>([]);
let companyTotal = $ref(0);
let total = $ref(0);
let pageNum = $ref(1);
let size = $ref(10);
let PositionInformations = $ref<Array<PositionManages>>([]);
const handleSizeChange = (val: number) => {
  size = val;
};
const handleChangePage = (currentPage: any) => {
  pageNum = currentPage;
  getCompany(size, pageNum);
};
const getCompany = (size: number, num: number) => {
  getCompanyInfos({ page: pageNum - 1 })
    .then(
      ({
        data: {
          body: { companyInformations: _companyInformations, totalCount },
        },
      }) => {
        companyInformations = _companyInformations;
        companyTotal = totalCount;
        companyInformations.map((companyInformation) => {
          console.log(1111);
          getCompanyInfosP0PositionInfos(
            companyInformation.companyInformationId,
            { size: size, page: num - 1 }
          )
            .then(
              ({
                data: {
                  body: { positionInformations, totalCount },
                },
              }) => {
                total += totalCount;
                const PositionInfos = positionInformations.map(
                  (positionInformation) => {
                    return {
                      ...positionInformation,
                      CompanyName: companyInformation.fullName,
                      CompanyId: companyInformation.companyInformationId,
                    };
                  }
                );
                PositionInformations.push(...PositionInfos);
              }
            )
            .catch(failResponseHandler);
        });
      }
    )
    .catch(failResponseHandler);
};
getCompanyInfos({ size: 10, page: pageNum - 1 })
  .then(
    ({
      data: {
        body: { companyInformations: _companyInformations, totalCount },
      },
    }) => {
      companyInformations = _companyInformations;
      companyTotal = totalCount;
      companyInformations.map((companyInformation) => {
        getCompanyInfosP0PositionInfos(companyInformation.companyInformationId)
          .then(
            ({
              data: {
                body: { positionInformations, totalCount },
              },
            }) => {
              total += totalCount;
              const PositionInfos = positionInformations.map(
                (positionInformation) => {
                  return {
                    ...positionInformation,
                    CompanyName: companyInformation.fullName,
                    CompanyId: companyInformation.companyInformationId,
                  };
                }
              );
              PositionInformations.push(...PositionInfos);
            }
          )
          .catch(failResponseHandler);
      });
    }
  )
  .catch(failResponseHandler);
</script>

<style lang="scss" scoped></style>
