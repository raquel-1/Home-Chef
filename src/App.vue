<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { useThemeStore } from '@/stores/theme'

const RecipeInfo = defineAsyncComponent(() => import('@/components/RecipeInfo.vue'))
const MainNavBar = defineAsyncComponent(
  () => import('@/components/navBar/MainNavBar.vue'),
)
const Header = defineAsyncComponent(() => import('@/components/header/Header.vue'))

const themeStore = useThemeStore()
</script>

<template>
  <MainNavBar></MainNavBar>
  <Header />
  <section>{{ themeStore.theme }}</section>
</template>

<style lang="scss" scoped>
section {
  height: 200vh;
  @include responsive(31.25em) {
    margin-top: 0;
  }
}
</style>
