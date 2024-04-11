<template>
  <div class="flex-between mgb-20">
    <h3>{{ $t('importantRegulatoryRegulations') }}</h3>
    <el-link type="primary">{{ $t('showMore') }}</el-link>
  </div>
  <el-radio-group v-model="tabPosition" class="mgb-20">
    <el-radio-button value="policy">{{ $t('policy') }}</el-radio-button>
    <el-radio-button value="laws">{{ $t('laws') }}</el-radio-button>
    <el-radio-button value="notice">{{ $t('notice') }}</el-radio-button>
  </el-radio-group>
  <el-tabs class="demo-tabs">
    <el-tab-pane label="policy"><List /></el-tab-pane>
    <el-tab-pane label="laws"><List /></el-tab-pane>
    <el-tab-pane label="notice"><List /></el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import List from './List/index.vue'
const tabPosition = ref('policy')
</script>
<style lang="scss" scoped>
:deep(.el-tabs__header) {
  display: none;
}
</style>
