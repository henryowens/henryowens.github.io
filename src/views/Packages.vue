<template>
  <div class="packages">
    <h1>Packages</h1>
    <p>Packages I activly maintain</p>
    <div class="package" v-for="(pack, k) in packages.state.packages" :key="k">
      <p>{{ pack.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from "vue-class-component";
import { usePackages, PackagesState } from "@/composables/packages";

@Options({})
export default class Packages extends Vue {
  public packageNames: string[] = ["vue-form-wrapper"];
  public packages: PackagesState = setup(() => usePackages());

  public created(): void {
    this.packages.init(this.packageNames);
  }
}
</script>

<style scoped>
h1 {
  color: #aba7a7;
  font-weight: 300;
  font-size: 30px;
}

p {
  color: #aba7a7;
}
</style>
