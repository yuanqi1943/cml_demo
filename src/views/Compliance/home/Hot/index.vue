<template>
  <div class="flex-between mgb-20">
    <h3>{{ $t('popularContent') }}</h3>
    <el-link type="primary">{{ $t('showMore') }}</el-link>
  </div>
  <el-row :gutter="20" class="pdb-20">
    <el-col
      v-for="item in theList"
      :key="item.id"
      :sm="8"
      :md="8"
      :lg="8"
      :xl="8"
      align="center"
      class="mgb-20"
    >
      <div class="icon-bg">
        <el-icon size="20">
          <component :is="item.icon" />
        </el-icon>
      </div>
      <div>{{ item.title }}</div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { Message } from '@element-plus/icons-vue'
import { ref, reactive, markRaw } from 'vue'
const theList = markRaw([
  { id: 1, icon: Message, title: '内容管理' },
  { id: 2, icon: Message, title: '内容统计' },
  { id: 3, icon: Message, title: '高级管理' },
  { id: 4, icon: Message, title: '线上推广' },
  { id: 5, icon: Message, title: '内容投放' },
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
