<template>
  <div class="layout">
    <div class="left-menubar">
      <LeftManuBar />
    </div>
    <div class="main-content">
      <RouterView />
    </div>
  </div>


</template>


<script setup>
import { RouterView } from "vue-router";
import LeftManuBar from "./components/layout/LeftManuBar.vue";

</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 16px;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0px;
}

.left-menubar {
  background-color: blueviolet;
  float: right;
  height: 100%;
  width: 100%;
}

.main-content {
  background-color: green;
  float: left;
  height: 100%;
  width: 100%;
}
</style>
