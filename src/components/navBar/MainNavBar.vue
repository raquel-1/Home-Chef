<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const InsideNav = defineAsyncComponent(() => import('@/components/navBar/InsideNav.vue'))
const MainNavButtons = defineAsyncComponent(
  () => import('@/components/navBar/MainNavButtons.vue'),
)
const ResponsiveNav = defineAsyncComponent(
  () => import('@/components/navBar/ResponsiveNav.vue'),
)
const Logo = defineAsyncComponent(() => import('@/assets/svgs/Logo.vue'))
const Menu = defineAsyncComponent(() => import('@/assets/svgs/Menu.vue'))

const showResponsiveNav = ref(false)

const changeResponsiveNav = () => {
  showResponsiveNav.value = !showResponsiveNav.value
}

const closeResponsiveNav = () => {
  showResponsiveNav.value = false
}
</script>

<template>
  <nav class="nav" v-on-click-outside="closeResponsiveNav">
    <router-link to="/home" class="nav__logo">
      <Logo :width="'3em'" :height="'3em'" />
      <h1 class="name-app">Home Chef</h1>
    </router-link>

    <InsideNav />
    <MainNavButtons />

    <Menu @click="changeResponsiveNav" />

    <Transition name="list" mode="out-in">
      <ResponsiveNav v-if="showResponsiveNav" />
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
/** 50em aparecera el hamburguesa */
/** 31.25em el nav abajo version movil */
/** 31.25em h el nav abajo falta nav a la izquierda cuando movil horizontal */
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
  @include responsiveH(31.25em) {
    transform: translateY(-100%);
  }
}

.nav {
  width: 100%;
  @include flex(row, center, space-between);
  max-width: map-get($map: $sizes, $key: s-navbar);
  height: map-get($map: $heights, $key: h-navbar);
  font-family: map-get($map: $fonts, $key: f-font-bold);
  position: fixed;
  top: 0;
  z-index: 10;
  border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
  padding: map-get($map: $sizes, $key: s-padding-nav);
  padding-left: 0.5em;
  @include responsive() {
    padding: 0 1em;
  }
  @include responsive(43em) {
    padding: 2em;
  }
  @include responsive(31.25em) {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 0.05em solid map-get($map: $colors, $key: c-principal-color);
    border-bottom: none;
  }
  @include responsiveH(31.25em) {
    top: 0;
    bottom: 0;
    left: 0;
    right: auto;
    height: 100%;
    width: map-get($map: $heights, $key: h-navbar);
    @include flex(column, center, space-between);
    border: none;
    border-right: 0.05em solid map-get($map: $colors, $key: c-principal-color);
    padding-bottom: 1em;
  }
  &__logo {
    @include flex();
    cursor: pointer;
    @include responsiveH(31.25em) {
      @include flex(column);
      margin-top: 1em;
    }
    .name-app {
      font-size: map-get($map: $font-size, $key: fs-big);
      margin-left: 0.5em;
      @include responsive() {
        font-size: map-get($map: $font-size, $key: fs-medium);
      }
      @include responsive(50em) {
        margin-left: 0.3em;
        text-align: start;
        font-size: 1.5rem;
      }
      @include responsiveH(31.25em) {
        transform: rotate(-90deg);
        margin: 0;
        padding: 0;
        margin-top: 1em;
        border: none;
        font-size: 1.8em;
      }
      @include responsiveH(20em) {
        margin-top: 0.5em;
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
    @include responsiveH(31.25em) {
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
