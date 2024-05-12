<script setup>
import { defineAsyncComponent, ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside'

const InsideNav = defineAsyncComponent(() => import('@/components/navBar/InsideNav.vue'))
const MainNavButtons = defineAsyncComponent(
  () => import('@/components/navBar/MainNavButtons.vue'),
)
const ResponsiveNav = defineAsyncComponent(
  () => import('@/components/navBar/ResponsiveNav.vue'),
)
const Logo = defineAsyncComponent(() => import('@/assets/svgs/Logo.vue'))
const Menu = defineAsyncComponent(() => import('@/assets/svgs/Menu.vue'))

// Define una variable reactiva para almacenar el ítem activo
const activeItem = ref('home')

// for responsive nav

const showResponsiveNav = ref(false)

const changeResponsiveNav = () => {
  showResponsiveNav.value = !showResponsiveNav.value
}
// v-click-out-side="closeResponsiveNav"
const closeResponsiveNav = () => {
  showResponsiveNav.value = false
}

const themeStore = useThemeStore()

// animation
const itemsState = ref(Array(4).fill(false))
</script>

<template>
  <nav class="nav">
    <button class="nav__logo">
      <Logo />
      <h1 class="name-app">Home Chef</h1>
    </button>

    <InsideNav :activeItem="activeItem" @update:activeItem="activeItem = $event" />
    <MainNavButtons />

    <Menu @click="changeResponsiveNav" />
    <Transition name="list" mode="out-in">
      <ResponsiveNav v-if="showResponsiveNav" />
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
/** 50em aparecera el hamburguesa */
.list-enter-active,
.list-leave-active {
  transition:
    opacity 0.7s,
    transform 0.7s;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.nav {
  width: 100%;
  @include flex(row, center, space-between);
  max-width: map-get($map: $sizes, $key: s-navbar);
  height: map-get($map: $heights, $key: h-navbar);
  font-family: map-get($map: $fonts, $key: f-font-bold);
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: map-get($map: $colors, $key: c-black);
  border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
  padding: map-get($map: $sizes, $key: s-padding-nav);
  @include responsive() {
    padding: 0 1em;
  }
  @include responsive(43em) {
    padding: 2em;
  }
  &__logo {
    @include flex(row, center, center);
    cursor: pointer;
    .name-app {
      font-size: map-get($map: $font-size, $key: fs-extra-big);
      margin-left: 0.5em;
      @include responsive() {
        font-size: map-get($map: $font-size, $key: fs-big);
      }
      @include responsive(50em) {
        margin-left: 0.3em;
        text-align: start;
        font-size: 1.5rem;
      }
    }
  }
  &__responsive {
    display: none;
    @include responsive(50em) {
      display: block;
      position: absolute;
      top: map-get($map: $heights, $key: h-navbar);
      right: 0;
    }
    .nav-responsive {
      width: 10em;
      @include flex(column);
      &__item {
        border-left: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        border-right: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        width: 100%;
        @include flex(row, center, space-evenly);
        min-height: 4em;
        &--direction {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
