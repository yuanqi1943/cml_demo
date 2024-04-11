import { defineStore } from 'pinia'

/* AuthState */
interface SettingsState {
  collapse: boolean
  refresh: boolean
  themeConfig: ThemeConfigProps
}

interface ThemeConfigProps {
  isDark: boolean
}

export const useSettingsStore = defineStore({
  id: 'app-settings',
  state: (): SettingsState => ({
    collapse: false,
    refresh: false, // 刷新页面
    themeConfig: {
      isDark: false,
    },
  }),

  actions: {
    changeCollapse() {
      this.collapse = !this.collapse
    },
    setRefresh() {
      this.refresh = !this.refresh
    },
    setThemeConfig(themeConfig: ThemeConfigProps) {
      this.themeConfig = themeConfig
    },
  },
  persist: true,
})
