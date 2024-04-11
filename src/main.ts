import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import i18n from '@/language/index'
// element默认主题
import 'element-plus/dist/index.css'
// 公共样式
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.use(i18n)

app.mount('#app')
