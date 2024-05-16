<script setup>
import { useThemeStore } from '@/stores/theme'
import { defineAsyncComponent, ref, computed } from 'vue'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'

const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'theme-light' : 'theme-dark'
})

const ThemeButtons = defineAsyncComponent(
  () => import('@/components/navBar/ThemeButtons.vue'),
)
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))
</script>

<template>
  <article class="nav__responsive">
    <ul class="nav-responsive">
      <li
        :class="themeClass"
        class="nav-responsive__item nav-responsive__item--direction animate-item"
      >
        <a><h2>Home</h2></a>
      </li>
      <li
        :class="themeClass"
        class="nav-responsive__item nav-responsive__item--direction animate-item"
      >
        <a><h2>Recipes</h2></a>
      </li>
      <li :class="themeClass" class="nav-responsive__item animate-item">
        <ThemeButtons :class="themeClass" />
      </li>
      <li
        :class="themeClass"
        class="nav-responsive__item nav-responsive__item--direction nav-responsive__item--last animate-item"
      >
        <Saved :width="'2em'" :height="'2em'" />
        <h2>Saved</h2>
      </li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
    visibility: visible;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
}
@keyframes slideInFromLeft {
  0% {
    transform: translateY(-100%);
    opacity: 0;
    visibility: visible;
    z-index: -1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    z-index: 0;
  }
}

.nav {
  &__responsive {
    visibility: hidden;
    @include responsive(50em) {
      visibility: visible;
      position: absolute;
      top: map-get($map: $heights, $key: h-navbar);
      right: 0;
    }
    @include responsive(31.25em) {
      bottom: map-get($map: $heights, $key: h-navbar);
      top: auto;
      right: 0;
    }
    @include responsiveH(31.25em) {
      bottom: auto;
      top: 0;
      right: auto;
      left: map-get($map: $heights, $key: h-navbar);
      visibility: visible;
    }
    .nav-responsive {
      width: 10em;
      @include flex(column);

      @include responsive(31.25em) {
        @include flex(column-reverse);
      }
      .animate-item {
        visibility: hidden;
        opacity: 0;
        animation: slideInFromRight 0.3s ease-out forwards;
        @include responsiveH(31.25em) {
          visibility: visible;
          animation: slideInFromLeft 0.3s ease-out forwards;
        }
      }

      .animate-item:nth-child(2) {
        animation-delay: 0.3s;
      }

      .animate-item:nth-child(3) {
        animation-delay: 0.6s;
      }

      .animate-item:nth-child(4) {
        animation-delay: 0.9s;
      }

      &__item {
        border-left: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        border-right: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        width: 100%;
        @include flex(row, center, space-evenly);
        min-height: 4em;
        @include responsive(31.25em) {
          border-left: 0.05em solid map-get($map: $colors, $key: c-principal-color);
          border-right: 0.05em solid map-get($map: $colors, $key: c-principal-color);
          border-top: 0.05em solid map-get($map: $colors, $key: c-principal-color);
          border-bottom: none;
        }
        @include responsiveH(31.25em) {
          border-left: none;
          border-right: 0.05em solid map-get($map: $colors, $key: c-principal-color);
          border-top: 0.05em solid map-get($map: $colors, $key: c-principal-color);
          border-bottom: none;
        }
        &--direction {
          cursor: pointer;
        }
        &--last {
          border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        }
      }
    }
  }
}
</style>
