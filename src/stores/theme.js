import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(DARK_MODE)

  function changeTheme() {
    theme.value = theme.value === DARK_MODE ? LIGHT_MODE : DARK_MODE
  }

  return { theme, changeTheme }
})
