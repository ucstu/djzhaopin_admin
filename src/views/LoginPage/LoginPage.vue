<template>
  <div>
    <el-card class="login-form-layout">
      <el-form
        autoComplete="on"
        :model="loginForm"
        :rules="loginRules"
        ref="loginFormRef"
        label-position="left"
      >
        <div style="text-align: center">
          <svg-icon
            icon-class="login-mall"
            style="width: 56px; height: 56px; color: #409eff"
          ></svg-icon>
        </div>
        <h2 class="login-title color-main">东江人才招聘Admin</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autoComplete="on"
            placeholder="请输入用户名"
          >
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.password"
            autoComplete="on"
            placeholder="请输入密码"
          >
            <span slot="prefix">
              <svg-icon icon-class="password" class="color-main"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px; text-align: center">
          <el-button
            style="width: 45%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <img
      src="@/assets/images/login_center_bg.png"
      class="login-center-layout"
    />
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { getAxiosInstance } from "@/services/config";
import { postAccountInfosLogin } from "@/services/services";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { encrypt } from "@/utils/useMd5";
import { ElMessage } from "element-plus";
const mainStore = useMainStore();

const loginFormRef = $ref(null as unknown as HTMLFormElement);
let loginForm = $ref({
  username: "",
  password: "",
});
let loading = $ref(false);
let pwdType = $ref("password");

const validateUsername = (rule: any, value: any, callback: any) => {
  if (!loginForm.username) {
    callback(new Error("请输入正确的用户名"));
  } else {
    callback();
  }
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value.length < 3) {
    callback(new Error("密码不能小于3位"));
  } else {
    callback();
  }
};

const showPwd = () => {
  if (pwdType === "password") {
    pwdType = "";
  } else {
    pwdType = "password";
  }
};

const loginRules = $ref({
  username: [{ required: true, trigger: "blur", validator: validateUsername }],
  password: [{ required: true, trigger: "blur", validator: validatePass }],
});

const handleLogin = () => {
  loginFormRef.validate((valid: boolean) => {
    if (valid) {
      loading = true;
      postAccountInfosLogin({
        userName: loginForm.username,
        password: encrypt(loginForm.password),
      })
        .then(
          ({
            data: {
              body: { token, accountInformation },
            },
          }) => {
            mainStore.jsonWebToken = token;
            mainStore.accountInformation = accountInformation;
            getAxiosInstance(undefined).defaults.headers.common[
              "Authorization"
            ] = `Bearer ${token}`;
            if (accountInformation.accountType === (0 as unknown as "1")) {
              router.push({ name: "Manage" });
            } else {
              ElMessage.error("当前账户非管理员账号");
              loginForm.username = "";
              loginForm.password = "";
            }
          }
        )
        .catch(failResponseHandler)
        .finally(() => {
          loading = false;
        });
    } else {
      return false;
    }
  });
};
</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}

.login-title {
  text-align: center;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>
