<script setup>
import { defineAsyncComponent, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { LIGHT_MODE } from '@/constants/theme'

const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'svg-light' : 'svg-dark'
})

const ThemeButtons = defineAsyncComponent(
  () => import('@/components/navBar/ThemeButtons.vue'),
)
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))
</script>

<template>
  <div class="nav__buttons">
    <article class="nav__theme">
      <ThemeButtons />
    </article>
    <router-link class="saved" to="/saved">
      <Saved :class="themeClass" :width="'1.7em'" :height="'1.7em'" />
      <p>Saved</p>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  &__buttons {
    width: 16em;
    height: 100%;
    @include flex(row, center, space-between);
    @include responsive() {
      width: 15em;
    }
    @include responsive(50em) {
      display: none;
    }
    @include responsiveH(31.25em) {
      display: none;
    }
    .saved {
      height: 2.7em;
      width: 8em;
      padding: 0 0.7em;
      background-color: map-get($map: $colors, $key: c-principal-color);
      @include flex(row, center, space-between);
      border-radius: 2em;
      margin-right: 0.5em;
      cursor: pointer;
      p {
        font-size: map-get($map: $font-size, $key: fs-medium);
        @include responsive() {
          font-size: map-get($map: $font-size, $key: fs-medium-small);
        }
      }
    }
  }
  &__theme {
    @include flex(row, center, space-between);
    width: 6em;
  }
}
</style>
