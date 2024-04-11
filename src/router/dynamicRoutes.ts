/**
 * 动态路由
 */
import { HOME_URL, LOGIN_URL } from '@/config/config'
const LAYOUT = () => import('@/layout/index.vue')

export const dynamicRoutes = [
  {
    path: LOGIN_URL,
    name: 'login',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/Login/index.vue'),
  },
  // 合规中心
  {
    path: '/',
    name: 'Compliance',
    component: LAYOUT,
    redirect: '/compliance/home',
    meta: {
      title: '合规中心',
      icon: '',
    },
    children: [
      {
        name: 'complianceHome',
        path: '/compliance/home',
        component: () => import('@/views/Compliance/home/index.vue'),
        meta: {
          title: '合规中心主页',
          icon: '',
        },
      },
      {
        name: 'complianceDetails',
        path: '/compliance/detail',
        component: () => import('@/views/Compliance/detail/index.vue'),
        meta: {
          title: '合规中心详情',
          icon: '',
        },
      },
    ],
  },
  //制度中心
  {
    path: '/institution',
    name: 'institution',
    component: LAYOUT,
    redirect: '/institution/home',
    meta: {
      title: '制度中心',
      icon: '',
    },
    children: [
      {
        name: 'institutionHome',
        path: '/institution/home',
        component: () => import('@/views/Institution/home/index.vue'),
        meta: {
          title: '制度中心主页',
          icon: '',
        },
      },
      {
        name: 'institutionDetails',
        path: '/institution/detail',
        component: () => import('@/views/Institution/detail/index.vue'),
        meta: {
          title: '制度中心详情',
          icon: '',
        },
      },
    ],
  },
]
