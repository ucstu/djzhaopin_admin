<template>
  <el-card class="form-container" shadow="never">
    <div class="content-bottom">
      <el-form
        ref="comFormRef"
        :model="companyForm"
        status-icon
        :rules="rule"
        label-width="120px"
        class="demo-ruleForm"
        style="max-width: 600px"
      >
        <el-form-item label="公司全称:" prop="user">
          <el-input
            v-model="companyForm.fullName"
            type="text"
            autocomplete="off"
            placeholder="请填写公司全称"
          />
        </el-form-item>
        <el-form-item label="公司Logo">
          <Upload :logoUrl="companyForm.logoUrl" @change-img="ImgUpdate" />
        </el-form-item>
        <el-form-item label="公司行业" prop="comprehensionName">
          <el-input
            v-model="companyForm.comprehensionName"
            :input-style="{ display: 'none' }"
          />
          <div class="select" @click="dialogFormVisible = true">
            <span>{{ companyForm.comprehensionName || "请选择" }}</span>
            <img src="@/assets/down.png" alt="" />
          </div>
          <el-dialog v-model="dialogFormVisible" title="请选择公司行业">
            <Tag @submit-data="submitData" />
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"
                  >确定</el-button
                >
              </span>
            </template>
          </el-dialog>
        </el-form-item>
        <el-form-item label="所在城市" style="width: auto">
          <el-cascader
            v-model="cityInfo"
            :options="cityMap"
            placeholder="请选择"
            style="width: 411px"
          />
        </el-form-item>
        <el-form-item label="详细地址" prop="workAreaName">
          <div class="search">
            <el-input
              v-model="companyForm.address"
              disabled
              placeholder="请在右方搜索点击选择"
            />
            <input id="input" type="text" />
          </div>
        </el-form-item>
        <el-form-item prop="workPlace">
          <div class="map">
            <div id="container"></div>
            <el-scrollbar>
              <ul>
                <li
                  v-for="address in aboutAddress"
                  :key="address.id"
                  @click="handleArea(address)"
                >
                  {{ address.name }}
                </li>
              </ul>
            </el-scrollbar>
          </div>
        </el-form-item>
        <el-form-item label="公司规模" prop="scale">
          <el-select v-model="companyForm.scale" placeholder="请选择">
            <el-option
              v-for="(item, index) in scale"
              :key="item"
              :label="item"
              :value="index"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="法人代表:" prop="pass">
          <el-input
            v-model="companyForm.legalRepresentative"
            type="text"
            autocomplete="off"
            placeholder="请填写法人代表"
          />
        </el-form-item>
        <el-form-item label="注册资本:" prop="user">
          <el-input
            v-model="companyForm.registeredCapital"
            type="text"
            autocomplete="off"
            placeholder="请填写注册资本"
          />
        </el-form-item>
        <el-form-item label="机构类型:" prop="pass">
          <el-input
            v-model="companyForm.organizationType"
            type="text"
            autocomplete="off"
            placeholder="请填写机构类型"
          />
        </el-form-item>
        <el-form-item label="成立时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="companyForm.establishmentTime"
                type="date"
                placeholder="选择日期"
                style="width: 81.5%"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="关于我们" prop="about">
          <el-input
            v-model="companyForm.about"
            type="textarea"
            show-word-limit
            maxlength="200"
            :autosize="{ minRows: 2, maxRows: 4 }"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            v-if="isEdit"
            type="primary"
            @click="updateCompany(comFormRef)"
            >修改信息</el-button
          >
        </el-form-item>
      </el-form>
      <div class="button"></div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import Tag from "@/components/Tag.vue";
import Upload from "@/components/Upload.vue";
import {
  getCityInformations,
  getCompanyInfosP0,
  putCompanyInfosP0,
} from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { failResponseHandler } from "@/utils/handler";
import { ElMessage, FormInstance } from "element-plus";
import { onMounted, reactive, Ref, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const VITE_CDN_URL = import.meta.env.VITE_CDN_URL;
const dialogFormVisible = ref(false);
const comFormRef = ref<FormInstance>();
const isEdit = ref(true);
const scale = [
  "少于15人",
  "15-50人",
  "50-150人",
  "150-500人",
  "500-2000人",
  "2000人以上",
];
const ImgUpdate = (logo: string) => {
  companyForm.logoUrl = logo;
};
const submitData = (data: {
  data: Ref<{ checked: boolean; fieldName: string }>;
}) => {
  if (data.data.value.checked) {
    companyForm.comprehensionName = data.data.value.fieldName;
  }
};
onMounted(() => {
  if (route.params.view) {
    isEdit.value = false;
  }
  // if (companyForm) {
  //   companyForm.scale = "1";
  // }
});
let companyForm = $ref<CompanyInformation>({} as CompanyInformation);
interface CityInfo {
  children: { value: string; label: string }[];
  value: string;
  label: string;
}
const rule = reactive({
  comprehensionName: [
    { required: true, message: "此项不能为空", trigger: "blur" },
  ],
  fullName: [{ required: true, message: "此项不能为空", trigger: "blur" }],
  address: [{ required: true, message: "此项不能为空", trigger: "blur" }],
  scale: [{ required: true, message: "此项不能为空", trigger: "blur" }],
});
const cityInfo = ref<string[]>([]);
const cityMap = ref<CityInfo[]>([]);
getCityInformations()
  .then((res) => {
    cityMap.value = res.data.body.map((item) => {
      return {
        value: item.provinceName,
        label: item.provinceName,
        children: item.cities.map((city) => {
          return {
            value: city,
            label: city,
          };
        }),
      };
    });
  })
  .catch(failResponseHandler);

getCompanyInfosP0(route.params.companyInformationId.toString()).then(
  ({ data: { body } }) => {
    companyForm = body;
  }
);
const updateCompany = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      putCompanyInfosP0(
        route.params.companyInformationId.toString(),
        companyForm
      )
        .then(() => {
          ElMessage.success("修改成功");
        })
        .catch(failResponseHandler);
    }
  });
};
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  flex-direction: column;

  span {
    margin-left: 15px;
    font-size: 8px;
    color: #999;
  }

  .el-form-item {
    .el-select {
      width: 411px;
    }

    .search {
      display: flex;
      justify-content: flex-end;
      width: 600px;

      .el-input {
        width: 380px;
      }

      input {
        margin-left: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        outline-style: none;
      }
    }

    .map {
      display: flex;
      justify-content: space-between;
      width: 1600px;
      height: 180px;

      #container {
        width: 380px;
        height: 180px;
        border-radius: 5px;
      }

      .el-scrollbar {
        width: 240px;

        ul {
          margin-top: -8px;
          margin-left: -10px;
          list-style-type: none;

          li {
            word-break: keep-all;
            white-space: nowrap;
            cursor: pointer;
          }
        }
      }
    }

    .select {
      position: relative;
      width: 411px;
      height: 30px;
      line-height: 30px;
      border: solid 1px #dcdfe6;
      border-radius: 4px;

      span {
        position: absolute;
        left: -5px;
        font-size: 14px;
        color: #ababb2;
      }

      img {
        position: absolute;
        top: 6px;
        right: 10px;
        width: 16px;
        height: 16px;
      }
    }

    .bottom-btn {
      display: flex;
    }
  }

  .avatar {
    display: flex;
    flex-wrap: nowrap;

    .avatar-uploader-icon {
      padding: 20px;
      border: solid 1px #dcdfe6;
    }
  }

  .button {
    width: 150px;
    height: 42px;
    margin-left: 120px;
  }
}
</style>
