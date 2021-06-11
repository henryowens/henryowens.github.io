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
  position: relative;
  min-height: 100vh;
}

#page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 10px;
}
</style>
