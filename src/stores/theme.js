//  theme.js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('day')

  function changeTheme() {
    theme.value = theme.value === 'day' ? 'night' : 'day'
  }

  return { theme, changeTheme }
})
