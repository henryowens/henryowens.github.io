<template>
  <div class="background">
    <canvas id="canvas" :height="height" :width="width"></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { background } from "@/components/background/background";

@Options({})
export default class Background extends Vue {
  public canvas: HTMLCanvasElement = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;

  public mounted(): void {
    background();
  }

  get ctx(): CanvasRenderingContext2D | null {
    return this.canvas ? this.canvas.getContext("2d") : null;
  }

  get height(): number {
    return Math.round(window.innerHeight - 75);
  }

  get width(): number {
    return this.canvas ? this.canvas.clientWidth : window.innerWidth;
  }
}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#canvas {
  width: 100%;
  height: 100%;
  background: #131313;
}
</style>
