<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { useThemeStore } from '@/stores/theme'

const RecipeInfo = defineAsyncComponent(() => import('@/components/RecipeInfo.vue'))
const MainNavBar = defineAsyncComponent(
  () => import('@/components/navBar/MainNavBar.vue'),
)

const themeStore = useThemeStore()
</script>

<template>
  <MainNavBar></MainNavBar>

  <section>{{ themeStore.theme }}</section>
</template>

<style lang="scss" scoped>
section {
  height: 200vh;
  margin-top: map-get($map: $heights, $key: h-navbar);
}
</style>
