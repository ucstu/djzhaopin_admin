import { useMainStore } from "@/stores/main";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const leftBarRouteList: RouteRecordRaw[] = [
  {
    name: "Manage",
    path: "/Manage",
    meta: { requiresAuth: true },
    component: () => import("@/AppLayout.vue"),
    redirect: "/Manage/CompanyManage",
    children: [
      {
        name: "CompanyManage",
        path: "CompanyManage",
        meta: { keepAlive: true, requiresAuth: true },
        component: () => import("@/views/CompanyManage/CompanyManage.vue"),
      },
      {
        name: "CompanyAttrDetail",
        path: "CompanyAttrDetail/:companyInformationId/:view?",
        meta: { keepAlive: false, requiresAuth: true },
        component: () => import("@/views/CompanyManage/CompanyAttrDetail.vue"),
      },
      {
        name: "PositionManage",
        path: "PositionManage",
        meta: { keepAlive: true, requiresAuth: true },
        component: () => import("@/views/PositionManage/PositionManage.vue"),
      },
      {
        name: "PositionAttrDetail",
        path: "PositionAttrDetail/:positionInformationId/:companyId/:view?",
        meta: { keepAlive: false, requiresAuth: true },
        component: () =>
          import("@/views/PositionManage/PositionAttrDetail.vue"),
      },
      {
        name: "AccountManage",
        path: "AccountManage",
        meta: { keepAlive: true, requiresAuth: true },
        component: () => import("@/views/AccountManage/AccountManage.vue"),
      },
      {
        name: "AccountGroupManage",
        path: "AccountGroupManage",
        meta: { keepAlive: true, requiresAuth: true },
        component: () =>
          import("@/views/AccountGroupManage/AccountGroupManage.vue"),
      },
    ],
  },
];

const unAuthRouterList: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/Login",
    meta: { requiresAuth: false },
  },
  {
    path: "/Login",
    meta: { requiresAuth: false },
    component: () => import("@/views/LoginPage/LoginPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...unAuthRouterList, ...leftBarRouteList],
});

router.beforeEach(async (to, _, next) => {
  const store = useMainStore();
  if (store.jsonWebToken != null && store.accountInformation != null) {
    next();
  } else if (!to.meta.requiresAuth) {
    next();
  } else {
    next("/Login");
  }
});

export default router;
