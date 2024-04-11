<template>
  <div class="flex-between mgb-20">
    <h3>{{ $t('complianceRiskCase') }}</h3>
    <el-link type="primary">{{ $t('showMore') }}</el-link>
  </div>
  <el-radio-group class="mgb-20">
    <el-radio-button value="policy">{{ $t('policy') }}</el-radio-button>
  </el-radio-group>
  <List />
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import List from './List/index.vue'
</script>
<style lang="scss" scoped>
:deep(.el-radio-button) {
  opacity: 0;
  .el-radio-button__inner {
    cursor: default;
  }
}
</style>
