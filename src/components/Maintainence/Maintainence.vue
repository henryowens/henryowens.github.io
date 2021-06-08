<template>
  <div class="maintainence">
    <font-awesome-icon :icon="['fas', 'tools']" />
    <h3>Site currently under construction...</h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Maintainence extends Vue {}
</script>

<style>
.maintainence {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.fa-tools {
  width: 220px !important;
  height: auto !important;
  color: #aba7a73b;
}

h3 {
  font-weight: 300;
  color: #848484;
}
</style>
