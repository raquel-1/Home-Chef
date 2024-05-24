<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { LIGHT_MODE } from '@/constants/theme'

const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'theme-light' : 'theme-dark'
})
</script>

<template>
  <button class="show-more">
    <span class="more" :class="themeClass">SEE MORE</span>
  </button>
</template>

<style lang="scss" scoped>
.show-more {
  min-width: map-get($map: $sizes, $key: s-card);
  max-width: map-get($map: $sizes, $key: s-card);
  max-height: map-get($map: $heights, $key: h-card);
  min-height: map-get($map: $heights, $key: h-card);
  border-radius: 1em;
  margin-bottom: 1em;
  @include flex();
  background-color: map-get($map: $colors, $key: c-transparent-dark-principal-color);
  cursor: pointer;
  .more {
    @include flex();
    padding: 1em 2em;
    border-radius: 1em;
  }
}
</style>
