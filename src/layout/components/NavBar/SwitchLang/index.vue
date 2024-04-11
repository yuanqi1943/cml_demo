<template>
  <el-dropdown @command="changeLanguage">
    <el-button :icon="EditPen" circle />
    <!-- <span class="el-dropdown-link">
      <el-icon class="el-icon--right"><EditPen /></el-icon>
    </span> -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in languagesOptions"
          :key="item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <!-- <el-select
    v-model="currentLanguage"
    @change="changeLanguage"
    class="m-2"
    placeholder="Select"
    size="small"
  >
    <el-option
      v-for="item in languagesOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select> -->
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { EditPen } from '@element-plus/icons-vue'
const { locale } = useI18n()

const languagesOptions = [
  {
    label: '中文',
    value: 'zh',
  },
  {
    label: 'English',
    value: 'en',
  },
]
const currentLanguage = computed(() => {
  return locale.value || localStorage.getItem('lang') || 'zh'
})
const changeLanguage = (val) => {
  locale.value = val
  // 切换语言后，存储到localStorage中
  // 避免跳转页面或者刷新当前页后，语言又变成默认的中文
  localStorage.setItem('lang', val)
}
</script>
