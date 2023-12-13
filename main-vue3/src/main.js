import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/index.scss";
import microApp from "@micro-zoe/micro-app";
import { jobType as jobTypeArr } from "@/assets/js/dictData.js";

window.jobTypeArr = jobTypeArr;

microApp.router.setBaseAppRouter(router);
microApp.start({
  "disable-memory-router": true, // 关闭虚拟路由系统
});
let app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
