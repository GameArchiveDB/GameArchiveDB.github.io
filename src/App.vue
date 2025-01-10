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
  grid-template-columns: 3fr 7fr;
  gap: 16px;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0px;
}

/* .left-menubar {
  width: 20vh;
  height: 100vh;
  float: left;
}

.main-content {
  width: 80vh;
  height: 100vh;
  float: right;
} */
</style>
