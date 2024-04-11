<template>
  <div class="search-box">
    <el-select
      clearable
      size="large"
      v-model="docType"
      :placeholder="$t('tips.selectCategory')"
      style="width: 150px"
      class="mgr-20"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <div class="search-input-box mgr-20">
      <el-input
        size="large"
        v-model="keywords"
        :placeholder="$t('tips.enterKeyword')"
        class="input-with-select"
      ></el-input>
      <div class="history-tag">
        <el-link :underline="false" type="primary" class="mgr-10">
          常用标签
        </el-link>
        <el-link :underline="false" type="primary" class="mgr-10">
          学术推广
        </el-link>
        <el-link :underline="false" type="primary" class="mgr-10">
          网络销售监督办法
        </el-link>
      </div>
    </div>

    <el-button type="primary" size="large">{{ $t('search') }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const keywords = ref('')
const docType = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
]
</script>
<style lang="scss" scoped>
.search-box {
  text-align: center;
}
.search-input-box {
  display: inline-block;
  text-align: left;
  vertical-align: top;
  min-width: 600px;
  width: 50%;
  .history-tag {
    padding: 10px;
  }
}
</style>
