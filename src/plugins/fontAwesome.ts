import { App } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub, faTwitter, faLinkedinIn, faEnvelope, faTools);

export default {
  install: (app: App): void => {
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
