<script setup>
import { useThemeStore } from '@/stores/theme'
import { computed, defineAsyncComponent } from 'vue'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'
const MainNavBar = defineAsyncComponent(
  () => import('@/components/navBar/MainNavBar.vue'),
)
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))

const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'theme-light' : 'theme-dark'
})
</script>

<template>
  <div :class="themeClass" class="main" id="app">
    <MainNavBar :class="themeClass" />
    <router-view></router-view>
    <Footer :class="themeClass" />
  </div>
</template>

<style lang="scss">
.main {
  @include responsive(31.25em) {
    margin-bottom: map-get($map: $heights, $key: h-navbar);
  }
}
</style>
