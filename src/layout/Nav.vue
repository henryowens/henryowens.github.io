<template>
  <div :class="wrapperStyle">
    <div :class="widthStyle">
      <router-link to="home" :class="nameStyle">Henry Owens</router-link>

      <div class="links">
        <a href="https://github.com/henryowens">
          <font-awesome-icon :icon="['fab', 'github']" class="nav-icon" />
        </a>
        <a href="https://twitter.com/henryo_dev">
          <font-awesome-icon :icon="['fab', 'twitter']" class="nav-icon" />
        </a>
        <a href="https://www.linkedin.com/in/henrytomowens/">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" class="nav-icon" />
        </a>
        <a href="mailto:henry.tom.owens@gmail.com">
          <font-awesome-icon :icon="['fas', 'envelope']" class="nav-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { nameStyle, wrapperStyle, widthStyle } from "./style.css";

@Options({
  components: {},
})
export default class Nav extends Vue {
  get wrapperStyle(): string {
    return wrapperStyle;
  }
  get widthStyle(): string {
    return widthStyle;
  }

  get nameStyle(): string {
    return nameStyle;
  }
}
</script>

<style></style>

<style>
.nav-icon {
  width: 18px !important;
  height: auto !important;
  color: #aba7a7;
  transition: 0.15s;
  margin: 0 10px;
}
.nav-icon:hover,
.nav-icon:active {
  color: #ffffff;
  cursor: pointer;
}
</style>
