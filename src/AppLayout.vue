<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <div class="flex-row items-center">
          <img src="@/assets/logo.png" alt="logo" style="margin-left: -10px" />
          <h3 style="margin-right: 15px">东江管理后台</h3>
        </div>
        <el-menu
          :default-openeds="['BasicManage', 'AuthorityManage']"
          default-active="CompanyManage"
          active-text-color="#303133"
          router
        >
          <el-sub-menu index="BasicManage">
            <template #title>
              <el-icon><message /></el-icon>管理
            </template>
            <el-menu-item
              index="CompanyManage"
              :route="{ name: 'CompanyManage' }"
              :class="
                $route.path.includes('CompanyManage') ? 'my-is-active' : ''
              "
              >企业管理</el-menu-item
            >
            <el-menu-item
              index="PositionManage"
              :route="{ name: 'PositionManage' }"
              :class="
                $route.path.includes('PositionManage') ? 'my-is-active' : ''
              "
              >职位管理</el-menu-item
            >
          </el-sub-menu>
          <el-sub-menu index="AuthorityManage">
            <template #title>
              <el-icon><setting /></el-icon>权限
            </template>
            <el-menu-item
              index="AccountManage"
              :route="{ name: 'AccountManage' }"
              :class="
                $route.path.includes('AccountManage') ? 'my-is-active' : ''
              "
              >用户管理</el-menu-item
            >
            <el-menu-item
              index="AccountGroupManage"
              :route="{ name: 'AccountGroupManage' }"
              :class="
                $route.path.includes('AccountGroupManage') ? 'my-is-active' : ''
              "
              >用户组管理</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>超级管理员</span>
        </div>
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }" v-if="showRouter">
          <keep-alive>
            <component
              :is="Component"
              :key="route.name"
              v-if="route.meta.keepAlive"
            />
          </keep-alive>
          <component
            :is="Component"
            :key="route.name"
            v-if="!route.meta.keepAlive"
          />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Message, Setting } from "@element-plus/icons-vue";
import { nextTick, provide } from "vue";
let showRouter = $ref(true);
const reload = () => {
  showRouter = false;
  nextTick(() => {
    showRouter = true;
  });
};
provide("reload", reload);
</script>

<style scoped lang="scss">
.my-is-active {
  color: #409eff;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-white);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-white);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
