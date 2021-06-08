<template>
  <ho-nav />
  <div id="page"><router-view /></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import "./style/html.css";

@Options({})
export default class App extends Vue {}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
#page {
  flex: 1;
  display: flex;
}
</style>
