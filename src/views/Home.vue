<template>
  <div class="home">
    <maintainence />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Maintainence from "@/components/Maintainence/Maintainence.vue";

@Options({ components: { Maintainence } })
export default class Home extends Vue {}
</script>

<style>
.home {
  flex: 1;
}
</style>
