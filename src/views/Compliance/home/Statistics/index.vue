<template>
  <div class="statistic-container">
    <el-row class="statistic-row" :gutter="20">
      <el-col class="statistic-item" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="statistic-box">
          <div class="statistic-img">
            <img :src="statisticImg1" alt="" />
          </div>
          <div class="statistic-content">
            <div class="statistic-title">政策总内容</div>
            <div class="statistic-count">
              125367
              <span class="mgl-10 font-size-12">个</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-divider class="statistic-divider" direction="vertical" />
      <el-col class="statistic-item" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="statistic-box">
          <div class="statistic-img">
            <img :src="statisticImg2" alt="" />
          </div>
          <div class="statistic-content">
            <div class="statistic-title">制度总内容</div>
            <div class="statistic-count">
              125367
              <span class="mgl-10 font-size-12">个</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-divider class="statistic-divider" direction="vertical" />
      <el-col class="statistic-item" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="statistic-box">
          <div class="statistic-img">
            <img :src="statisticImg3" alt="" />
          </div>
          <div class="statistic-content">
            <div class="statistic-title">行业风险事件</div>
            <div class="statistic-count">
              125367
              <span class="mgl-10 font-size-12">个</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-divider class="statistic-divider" direction="vertical" />
      <el-col class="statistic-item" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="statistic-box">
          <div class="statistic-img">
            <img :src="statisticImg4" alt="" />
          </div>
          <div class="statistic-content">
            <div class="statistic-title">重点合规文件</div>
            <div class="statistic-count">
              125367
              <span class="mgl-10 font-size-12">个</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import statisticImg1 from '@/assets/images/compliance/1.png'
import statisticImg2 from '@/assets/images/compliance/2.png'
import statisticImg3 from '@/assets/images/compliance/3.png'
import statisticImg4 from '@/assets/images/compliance/4.png'
</script>

<style lang="scss" scoped>
.statistic-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .statistic-row {
    min-width: 964px;
  }

  .statistic-divider {
    height: 70px;
  }
}

.statistic-item {
  max-width: calc(25% - 15px);

  .statistic-box {
    display: flex;
    justify-content: space-between;

    .statistic-img {
      width: 70px;
      display: flex;
      align-items: center;

      img {
        max-width: 70px;
        max-height: 70px;
      }
    }

    .statistic-content {
      flex: 1;
    }

    .statistic-title {
      line-height: 30px;
      padding-left: 3px;
    }

    .statistic-count {
      line-height: 40px;
      font-size: 22px;
    }
  }
}
</style>
