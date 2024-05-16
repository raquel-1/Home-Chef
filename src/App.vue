<script setup>
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'

const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'theme-light' : 'theme-dark'
})
</script>

<template>
  <div :class="themeClass">
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>
