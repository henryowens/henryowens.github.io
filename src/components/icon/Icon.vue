<template>
  <div v-html="svg" :key="name"></div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { Options, prop, Vue } from "vue-class-component";

class Props {
  public name: string = prop<string>({ required: true });
}

@Options({})
export default class Icon extends Vue.with(Props) {
  public svg = "";

  public mounted(): void {
    axios
      .get(`/icons/${this.name}.svg`)
      .then((resp: AxiosResponse<string>) => (this.svg = resp.data));
  }
}
</script>

<style>
svg {
  height: 26px !important;
  width: 26px !important;
  margin: 0 10px;
}
</style>
