import { useMainStore } from "@/stores/main";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const leftBarRouteList: RouteRecordRaw[] = [
  {
    path: "/Manage",
    name: "Manage",
    component: () => import("@/AppLayout.vue"),
    redirect: "/Manage/CompanyManage",
    children: [
      {
        meta: { keepAlive: true },
        name: "CompanyManage",
        path: "CompanyManage",
        component: () => import("@/views/CompanyManage/CompanyManage.vue"),
      },
      {
        name: "CompanyAttrDetail",
        path: "CompanyAttrDetail/:companyInformationId/:view?",
        component: () => import("@/views/CompanyManage/CompanyAttrDetail.vue"),
      },
      {
        name: "PositionAttrDetail",
        path: "PositionAttrDetail/:positionInformationId/:companyId/:view?",
        component: () =>
          import("@/views/PositionManage/PositionAttrDetail.vue"),
      },
      {
        meta: { keepAlive: true },
        name: "PositionManage",
        path: "PositionManage",
        component: () => import("@/views/PositionManage/PositionManage.vue"),
      },
      {
        meta: { keepAlive: true },
        name: "AccountManage",
        path: "AccountManage",
        component: () => import("@/views/AccountManage/AccountManage.vue"),
      },
      {
        meta: { keepAlive: true },
        name: "AccountGroupManage",
        path: "AccountGroupManage",
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
    component: () => import("@/views/LoginPage/LoginPage.vue"),
    meta: { requiresAuth: false },
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
  } else {
    if (!to.meta.requiresAuth) {
      next();
    } else {
      next("/Login");
    }
  }
});

export default router;
