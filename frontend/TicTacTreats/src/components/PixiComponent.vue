<script setup lang="ts">
import { Application } from "vue3-pixi";
import textureUrl from "@/assets/logo.svg";
import { Rectangle } from "pixi.js";

const hitArea = new Rectangle(0, 0, 64, 64);

function onClick() {
  console.log('sprite clicked!');
}
</script>

<template>
  <Application :width="1040" :height="800">
    <text :anchor="0.5" :x="80" :y="20" :style="{ fill: 'white' }">
      Tic Tac Treats
    </text>
    <sprite :x="120" :y="120" :texture="textureUrl" :hit-area="hitArea" @click="onClick" />
  </Application>
</template>