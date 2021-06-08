import { App } from "vue";
import Nav from "./Nav.vue";

export default {
  install: (app: App): void => {
    app.component("ho-nav", Nav);
  },
};
