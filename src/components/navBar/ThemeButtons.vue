<script setup>
import { useThemeStore } from '@/stores/theme'
import { defineAsyncComponent, computed } from 'vue'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'

const Day = defineAsyncComponent(() => import('@/assets/svgs/Day.vue'))
const Night = defineAsyncComponent(() => import('@/assets/svgs/Night.vue'))

const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'svg-light' : 'svg-dark'
})

const changeTheme = () => {
  themeStore.changeTheme()
}
</script>

<template>
  <button
    class="time"
    :class="{ 'time--active': themeStore.theme === LIGHT_MODE }"
    @click="changeTheme"
  >
    <Day :class="themeClass" :width="'2.5em'" :height="'2.5em'" />
  </button>
  <button
    class="time"
    :class="{ 'time--active': themeStore.theme === DARK_MODE }"
    @click="changeTheme"
  >
    <Night :class="themeClass" :width="'2.5em'" :height="'2.5em'" />
  </button>
</template>

<style lang="scss" scoped>
.time {
  width: 3em;
  height: 3em;
  @include flex();
  border-radius: 50%;
  cursor: pointer;
  &--active {
    border: 0.2em solid map-get($map: $colors, $key: c-principal-color);
  }
}
</style>
