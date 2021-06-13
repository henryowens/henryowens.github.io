import { App } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub, faTwitter, faLinkedinIn, faEnvelope, faTools, faNode);

export default {
  install: (app: App): void => {
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
