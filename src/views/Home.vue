<script setup>
import { defineAsyncComponent, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'

const MainNavBar = defineAsyncComponent(
  () => import('@/components/navBar/MainNavBar.vue'),
)
const Header = defineAsyncComponent(() => import('@/components/header/Header.vue'))

const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'theme-light' : 'theme-dark'
})
</script>

<template>
  <MainNavBar :class="themeClass" />
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
