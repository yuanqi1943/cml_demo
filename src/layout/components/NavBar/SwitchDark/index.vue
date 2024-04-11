<template>
  <el-button @click="toggleDark()" :icon="isDark ? Sunny : Moon" circle />
</template>

<script setup lang="ts" name="SwitchDark">
import { Sunny, Moon } from '@element-plus/icons-vue'
import { toggleDark, isDark } from '@/composables/index'
</script>
