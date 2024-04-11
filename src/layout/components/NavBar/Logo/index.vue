<template>
  <div class="logo-container flex-center">
    <a href="/">
      <img class="logo" alt="logo" src="@/assets/images/logo_pwc.png" />
      <h1 class="title">合规数据库</h1>
    </a>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.logo-container {
  position: relative;
  display: flex;
  align-items: center;
  // padding-left: 24px;
  height: 60px;
  overflow: hidden;
  line-height: 60px;
  background: transparent;

  .title {
    display: inline-block;
    margin-left: 12px;
    font-size: 20px;
    font-weight: 600;
    vertical-align: middle;
    color: $base-color-black;
  }

  .logo {
    display: inline-block;
    width: 62px;
    vertical-align: middle;
  }
}
</style>
