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
  <router-link
    to="/recipes"
    class="show-more"
    aria-label="See more recipes on Home Chef Lemon"
  >
    <span class="more" :class="themeClass">SEE MORE</span>
  </router-link>
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
  transition: background-color map-get($map: $transitions, $key: t-button);
  &:hover {
    background-color: map-get($map: $colors, $key: c-principal-light-color);
  }
  .more {
    @include flex();
    padding: 1em 2em;
    border-radius: 2em;
    font-size: map-get($map: $font-size, $key: fs-small);
  }
}
</style>
