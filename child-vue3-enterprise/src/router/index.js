import FindEnterprise from "@/views/findEnterprise.vue";
import EnterpriseDetail from "@/views/enterpriseDetail.vue";

import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    name: "findEnterprise",
    path: "/",
    component: FindEnterprise,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    name: "enterpriseDetail",
    path: "/enterpriseDetail",
    component: EnterpriseDetail,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
