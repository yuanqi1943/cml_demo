<template>
  <el-row :gutter="40">
    <el-col :sm="18" :md="18" :lg="18" :xl="18">
      <el-row :gutter="20" class="pdb-20">
        <el-col :sm="24" :md="24" :lg="24" :xl="24">
          <section class="statistics-box statistics-box-1">
            <div class="font-size-16">👏 欢迎回来，Raymond</div>
            <el-divider class="statistic-divider-left" />
            <Statistics />
            <el-divider class="statistic-divider-right" />
            <div class="font-size-16">🔎 查询页面</div>
            <Search />
          </section>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :sm="12" :md="12" :lg="12" :xl="12">
          <section class="statistics-box statistics-box-2">
            <Rules />
          </section>
        </el-col>
        <el-col :sm="12" :md="12" :lg="12" :xl="12">
          <section class="statistics-box statistics-box-2">
            <Cases />
          </section>
        </el-col>
      </el-row>
    </el-col>
    <el-col :sm="6" :md="6" :lg="6" :xl="6">
      <section class="statistics-box statistics-box-3 mgb-20">
        <Hot />
      </section>
      <section class="statistics-box statistics-box-4 mgb-20"></section>
      <section class="statistics-box statistics-box-5">
        <Help />
      </section>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Statistics from './Statistics/index.vue'
import Search from './Search/index.vue'
import Rules from './Rules/index.vue'
import Cases from './Cases/index.vue'
import Hot from './Hot/index.vue'
import Help from './Help/index.vue'
</script>

<style lang="scss" scoped>
.statistics-box {
  background-color: $base-color-white;
  border-radius: $base-border-radius;
  padding: $base-padding;
  box-shadow: $base-box-shadow;

  &.statistics-box-1 {
    height: 447px;
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
