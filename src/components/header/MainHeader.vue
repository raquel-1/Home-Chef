<script setup>
import { defineAsyncComponent, ref, computed } from 'vue'
const Logo = defineAsyncComponent(() => import('@/assets/svgs/Logo.vue'))
const MainHeaderNav = defineAsyncComponent(
  () => import('@/src/components/header/MainHeaderNav.vue'),
)
const MainHeaderButtons = defineAsyncComponent(
  () => import('@/src/components/header/MainHeaderButtons.vue'),
)

// Define una variable reactiva para almacenar el ítem activo
const activeItem = ref('home')
</script>

<template>
  <header class="header">
    <button class="header__logo">
      <Logo />
      <h1 class="name-app">Home Chef</h1>
    </button>
    <MainHeaderNav :activeItem="activeItem" @update:activeItem="activeItem = $event" />
    <MainHeaderButtons />
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  @include flex(row, center, space-between);
  max-width: map-get($map: $sizes, $key: s-navbar);
  height: map-get($map: $heights, $key: h-navbar);
  font-family: map-get($map: $fonts, $key: f-font-bold);
  position: fixed;
  top: 0;
  z-index: 5;
  overflow: hidden;
  background-color: map-get($map: $colors, $key: c-back);
  border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
  padding: map-get($map: $sizes, $key: s-padding-nav);
  @include responsive(64em) {
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
      @include responsive(64em) {
        font-size: map-get($map: $font-size, $key: fs-big);
      }
      @include responsive(50em) {
        width: 3.5em;
        margin-left: 0.3em;
        text-align: start;
        font-size: 1.5rem;
      }
      @include responsive(43em) {
        width: 6em;
      }
    }
  }
}
</style>
