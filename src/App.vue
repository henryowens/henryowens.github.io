<template>
  <ho-nav />
  <div id="page">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import "./style/html.css";

@Options({})
export default class App extends Vue {}
</script>

<style>
#app {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

#page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
