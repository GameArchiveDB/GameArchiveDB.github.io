<template>
  <div class="layout">
    <div class="left-menubar">
      <SideBar_Sims4 />
    </div>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>


<script setup>
import SideBar_Sims4 from "../../components/layout/sidebar/SideBar_Sims4.vue";

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

.left-menubar{
  width: 100%;
}

.main-content {
  width: 100%;
}
</style>