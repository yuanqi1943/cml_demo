<template>
  <transition appear name="fade-transform" mode="out-in">
    <div class="nav-bar-container">
      <el-row :gutter="15">
        <el-col :sm="4" :md="4" :lg="4" :xl="4">
          <Logo />
        </el-col>
        <el-col :sm="12" :md="12" :lg="12" :xl="12">
          <Nav />
        </el-col>
        <el-col :sm="8" :md="8" :lg="8" :xl="8">
          <div class="right-panel">
            <SwitchDark class="mgl-10" />
            <SwitchLang class="mgl-10" />
            <User class="mgl-10" />
          </div>
        </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import Logo from './Logo/index.vue'
import SwitchDark from './SwitchDark/index.vue'
import SwitchLang from './SwitchLang/index.vue'
import User from './User/index.vue'
import Nav from './Nav/index.vue'
</script>

<style scoped lang="scss">
.nav-bar-container {
  position: relative;
  height: $base-nav-bar-height;
  padding-right: $base-padding;
  padding-left: $base-padding;
  overflow: hidden;
  user-select: none;
  background: $base-color-white;
  box-shadow: $base-box-shadow;

  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 60px;

    .fold-unfold {
      font-size: 18px;
      color: $base-color-gray;
      cursor: pointer;
    }
  }

  .right-panel {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    height: $base-nav-bar-height;
  }
}
</style>
