<script setup>
import { useThemeStore } from '@/stores/theme'
import { computed, defineAsyncComponent } from 'vue'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'
const MainNavBar = defineAsyncComponent(
  () => import('@/components/navBar/MainNavBar.vue'),
)
const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'theme-light' : 'theme-dark'
})
</script>

<template>
  <div :class="themeClass">
    <MainNavBar :class="themeClass" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>
