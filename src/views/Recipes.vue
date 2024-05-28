<script setup>
import { defineAsyncComponent, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'

const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'theme-light' : 'theme-dark'
})
</script>

<template>
  <h2>Recipes</h2>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: map-get($map: $heights, $key: h-navbar);
}
</style>
