<template>
  <div class="flex-between mgb-20">
    <h3>{{ $t('helpDocument') }}</h3>
    <el-link type="primary">{{ $t('showMore') }}</el-link>
  </div>
  <el-row :gutter="20" class="pdb-20">
    <el-col
      v-for="item in theList"
      :key="item.title"
      :sm="12"
      :md="12"
      :lg="12"
      :xl="12"
      align="center"
      class="mgb-20"
    >
      <el-link type="info">{{ item.title }}</el-link>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const theList = reactive([
  { title: '产品概括' },
  { title: '使用指南' },
  { title: '接入流程' },
  { title: '接口文档' },
])
</script>
<style lang="scss" scoped>
.icon-bg {
  background-color: #f7f8fa;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
</style>
