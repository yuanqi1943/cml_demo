import { createRouter, createWebHistory } from 'vue-router'
import { dynamicRoutes } from './dynamicRoutes'
const router = createRouter({
  history: createWebHistory(),
  routes: dynamicRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
