<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    default-active="/compliance/home"
    router
    @select="handleSelect"
  >
    <el-menu-item index="/compliance/home">
      ⚖️{{ $t('complianceCenter') }}
    </el-menu-item>
    <el-menu-item index="/institution">
      📑{{ $t('institutionCenter') }}
    </el-menu-item>
    <el-menu-item index="/risk">🛡️{{ $t('riskCenter') }}</el-menu-item>
    <el-menu-item index="/knowledge">
      📚{{ $t('knowledgeCenter') }}
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-item {
  font-size: 20px;
  font-weight: 700;
  margin: 0 15px;
}
</style>
