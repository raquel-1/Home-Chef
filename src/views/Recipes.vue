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
  <h1>Recipes</h1>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: map-get($map: $heights, $key: h-navbar);
}
</style>
