import Login from "../views/main/login.vue";
import ChildDemo from "../views/child/childDemo.vue";
import childHome from "@/views/child/childHome.vue";
import childJob from "@/views/child/childJob.vue";
import childEnterprise from "@/views/child/childEnterprise.vue";
import childAbout from "@/views/child/childAbout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "login",
    path: "/main/login",
    component: Login,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    name: "childDemo",
    path: "/child/childDemo",
    component: ChildDemo,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/main/childHome",
    name: "childHome",
    component: childHome,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/main/childJob",
    name: "childJob",
    component: childJob,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/main/childEnterprise",
    name: "childEnterprise",
    component: childEnterprise,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
  {
    path: "/main/childAbout",
    name: "childAbout",
    component: childAbout,
    meta: {
      title: "",
      keepAlive: false,
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
