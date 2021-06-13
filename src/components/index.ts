import { App } from "@vue/runtime-core";

import Background from "./background/Background.vue";
import Icon from "./icon/Icon.vue";

export default {
  install: (app: App): void => {
    app.component("ho-background", Background);
    app.component("ho-icon", Icon);
  },
};
