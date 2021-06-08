import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LayoutComponents from "@/layout";
import FontAwesome from "@/plugins/fontAwesome";

createApp(App).use(router).use(LayoutComponents).use(FontAwesome).mount("#app");
