<template>
  <el-table
    :data="tableData"
    :default-sort="{ prop: 'dateValue', order: 'descending' }"
    :header-cell-style="{ background: '#F2F3F8', color: '#101010' }"
    style="width: 100%"
  >
    <el-table-column label="序号" width="100" align="center">
      <template #default="scope">
        {{ scope.$index + 1 }}
      </template>
    </el-table-column>
    <el-table-column prop="title" label="文件名称" show-overflow-tooltip />
    <el-table-column prop="dateValue" sortable label="发布时间" width="140" />
  </el-table>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

interface Rules {
  title: string
  dateValue: string
}

const tableData: Rules[] = reactive([
  {
    title: '《药品经营和使用质量监督管理...',
    dateValue: '2021-03-25',
  },
  {
    title: '《药品经营质量管理规范》',
    dateValue: '2021-04-25',
  },
  {
    title: '《药品生产质量管理规范》',
    dateValue: '2021-05-25',
  },
  {
    title: '《医药行业合规管理规范》',
    dateValue: '2021-06-25',
  },
  {
    title: '《医疗机构工作人员廉洁从优九...',
    dateValue: '2021-10-25',
  },
])
</script>
<style lang="scss" scoped></style>
