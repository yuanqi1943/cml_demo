<template>
  <section class="app-main-height">
    <router-view v-slot="{ Component, route }">
      <!-- <transition appear name="fade-transform" mode="out-in"> -->
      <component :is="Component" :key="route.path" />
      <!-- </transition> -->
    </router-view>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DEFAULT_PADDING } from '@/config/config'
const isShow = ref(true)
const dfPadding = ref(DEFAULT_PADDING)
</script>

<style scoped lang="scss">
.app-main-height {
  min-height: $base-app-main-height;
  background-color: inherit;
  max-width: 1640px;
  width: 100%;
  padding: 35px;
}
</style>
