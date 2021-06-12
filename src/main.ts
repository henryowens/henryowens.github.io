import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LayoutComponents from "@/layout";
import Components from "@/components";
import FontAwesome from "@/plugins/fontAwesome";
import axios, { AxiosResponse } from "axios";


createApp(App)
  .use(router)
  .use(LayoutComponents)
  .use(Components)
  .use(FontAwesome)
  .mount("#app");
