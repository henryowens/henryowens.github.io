import { App } from "@vue/runtime-core";

import Background from "./background/Background.vue";

export default {
  install: (app: App): void => {
    app.component("ho-background", Background);
  },
};
