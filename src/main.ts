import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
pinia.use(piniaPersist);

createApp(App)
  .use(pinia)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(router)
  .mount("#app");
