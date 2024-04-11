<template>
  <el-dialog v-model="detailVisible" :show-close="false" width="80%">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">
          <span class="line-icon"></span>
          {{ detailTitle }}
        </h4>
        <el-button @click="close" :icon="CloseBold" circle size="small" />
      </div>
    </template>

    <object :data="pdfFile" type="application/pdf" width="100%" height="800px">
      <p>
        您的浏览器不支持查看PDF文件，请下载
        <a :href="pdfFile">这个PDF文件</a>
        来查看。
      </p>
    </object>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue'
import { CloseBold } from '@element-plus/icons-vue'
import pdfFile from '@/assets/document/超全面软件设计师笔记.pdf'
let detailVisible = ref(false)
let detailTitle = ref('')
const showDetail = (title: string) => {
  detailVisible.value = true
  detailTitle.value = title
}
defineExpose({
  showDetail,
})
</script>
<style lang="scss" scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  .line-icon {
    display: inline-block;
    background-color: #4d95fd;
    margin-right: 8px;
    width: 3px;
    height: 14px;
  }
  :deep(.el-button.is-circle) {
    color: #1e63ff;
    border-color: #1e63ff;
  }
}
</style>
