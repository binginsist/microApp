import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import microApp from "@micro-zoe/micro-app";

microApp.start();
let app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
