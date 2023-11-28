import "./assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

let app = createApp(App);
app.use(router);
app.use(ElementPlus, { locale: zhCn });
app.mount("#app");
