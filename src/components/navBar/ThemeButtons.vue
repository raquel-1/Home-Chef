<script setup>
import { useThemeStore } from '@/stores/theme'
import { defineAsyncComponent } from 'vue'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'

const Day = defineAsyncComponent(() => import('@/assets/svgs/Day.vue'))
const Night = defineAsyncComponent(() => import('@/assets/svgs/Night.vue'))

const themeStore = useThemeStore()

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
    <Day />
  </button>
  <button
    class="time"
    :class="{ 'time--active': themeStore.theme === DARK_MODE }"
    @click="changeTheme"
  >
    <Night />
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
