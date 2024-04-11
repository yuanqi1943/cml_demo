<template>
  <el-dropdown @visible-change="onChange" @command="handleCommand">
    <!-- <el-avatar v-if="avatar" :size="28" :src="avatar" /> -->
    <el-avatar :size="28">
      {{ name?.slice(0, 1).toUpperCase() || 'User' }}
    </el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="logout">
          <span>退出登陆</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'
import { ElMessage, ElMessageBox } from 'element-plus'
import { LOGIN_URL } from '@/config/config'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const { name, avatar } = userStore || {
  name: 'Kevin',
  avatar: avatar,
}
const visible = ref(false)

function onChange(show: boolean) {
  visible.value = show
}

function handleCommand(command: string) {
  if (command === 'logout') {
    logout()
  }
}

// 退出登陆
function logout() {
  ElMessageBox.confirm('您确定要退出吗？', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    await userStore.Logout()
    router.push({ path: LOGIN_URL, query: { redirect: route.fullPath } })
    ElMessage.success('退出登录成功！')
  })
}
</script>

<style scoped lang="scss">
.avatar-dropdown {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 50px;
  padding: 0;

  .user-avatar {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
  }

  .user-name {
    position: relative;
    margin: 0 6px;
    cursor: pointer;
  }
}
</style>
