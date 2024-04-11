<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <!--顶部header-->
      <Navbar />
    </div>
    <!--内容区-->
    <div class="app-main-container">
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/NavBar/index.vue'
import AppMain from './components/AppMain/index.vue'
</script>

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: $base-z-index - 2;
  width: 100%;
}

.app-main-container {
  margin-top: $base-nav-bar-height;
  height: calc(100vh - #{$base-nav-bar-height});
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
}
</style>
