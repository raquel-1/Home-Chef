import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || DARK_MODE)

  watchEffect(() => {
    localStorage.setItem('theme', theme.value)
  })

  function changeTheme() {
    theme.value = theme.value === DARK_MODE ? LIGHT_MODE : DARK_MODE
  }

  return { theme, changeTheme }
})
