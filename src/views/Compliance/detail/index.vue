<template>
  <section class="statistics-box statistics-box-top mgb-20">
    <SearchBar />
  </section>
  <el-row :gutter="40">
    <el-col :sm="18" :md="18" :lg="18" :xl="18">
      <section class="statistics-box statistics-box-1 mgb-20">
        <List />
      </section>
    </el-col>
    <el-col :sm="6" :md="6" :lg="6" :xl="6">
      <section class="statistics-box statistics-box-2 mgb-20"></section>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SearchBar from './SearchBar/index.vue'
import List from './List/index.vue'
</script>

<style lang="scss" scoped>
.statistics-box {
  background-color: $base-color-white;
  border-radius: $base-border-radius;
  padding: $base-padding;
  box-shadow: $base-box-shadow;
  &.statistics-box-top {
    height: 105px;
    width: 100%;
  }
  &.statistics-box-1 {
    height: calc(100vh - $base-nav-bar-height - 60px);
    min-height: 800px;
    .statistic-divider-left {
      width: 75%;
      margin-left: 10%;
    }

    .statistic-divider-right {
      width: 75%;
      margin-left: 15%;
    }
  }

  &.statistics-box-2 {
    height: 388px;
  }

  &.statistics-box-3 {
    height: 361px;
  }

  &.statistics-box-4 {
    height: 187px;
    background-image: url('@/assets/images/compliance/passport.jpg');
    background-size: cover;
  }

  &.statistics-box-5 {
    height: 141px;
  }
}
</style>
